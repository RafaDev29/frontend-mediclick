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
    <>
      <style>{`
        .rd-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }

        /* Header card */
        .rd-header {
          padding: 32px;
        }

        .rd-header-inner {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .rd-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 4px;
          flex-wrap: wrap;
        }

        .rd-title {
          font-size: 20px;
          font-weight: 700;
          color: #0a2e6e;
        }

        .rd-subtitle {
          color: #94a3b8;
          font-size: 14px;
        }

        .rd-date-block {
          text-align: right;
          flex-shrink: 0;
        }

        .rd-date-label {
          font-size: 12px;
          color: #94a3b8;
          margin-bottom: 2px;
        }

        .rd-date-value {
          font-size: 14px;
          font-weight: 600;
          color: #334155;
        }

        /* Vitals */
        .rd-vitals {
          padding: 24px;
        }

        .rd-section-title {
          font-size: 13px;
          font-weight: 700;
          color: #0a2e6e;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 16px;
        }

        .rd-vitals-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .rd-vital-item {
          background: #f8fafc;
          border-radius: 12px;
          padding: 16px;
          text-align: center;
        }

        .rd-vital-icon {
          font-size: 20px;
          margin-bottom: 4px;
        }

        .rd-vital-value {
          font-size: 14px;
          font-weight: 700;
          color: #0a2e6e;
        }

        .rd-vital-label {
          font-size: 12px;
          color: #94a3b8;
          margin-top: 2px;
        }

        /* Diagnosis + Treatment grid */
        .rd-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .rd-two-col-card {
          padding: 24px;
        }

        .rd-text {
          font-size: 14px;
          color: #334155;
          line-height: 1.7;
        }

        /* Notes */
        .rd-notes {
          padding: 24px;
        }

        .rd-notes-text {
          font-size: 14px;
          color: #475569;
          line-height: 1.7;
        }

        /* Next appointment */
        .rd-next {
          background: #eff6ff;
          border-radius: 16px;
          border: 1px solid #bfdbfe;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .rd-next-icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: #1457c0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .rd-next-label {
          font-size: 12px;
          color: #1457c0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 2px;
        }

        .rd-next-date {
          font-size: 14px;
          font-weight: 700;
          color: #0a2e6e;
        }

        /* ===== TABLET (768px) ===== */
        @media (max-width: 768px) {
          .rd-header {
            padding: 20px;
          }

          .rd-header-inner {
            flex-direction: column;
            gap: 12px;
          }

          .rd-date-block {
            text-align: left;
          }

          .rd-title {
            font-size: 18px;
          }

          .rd-vitals {
            padding: 20px;
          }

          .rd-vitals-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }

          .rd-two-col {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .rd-two-col-card {
            padding: 20px;
          }

          .rd-notes {
            padding: 20px;
          }

          .rd-next {
            padding: 20px;
          }
        }

        /* ===== MOBILE (480px) ===== */
        @media (max-width: 480px) {
          .rd-header {
            padding: 16px;
          }

          .rd-title-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .rd-title {
            font-size: 16px;
          }

          .rd-subtitle {
            font-size: 13px;
          }

          .rd-vitals {
            padding: 16px;
          }

          .rd-vitals-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .rd-vital-item {
            padding: 12px;
          }

          .rd-vital-icon {
            font-size: 18px;
          }

          .rd-vital-value {
            font-size: 13px;
          }

          .rd-vital-label {
            font-size: 11px;
          }

          .rd-two-col-card {
            padding: 16px;
          }

          .rd-section-title {
            font-size: 12px;
          }

          .rd-text {
            font-size: 13px;
          }

          .rd-notes {
            padding: 16px;
          }

          .rd-notes-text {
            font-size: 13px;
          }

          .rd-next {
            padding: 16px;
            gap: 12px;
          }

          .rd-next-icon {
            width: 36px; height: 36px;
            border-radius: 10px;
          }

          .rd-next-label {
            font-size: 11px;
          }

          .rd-next-date {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="space-y-6 max-w-4xl">

        <Breadcrumb items={[
          { label: "Pacientes", href: "/dashboard/patients" },
          { label: "Historial clínico", href: `/dashboard/patients/${id}` },
          { label: "Detalle" },
        ]} />

        {/* Header */}
        <div className="rd-card rd-header">
          <div className="rd-header-inner">
            <div>
              <div className="rd-title-row">
                <h1 className="rd-title">{record.diagnosis}</h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Completado
                </span>
              </div>
              <p className="rd-subtitle">{record.specialty} · {record.doctor}</p>
            </div>
            <div className="rd-date-block">
              <p className="rd-date-label">Fecha de atención</p>
              <p className="rd-date-value">
                {new Date(record.date).toLocaleDateString("es-PE", { day: "2-digit", month: "long", year: "numeric" })}
              </p>
            </div>
          </div>
        </div>

        {/* Vital signs */}
        <div className="rd-card rd-vitals">
          <h2 className="rd-section-title">Signos vitales</h2>
          <div className="rd-vitals-grid">
            {[
              { label: "Presión arterial", value: record.vitalSigns.pressure, icon: "❤️" },
              { label: "Temperatura", value: record.vitalSigns.temp, icon: "🌡️" },
              { label: "Pulso", value: record.vitalSigns.pulse, icon: "💓" },
              { label: "Peso", value: record.vitalSigns.weight, icon: "⚖️" },
              { label: "Talla", value: record.vitalSigns.height, icon: "📏" },
            ].map((v, i) => (
              <div key={i} className="rd-vital-item">
                <p className="rd-vital-icon">{v.icon}</p>
                <p className="rd-vital-value">{v.value}</p>
                <p className="rd-vital-label">{v.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnosis & Treatment */}
        <div className="rd-two-col">
          <div className="rd-card rd-two-col-card">
            <h2 className="rd-section-title">Diagnóstico</h2>
            <p className="rd-text">{record.diagnosis}</p>
          </div>
          <div className="rd-card rd-two-col-card">
            <h2 className="rd-section-title">Tratamiento</h2>
            <p className="rd-text">{record.treatment}</p>
          </div>
        </div>

        {/* Notes */}
        <div className="rd-card rd-notes">
          <h2 className="rd-section-title">Notas del médico</h2>
          <p className="rd-notes-text">{record.notes}</p>
        </div>

        {/* Next appointment */}
        <div className="rd-next">
          <div className="rd-next-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div>
            <p className="rd-next-label">Próxima cita</p>
            <p className="rd-next-date">
              {new Date(record.nextAppointment).toLocaleDateString("es-PE", { day: "2-digit", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>

      </div>
    </>
  )
}