"use client"

import { useState, useEffect } from "react"
import { patientsService } from "@/features/patients/services/patients.service"
import type { Patient, CreatePatientPayload } from "@/features/patients/types/patient.types"
import { useRouter } from "next/navigation"
import Breadcrumb from "@/components/shared/Breadcrumb"

const GENDER_OPTIONS = [
  { value: "MALE", label: "Masculino" },
  { value: "FEMALE", label: "Femenino" },
]

const BLOOD_OPTIONS = [
  { value: "A_POSITIVE", label: "A+" },
  { value: "A_NEGATIVE", label: "A-" },
  { value: "B_POSITIVE", label: "B+" },
  { value: "B_NEGATIVE", label: "B-" },
  { value: "O_POSITIVE", label: "O+" },
  { value: "O_NEGATIVE", label: "O-" },
  { value: "AB_POSITIVE", label: "AB+" },
  { value: "AB_NEGATIVE", label: "AB-" },
]

const PATIENT_STATUS_OPTIONS = [
  { value: "PRE_REGISTRO", label: "Pre-registro", color: "bg-slate-100 text-slate-600" },
  { value: "REGISTRADO", label: "Registrado", color: "bg-blue-50 text-blue-600" },
  { value: "CITA_PROGRAMADA", label: "Cita Programada", color: "bg-indigo-50 text-indigo-600" },
  { value: "EN_SALA_ESPERA", label: "En Sala de Espera", color: "bg-amber-50 text-amber-600" },
  { value: "EN_TRIAJE", label: "En Triaje / Evaluación Inicial", color: "bg-orange-50 text-orange-600" },
  { value: "EN_CONSULTA", label: "En Consulta Médica", color: "bg-cyan-50 text-cyan-600" },
  { value: "EN_EXAMENES", label: "En Exámenes / Diagnóstico", color: "bg-purple-50 text-purple-600" },
  { value: "EN_PROCEDIMIENTO", label: "En Procedimiento", color: "bg-pink-50 text-pink-600" },
  { value: "DIAGNOSTICO_EMITIDO", label: "Diagnóstico Emitido", color: "bg-teal-50 text-teal-600" },
  { value: "TRATAMIENTO_EN_CURSO", label: "Tratamiento en Curso", color: "bg-yellow-50 text-yellow-700" },
  { value: "HOSPITALIZACION", label: "Observación / Hospitalización", color: "bg-red-50 text-red-600" },
  { value: "ALTA_MEDICA", label: "Alta Médica", color: "bg-emerald-50 text-emerald-600" },
  { value: "FACTURACION_PENDIENTE", label: "Facturación Pendiente", color: "bg-orange-50 text-orange-700" },
  { value: "PAGO_REALIZADO", label: "Pago Realizado", color: "bg-green-50 text-green-600" },
  { value: "CONTROL_PROGRAMADO", label: "Control Programado", color: "bg-sky-50 text-sky-600" },
  { value: "CERRADO", label: "Cerrado", color: "bg-gray-100 text-gray-500" },
]

const getRandomStatus = (index: number) => {
  return PATIENT_STATUS_OPTIONS[index % PATIENT_STATUS_OPTIONS.length]
}

const emptyForm: CreatePatientPayload = {
  firstName: "", lastName: "", dni: "", email: "", phone: "",
  birthDate: "", gender: "MALE", bloodType: "O_POSITIVE",
  address: "", district: "", city: "",
  insuranceName: "", insuranceCode: "", allergies: "", observations: "",
}

const ITEMS_PER_PAGE = 10

export default function PatientsPage() {
  const router = useRouter()

  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editPatient, setEditPatient] = useState<Patient | null>(null)
  const [form, setForm] = useState<CreatePatientPayload>(emptyForm)
  const [saving, setSaving] = useState(false)
  const [alert, setAlert] = useState<{ type: "success" | "error"; msg: string } | null>(null)
  const [search, setSearch] = useState("")
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [dniLoading, setDniLoading] = useState(false)
  const [donatesOrgans, setDonatesOrgans] = useState(false)
  const [formStatus, setFormStatus] = useState("PRE_REGISTRO")
  const [currentPage, setCurrentPage] = useState(1)

  const showAlertMsg = (type: "success" | "error", msg: string) => {
    setAlert({ type, msg })
    setTimeout(() => setAlert(null), 3500)
  }

  const loadPatients = async () => {
    try {
      setLoading(true)
      const res = await patientsService.getAll()
      if (res.success) setPatients(res.data)
      else showAlertMsg("error", res.message)
    } catch (err: any) {
      showAlertMsg("error", err?.response?.data?.message || "Error al cargar pacientes")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadPatients() }, [])

  // Reset page when search changes
  useEffect(() => { setCurrentPage(1) }, [search])

  const openCreate = () => {
    setEditPatient(null)
    setForm(emptyForm)
    setDonatesOrgans(false)
    setFormStatus("PRE_REGISTRO")
    setShowModal(true)
  }

  const openEdit = (p: Patient) => {
    setEditPatient(p)
    setDonatesOrgans(false)
    setFormStatus("REGISTRADO")
    setForm({
      firstName: p.firstName, lastName: p.lastName, dni: p.dni,
      email: p.email, phone: p.phone,
      birthDate: p.birthDate.split("T")[0],
      gender: p.gender, bloodType: p.bloodType,
      address: p.address, district: p.district, city: p.city,
      insuranceName: p.insuranceName || "", insuranceCode: p.insuranceCode || "",
      allergies: p.allergies || "", observations: p.observations || "",
    })
    setShowModal(true)
  }

  const handleDniSearch = async () => {
    if (form.dni.length < 6) return
    setDniLoading(true)
    try {
      const res = await patientsService.searchByDni(form.dni)
      if (res.success) {
        setForm(prev => ({
          ...prev,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
        }))
        showAlertMsg("success", res.message)
      } else {
        showAlertMsg("error", res.message)
      }
    } catch (err: any) {
      showAlertMsg("error", err?.response?.data?.message || "DNI no encontrado")
    } finally {
      setDniLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const res = editPatient
        ? await patientsService.update(editPatient.id, form)
        : await patientsService.create(form)
      if (res.success) {
        showAlertMsg("success", res.message)
        setShowModal(false)
        loadPatients()
      } else {
        showAlertMsg("error", res.message)
      }
    } catch (err: any) {
      showAlertMsg("error", err?.response?.data?.message || "Error al guardar")
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!deleteId) return
    try {
      const res = await patientsService.delete(deleteId)
      if (res.success) {
        showAlertMsg("success", res.message)
        setDeleteId(null)
        loadPatients()
      } else {
        showAlertMsg("error", res.message)
      }
    } catch (err: any) {
      showAlertMsg("error", err?.response?.data?.message || "Error al eliminar")
    }
  }

  const f = (field: keyof CreatePatientPayload) => (
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))
  )

  const filtered = patients.filter(p =>
    p.fullName.toLowerCase().includes(search.toLowerCase()) ||
    p.dni.includes(search) ||
    p.email.toLowerCase().includes(search.toLowerCase())
  )

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const paginatedPatients = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )
  const startItem = filtered.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push("...")
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i)
      }
      if (currentPage < totalPages - 2) pages.push("...")
      pages.push(totalPages)
    }
    return pages
  }

  const inputCls = "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#1457c0] focus:ring-2 focus:ring-[#1457c0]/10 transition-all"
  const labelCls = "block text-xs font-medium text-slate-600 mb-1.5"

  return (
    <>
      <style>{`
        .patients-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .patients-table-wrap table {
          min-width: 860px;
        }

        .patients-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .patients-search {
          max-width: 380px;
          width: 100%;
        }

        .pagination-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-top: 1px solid #f1f5f9;
          flex-wrap: wrap;
          gap: 12px;
        }

        .pagination-info {
          font-size: 13px;
          color: #64748b;
        }

        .pagination-buttons {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .pagination-btn {
          min-width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #fff;
          color: #475569;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
        }

        .pagination-btn:hover:not(:disabled):not(.active) {
          border-color: #1457c0;
          color: #1457c0;
          background: #eff6ff;
        }

        .pagination-btn.active {
          background: #1457c0;
          border-color: #1457c0;
          color: #fff;
        }

        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pagination-ellipsis {
          min-width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          font-size: 13px;
        }

        /* ===== MOBILE CARDS (ocultas en desktop) ===== */
        .mobile-cards {
          display: none;
        }

        .mobile-card {
          background: #fff;
          border: 1px solid #e8edf5;
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 12px;
        }

        .mobile-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .mobile-card-patient {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mobile-card-avatar {
          width: 38px; height: 38px;
          border-radius: 12px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1457c0;
          font-weight: 700;
          font-size: 13px;
          flex-shrink: 0;
        }

        .mobile-card-name {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }

        .mobile-card-location {
          font-size: 12px;
          color: #94a3b8;
        }

        .mobile-card-actions {
          display: flex;
          gap: 4px;
        }

        .mobile-card-actions button {
          padding: 6px;
          border-radius: 8px;
          border: none;
          background: none;
          cursor: pointer;
          color: #94a3b8;
          transition: all 0.15s;
        }

        .mobile-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .mobile-card-field {
          font-size: 12px;
        }

        .mobile-card-field-label {
          color: #94a3b8;
          margin-bottom: 2px;
        }

        .mobile-card-field-value {
          color: #334155;
          font-weight: 500;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .patients-search {
            max-width: 320px;
          }
        }

        @media (max-width: 768px) {
          .patients-header {
            flex-direction: column;
            align-items: stretch;
          }

          .patients-search {
            max-width: 100%;
          }

          /* Ocultar tabla desktop, mostrar cards */
          .desktop-table {
            display: none;
          }

          .mobile-cards {
            display: block;
          }

          .pagination-wrap {
            padding: 12px 16px;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .pagination-info {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .mobile-card {
            padding: 14px;
          }

          .mobile-card-grid {
            grid-template-columns: 1fr;
          }

          .pagination-btn {
            min-width: 32px;
            height: 32px;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="space-y-4">

        {/* Alert */}
        {alert && (
          <div className={`fixed top-6 right-6 z-50 px-5 py-3.5 rounded-2xl text-sm font-medium shadow-xl flex items-center gap-3 transition-all ${
            alert.type === "success"
              ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
              : "bg-red-50 border border-red-200 text-red-700"
          }`}>
            {alert.type === "success" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            )}
            {alert.msg}
          </div>
        )}

        {/* Header */}
        <div className="patients-header">
          <Breadcrumb items={[{ label: "Pacientes" }]} />
          <button
            onClick={openCreate}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1457c0] hover:bg-[#0a2e6e] text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-[#1457c0]/20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Nuevo paciente
          </button>
        </div>

        {/* Search */}
        <div className="patients-search">
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Buscar por nombre, DNI o email..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#1457c0] focus:ring-2 focus:ring-[#1457c0]/10 transition-all"
            />
          </div>
        </div>

        {/* Table + Cards Container */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
          {loading ? (
            <div className="flex items-center justify-center py-20 text-slate-400">
              <svg className="animate-spin w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Cargando pacientes...
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-3 opacity-40">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
              </svg>
              <p className="text-sm">No se encontraron pacientes</p>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="desktop-table patients-table-wrap">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0a2e6e]">
                      <th className="text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Paciente</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">DNI</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Contacto</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Sangre</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Registro</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Estado</th>
                      <th className="px-6 py-4"/>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {paginatedPatients.map((p, index) => {
                      const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index
                      const status = getRandomStatus(globalIndex)
                      return (
                        <tr key={p.id} className="hover:bg-slate-50/60 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#1457c0] font-bold text-sm shrink-0">
                                {p.firstName[0]}{p.lastName[0]}
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-800">{p.fullName}</p>
                                <p className="text-xs text-slate-400">{p.city}, {p.district}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">{p.dni}</td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-slate-600">{p.email}</p>
                            <p className="text-xs text-slate-400">{p.phone}</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-red-50 text-red-600 text-xs font-semibold">
                              {BLOOD_OPTIONS.find(b => b.value === p.bloodType)?.label}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${
                              p.isActive ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${p.isActive ? "bg-emerald-500" : "bg-slate-400"}`}/>
                              {p.isActive ? "Activo" : "Inactivo"}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${status.color}`}>
                              {status.label}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 justify-end">
                              <button onClick={() => openEdit(p)} className="p-2 rounded-lg text-slate-400 hover:text-[#1457c0] hover:bg-[#eff6ff] transition-all">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                </svg>
                              </button>
                              <button onClick={() => setDeleteId(p.id)} className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                                  <path d="M10 11v6"/><path d="M14 11v6"/>
                                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                                </svg>
                              </button>
                              <button onClick={() => router.push(`/dashboard/patients/${p.id}`)} className="p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="mobile-cards p-4">
                {paginatedPatients.map((p, index) => {
                  const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index
                  const status = getRandomStatus(globalIndex)
                  return (
                    <div className="mobile-card" key={p.id}>
                      <div className="mobile-card-header">
                        <div className="mobile-card-patient">
                          <div className="mobile-card-avatar">
                            {p.firstName[0]}{p.lastName[0]}
                          </div>
                          <div>
                            <div className="mobile-card-name">{p.fullName}</div>
                            <div className="mobile-card-location">{p.city}, {p.district}</div>
                          </div>
                        </div>
                        <div className="mobile-card-actions">
                          <button onClick={() => openEdit(p)} className="hover:text-[#1457c0] hover:bg-[#eff6ff]">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                          </button>
                          <button onClick={() => setDeleteId(p.id)} className="hover:text-red-500 hover:bg-red-50">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                              <path d="M10 11v6"/><path d="M14 11v6"/>
                              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                            </svg>
                          </button>
                          <button onClick={() => router.push(`/dashboard/patients/${p.id}`)} className="hover:text-emerald-600 hover:bg-emerald-50">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mobile-card-grid">
                        <div className="mobile-card-field">
                          <div className="mobile-card-field-label">DNI</div>
                          <div className="mobile-card-field-value">{p.dni}</div>
                        </div>
                        <div className="mobile-card-field">
                          <div className="mobile-card-field-label">Sangre</div>
                          <div className="mobile-card-field-value">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-red-50 text-red-600 text-xs font-semibold">
                              {BLOOD_OPTIONS.find(b => b.value === p.bloodType)?.label}
                            </span>
                          </div>
                        </div>
                        <div className="mobile-card-field">
                          <div className="mobile-card-field-label">Email</div>
                          <div className="mobile-card-field-value" style={{ fontSize: 12, wordBreak: "break-all" }}>{p.email}</div>
                        </div>
                        <div className="mobile-card-field">
                          <div className="mobile-card-field-label">Teléfono</div>
                          <div className="mobile-card-field-value">{p.phone}</div>
                        </div>
                        <div className="mobile-card-field">
                          <div className="mobile-card-field-label">Registro</div>
                          <div className="mobile-card-field-value">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold ${
                              p.isActive ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${p.isActive ? "bg-emerald-500" : "bg-slate-400"}`}/>
                              {p.isActive ? "Activo" : "Inactivo"}
                            </span>
                          </div>
                        </div>
                        <div className="mobile-card-field">
                          <div className="mobile-card-field-label">Estado</div>
                          <div className="mobile-card-field-value">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold ${status.color}`}>
                              {status.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Pagination */}
              <div className="pagination-wrap">
                <div className="pagination-info">
                  Mostrando {startItem}-{endItem} de {filtered.length} pacientes
                </div>
                <div className="pagination-buttons">
                  <button
                    className="pagination-btn"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6"/>
                    </svg>
                  </button>
                  {getPageNumbers().map((page, i) =>
                    page === "..." ? (
                      <div key={`ellipsis-${i}`} className="pagination-ellipsis">...</div>
                    ) : (
                      <button
                        key={page}
                        className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                        onClick={() => setCurrentPage(page as number)}
                      >
                        {page}
                      </button>
                    )
                  )}
                  <button
                    className="pagination-btn"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Create/Edit */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 sticky top-0 bg-white z-10 rounded-t-3xl">
                <div>
                  <h2 className="text-lg font-bold text-[#0a2e6e]">
                    {editPatient ? "Editar paciente" : "Nuevo paciente"}
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">Completa los datos del paciente</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6 modal-form-content">

                {/* Personal */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Datos personales</p>
                  <div className="grid grid-cols-2 gap-4 modal-grid">

                    <div className="col-span-2">
                      <label className={labelCls}>DNI *</label>
                      <div className="flex gap-2">
                        <input required value={form.dni} onChange={f("dni")} placeholder="77777777" maxLength={8} className={inputCls}/>
                        <button
                          type="button"
                          onClick={handleDniSearch}
                          disabled={dniLoading || form.dni.length < 6}
                          className="px-4 py-2.5 rounded-xl bg-[#1457c0] hover:bg-[#0a2e6e] text-white text-sm font-semibold transition-all disabled:opacity-50 flex items-center gap-2 shrink-0"
                        >
                          {dniLoading ? (
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                              <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z"/>
                            </svg>
                          ) : (
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                          )}
                          Buscar
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className={labelCls}>Nombres *</label>
                      <input required value={form.firstName} onChange={f("firstName")} placeholder="Nombres" className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Apellidos *</label>
                      <input required value={form.lastName} onChange={f("lastName")} placeholder="Apellidos" className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Fecha de nacimiento *</label>
                      <input required type="date" value={form.birthDate} onChange={f("birthDate")} className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Género *</label>
                      <select required value={form.gender} onChange={f("gender")} className={inputCls}>
                        {GENDER_OPTIONS.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Tipo de sangre *</label>
                      <select required value={form.bloodType} onChange={f("bloodType")} className={inputCls}>
                        {BLOOD_OPTIONS.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Estado del paciente</label>
                      <select value={formStatus} onChange={(e) => setFormStatus(e.target.value)} className={inputCls}>
                        {PATIENT_STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                      </select>
                    </div>

                    <div className="col-span-2">
                      <label className={labelCls}>Donación de órganos</label>
                      <div className="flex gap-3 mt-1">
                        <button
                          type="button"
                          onClick={() => setDonatesOrgans(true)}
                          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                            donatesOrgans
                              ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                              : "bg-slate-50 border-slate-200 text-slate-400 hover:border-emerald-200 hover:text-emerald-600"
                          }`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill={donatesOrgans ? "#059669" : "none"} stroke={donatesOrgans ? "#059669" : "currentColor"} strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                          </svg>
                          Sí dona
                        </button>
                        <button
                          type="button"
                          onClick={() => setDonatesOrgans(false)}
                          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                            !donatesOrgans
                              ? "bg-red-50 border-red-200 text-red-600"
                              : "bg-slate-50 border-slate-200 text-slate-400 hover:border-red-200 hover:text-red-400"
                          }`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                          </svg>
                          No dona
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contacto */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Contacto</p>
                  <div className="grid grid-cols-2 gap-4 modal-grid">
                    <div>
                      <label className={labelCls}>Email *</label>
                      <input required type="email" value={form.email} onChange={f("email")} placeholder="paciente@email.com" className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Teléfono *</label>
                      <input required value={form.phone} onChange={f("phone")} placeholder="987654321" className={inputCls}/>
                    </div>
                  </div>
                </div>

                {/* Dirección */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Dirección</p>
                  <div className="grid grid-cols-2 gap-4 modal-grid">
                    <div className="col-span-2">
                      <label className={labelCls}>Dirección *</label>
                      <input required value={form.address} onChange={f("address")} placeholder="Av. Lima 123" className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Distrito *</label>
                      <input required value={form.district} onChange={f("district")} placeholder="Miraflores" className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Ciudad *</label>
                      <input required value={form.city} onChange={f("city")} placeholder="Lima" className={inputCls}/>
                    </div>
                  </div>
                </div>

                {/* Seguro */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Seguro médico</p>
                  <div className="grid grid-cols-2 gap-4 modal-grid">
                    <div>
                      <label className={labelCls}>Nombre del seguro</label>
                      <input value={form.insuranceName} onChange={f("insuranceName")} placeholder="Rimac" className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Código del seguro</label>
                      <input value={form.insuranceCode} onChange={f("insuranceCode")} placeholder="RIM-001" className={inputCls}/>
                    </div>
                  </div>
                </div>

                {/* Clínico */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Info clínica</p>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className={labelCls}>Alergias</label>
                      <input value={form.allergies} onChange={f("allergies")} placeholder="Penicilina, Ibuprofeno..." className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Observaciones</label>
                      <textarea value={form.observations} onChange={f("observations")} placeholder="Observaciones relevantes..." rows={3} className={inputCls + " resize-none"}/>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2 modal-actions">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 py-3 rounded-xl bg-[#1457c0] hover:bg-[#0a2e6e] text-white text-sm font-semibold transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-[#1457c0]/20"
                  >
                    {saving ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                          <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Guardando...
                      </>
                    ) : editPatient ? "Guardar cambios" : "Crear paciente"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal Delete */}
        {deleteId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                  <path d="M10 11v6"/><path d="M14 11v6"/>
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">¿Eliminar paciente?</h3>
              <p className="text-sm text-slate-500 mb-6">Esta acción no se puede deshacer.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteId(null)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-all"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  )
}