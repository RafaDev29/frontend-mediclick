"use client"

import Breadcrumb from "@/components/shared/Breadcrumb"
import { useParams, useRouter } from "next/navigation"

const MOCK_RECORDS = [
  {
    id: "rec-001",
    date: "2026-02-15",
    doctor: "Dr. Carlos Mendoza",
    specialty: "Medicina General",
    diagnosis: "Faringitis aguda",
    treatment: "Amoxicilina 500mg cada 8h por 7 días",
    status: "COMPLETED",
  },
  {
    id: "rec-002",
    date: "2026-01-08",
    doctor: "Dra. Ana Torres",
    specialty: "Cardiología",
    diagnosis: "Hipertensión leve",
    treatment: "Losartán 50mg diario, dieta baja en sodio",
    status: "COMPLETED",
  },
  {
    id: "rec-003",
    date: "2025-11-20",
    doctor: "Dr. Luis Paredes",
    specialty: "Traumatología",
    diagnosis: "Esguince de tobillo grado II",
    treatment: "Reposo, hielo, ibuprofeno 400mg cada 8h",
    status: "COMPLETED",
  },
  {
    id: "rec-004",
    date: "2025-09-03",
    doctor: "Dra. María Quispe",
    specialty: "Medicina General",
    diagnosis: "Control preventivo anual",
    treatment: "Sin tratamiento. Resultados normales.",
    status: "COMPLETED",
  },
]

const MOCK_PATIENT = {
  fullName: "Rafael Andrés Rossel Galarza",
  dni: "77451417",
  email: "rosselgalarzarafael@gmail.com",
  phone: "987654321",
  birthDate: "2000-09-29",
  gender: "MALE",
  bloodType: "O+",
  address: "Av. Lima 123",
  district: "Miraflores",
  city: "Lima",
  insuranceName: "Rimac",
  insuranceCode: "RIM-001",
  allergies: "Penicilina",
  observations: "Ninguna",
  isActive: true,
}

export default function PatientDetailPage() {
  const { id } = useParams()
  const router = useRouter()

  return (
    <div className="space-y-6">

      <Breadcrumb items={[
        { label: "Pacientes", href: "/dashboard/patients" },
        { label: "Historial clínico" },
      ]} />

      {/* Patient card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#eff6ff] flex items-center justify-center text-[#1457c0] font-bold text-xl shrink-0">
            {MOCK_PATIENT.fullName.split(" ").map(n => n[0]).slice(0, 2).join("")}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-[#0a2e6e]">{MOCK_PATIENT.fullName}</h1>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${MOCK_PATIENT.isActive ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${MOCK_PATIENT.isActive ? "bg-emerald-500" : "bg-slate-400"}`} />
                {MOCK_PATIENT.isActive ? "Activo" : "Inactivo"}
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-5">DNI: {MOCK_PATIENT.dni}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Email", value: MOCK_PATIENT.email },
                { label: "Teléfono", value: MOCK_PATIENT.phone },
                { label: "Tipo de sangre", value: MOCK_PATIENT.bloodType },
                { label: "Seguro", value: `${MOCK_PATIENT.insuranceName} · ${MOCK_PATIENT.insuranceCode}` },
                { label: "Dirección", value: `${MOCK_PATIENT.address}, ${MOCK_PATIENT.district}` },
                { label: "Ciudad", value: MOCK_PATIENT.city },
                { label: "Alergias", value: MOCK_PATIENT.allergies },
                { label: "Observaciones", value: MOCK_PATIENT.observations },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-xs text-slate-400 font-medium mb-0.5">{item.label}</p>
                  <p className="text-sm text-slate-700 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Medical records */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-[#0a2e6e]">Historial clínico</h2>
            <p className="text-slate-400 text-sm">{MOCK_RECORDS.length} atenciones registradas</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/60">
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Fecha</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Médico</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Especialidad</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Diagnóstico</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_RECORDS.map(record => (
                <tr key={record.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {new Date(record.date).toLocaleDateString("es-PE", { day: "2-digit", month: "short", year: "numeric" })}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{record.doctor}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{record.specialty}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{record.diagnosis}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Completado
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => router.push(`/dashboard/patients/${id}/records/${record.id}`)}
                      className="p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}