"use client"

import Breadcrumb from "@/components/shared/Breadcrumb"
import { useParams, useRouter } from "next/navigation"

const MOCK_RECORDS: Record<string, any> = {
  "rec-001": {
    date: "2026-02-15",
    doctor: "Dr. Carlos Mendoza",
    specialty: "Medicina General",
    diagnosis: "Faringitis aguda",
    treatment: "Amoxicilina 500mg cada 8h por 7 días",
    notes: "Paciente presenta dolor de garganta intenso, fiebre de 38.5°C y dificultad para deglutir. Se observa eritema faríngeo con exudado blanquecino bilateral.",
    vitalSigns: { pressure: "118/76 mmHg", temp: "38.5°C", pulse: "92 bpm", weight: "72 kg", height: "1.75 m" },
    nextAppointment: "2026-02-22",
  },
  "rec-002": {
    date: "2026-01-08",
    doctor: "Dra. Ana Torres",
    specialty: "Cardiología",
    diagnosis: "Hipertensión leve",
    treatment: "Losartán 50mg diario, dieta baja en sodio",
    notes: "Paciente refiere cefalea occipital recurrente. Presión arterial elevada en tres mediciones consecutivas. Se solicita monitoreo ambulatorio de presión arterial (MAPA).",
    vitalSigns: { pressure: "145/92 mmHg", temp: "36.8°C", pulse: "78 bpm", weight: "74 kg", height: "1.75 m" },
    nextAppointment: "2026-02-08",
  },
  "rec-003": {
    date: "2025-11-20",
    doctor: "Dr. Luis Paredes",
    specialty: "Traumatología",
    diagnosis: "Esguince de tobillo grado II",
    treatment: "Reposo, hielo, ibuprofeno 400mg cada 8h",
    notes: "Paciente refiere torcedura de tobillo derecho durante actividad deportiva. Se observa edema moderado y equimosis perimaléolar. Rx sin evidencia de fractura.",
    vitalSigns: { pressure: "120/78 mmHg", temp: "36.6°C", pulse: "80 bpm", weight: "72 kg", height: "1.75 m" },
    nextAppointment: "2025-12-04",
  },
  "rec-004": {
    date: "2025-09-03",
    doctor: "Dra. María Quispe",
    specialty: "Medicina General",
    diagnosis: "Control preventivo anual",
    treatment: "Sin tratamiento. Resultados normales.",
    notes: "Paciente acude a control anual. Examen físico sin hallazgos patológicos. Se solicitan exámenes de laboratorio de rutina: hemograma, glucosa, perfil lipídico.",
    vitalSigns: { pressure: "116/74 mmHg", temp: "36.5°C", pulse: "72 bpm", weight: "71 kg", height: "1.75 m" },
    nextAppointment: "2026-09-03",
  },
}

export default function RecordDetailPage() {
  const { id, recordId } = useParams()
  const router = useRouter()
  const record = MOCK_RECORDS[recordId as string]

  if (!record) return (
    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
      <p className="text-sm">Historial no encontrado</p>
    </div>
  )

  return (
    <div className="space-y-6 max-w-4xl">

      <Breadcrumb items={[
        { label: "Pacientes", href: "/dashboard/patients" },
        { label: "Historial clínico", href: `/dashboard/patients/${id}` },
        { label: "Detalle" },
      ]} />
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-bold text-[#0a2e6e]">{record.diagnosis}</h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Completado
              </span>
            </div>
            <p className="text-slate-400 text-sm">{record.specialty} · {record.doctor}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400 mb-0.5">Fecha de atención</p>
            <p className="text-sm font-semibold text-slate-700">
              {new Date(record.date).toLocaleDateString("es-PE", { day: "2-digit", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
      </div>

      {/* Vital signs */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h2 className="text-sm font-bold text-[#0a2e6e] mb-4 uppercase tracking-wider">Signos vitales</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Presión arterial", value: record.vitalSigns.pressure, icon: "❤️" },
            { label: "Temperatura", value: record.vitalSigns.temp, icon: "🌡️" },
            { label: "Pulso", value: record.vitalSigns.pulse, icon: "💓" },
            { label: "Peso", value: record.vitalSigns.weight, icon: "⚖️" },
            { label: "Talla", value: record.vitalSigns.height, icon: "📏" },
          ].map((v, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-4 text-center">
              <p className="text-xl mb-1">{v.icon}</p>
              <p className="text-sm font-bold text-[#0a2e6e]">{v.value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{v.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnosis & Treatment */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h2 className="text-sm font-bold text-[#0a2e6e] mb-3 uppercase tracking-wider">Diagnóstico</h2>
          <p className="text-slate-700 text-sm leading-relaxed">{record.diagnosis}</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h2 className="text-sm font-bold text-[#0a2e6e] mb-3 uppercase tracking-wider">Tratamiento</h2>
          <p className="text-slate-700 text-sm leading-relaxed">{record.treatment}</p>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h2 className="text-sm font-bold text-[#0a2e6e] mb-3 uppercase tracking-wider">Notas del médico</h2>
        <p className="text-slate-600 text-sm leading-relaxed">{record.notes}</p>
      </div>

      {/* Next appointment */}
      <div className="bg-[#eff6ff] rounded-2xl border border-blue-100 p-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#1457c0] flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-[#1457c0] font-semibold uppercase tracking-wider mb-0.5">Próxima cita</p>
          <p className="text-sm font-bold text-[#0a2e6e]">
            {new Date(record.nextAppointment).toLocaleDateString("es-PE", { day: "2-digit", month: "long", year: "numeric" })}
          </p>
        </div>
      </div>

    </div>
  )
}