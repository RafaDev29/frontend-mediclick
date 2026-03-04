"use client"

import { useState, useEffect } from "react"
import { patientsService } from "@/features/patients/services/patients.service"
import type { Patient, CreatePatientPayload, Gender, BloodType } from "@/features/patients/types/patient.types"

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

const emptyForm: CreatePatientPayload = {
  firstName: "", lastName: "", dni: "", email: "", phone: "",
  birthDate: "", gender: "MALE", bloodType: "O_POSITIVE",
  address: "", district: "", city: "",
  insuranceName: "", insuranceCode: "", allergies: "", observations: "",
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editPatient, setEditPatient] = useState<Patient | null>(null)
  const [form, setForm] = useState<CreatePatientPayload>(emptyForm)
  const [saving, setSaving] = useState(false)
  const [alert, setAlert] = useState<{ type: "success" | "error"; msg: string } | null>(null)
  const [search, setSearch] = useState("")
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const showAlert = (type: "success" | "error", msg: string) => {
    setAlert({ type, msg })
    setTimeout(() => setAlert(null), 3500)
  }

  const loadPatients = async () => {
    try {
      setLoading(true)
      const res = await patientsService.getAll()
      if (res.success) setPatients(res.data)
      else showAlert("error", res.message)
    } catch (err: any) {
      showAlert("error", err?.response?.data?.message || "Error al cargar pacientes")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadPatients() }, [])

  const openCreate = () => {
    setEditPatient(null)
    setForm(emptyForm)
    setShowModal(true)
  }

  const openEdit = (p: Patient) => {
    setEditPatient(p)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const res = editPatient
        ? await patientsService.update(editPatient.id, form)
        : await patientsService.create(form)
      if (res.success) {
        showAlert("success", res.message)
        setShowModal(false)
        loadPatients()
      } else {
        showAlert("error", res.message)
      }
    } catch (err: any) {
      showAlert("error", err?.response?.data?.message || "Error al guardar")
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!deleteId) return
    try {
      const res = await patientsService.delete(deleteId)
      if (res.success) {
        showAlert("success", res.message)
        setDeleteId(null)
        loadPatients()
      } else {
        showAlert("error", res.message)
      }
    } catch (err: any) {
      showAlert("error", err?.response?.data?.message || "Error al eliminar")
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

  const inputCls = "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#1457c0] focus:ring-2 focus:ring-[#1457c0]/10 transition-all"
  const labelCls = "block text-xs font-medium text-slate-600 mb-1.5"

  return (
    <div className="space-y-6">

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0a2e6e]">Patients</h1>
          <p className="text-slate-500 text-sm mt-0.5">{patients.length} pacientes registrados</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#1457c0] hover:bg-[#0a2e6e] text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-[#1457c0]/20"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Nuevo paciente
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
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

      {/* Table */}
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
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/60">
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Paciente</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">DNI</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contacto</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Sangre</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map(p => (
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
                      <span className={`w-1.5 h-1.5 rounded-full ${p.isActive ? "bg-emerald-500" : "bg-slate-400"}`} />
                      {p.isActive ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 justify-end">
                      <button
                        onClick={() => openEdit(p)}
                        className="p-2 rounded-lg text-slate-400 hover:text-[#1457c0] hover:bg-[#eff6ff] transition-all"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                      </button>
                      <button
                        onClick={() => setDeleteId(p.id)}
                        className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                          <path d="M10 11v6"/><path d="M14 11v6"/>
                          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal Create/Edit */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
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

            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">

              {/* Personal */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Datos personales</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Nombres *</label>
                    <input required value={form.firstName} onChange={f("firstName")} placeholder="Rafael Andrés" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Apellidos *</label>
                    <input required value={form.lastName} onChange={f("lastName")} placeholder="Rossel Galarza" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>DNI *</label>
                    <input required value={form.dni} onChange={f("dni")} placeholder="77451417" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Fecha de nacimiento *</label>
                    <input required type="date" value={form.birthDate} onChange={f("birthDate")} className={inputCls} />
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
                </div>
              </div>

              {/* Contacto */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Contacto</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input required type="email" value={form.email} onChange={f("email")} placeholder="paciente@email.com" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Teléfono *</label>
                    <input required value={form.phone} onChange={f("phone")} placeholder="987654321" className={inputCls} />
                  </div>
                </div>
              </div>

              {/* Dirección */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Dirección</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className={labelCls}>Dirección *</label>
                    <input required value={form.address} onChange={f("address")} placeholder="Av. Lima 123" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Distrito *</label>
                    <input required value={form.district} onChange={f("district")} placeholder="Miraflores" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Ciudad *</label>
                    <input required value={form.city} onChange={f("city")} placeholder="Lima" className={inputCls} />
                  </div>
                </div>
              </div>

              {/* Seguro */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Seguro médico</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Nombre del seguro</label>
                    <input value={form.insuranceName} onChange={f("insuranceName")} placeholder="Rimac" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Código del seguro</label>
                    <input value={form.insuranceCode} onChange={f("insuranceCode")} placeholder="RIM-001" className={inputCls} />
                  </div>
                </div>
              </div>

              {/* Clínico */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Info clínica</p>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className={labelCls}>Alergias</label>
                    <input value={form.allergies} onChange={f("allergies")} placeholder="Penicilina, Ibuprofeno..." className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Observaciones</label>
                    <textarea value={form.observations} onChange={f("observations")} placeholder="Observaciones relevantes..." rows={3} className={inputCls + " resize-none"} />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
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
  )
}