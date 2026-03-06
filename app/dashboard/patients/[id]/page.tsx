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
    <>
      <style>{`
        .detail-patient-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          padding: 32px;
        }

        .detail-patient-top {
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }

        .detail-avatar {
          width: 64px; height: 64px;
          border-radius: 16px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1457c0;
          font-weight: 700;
          font-size: 20px;
          flex-shrink: 0;
        }

        .detail-name-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 4px;
          flex-wrap: wrap;
        }

        .detail-name {
          font-size: 24px;
          font-weight: 700;
          color: #0a2e6e;
        }

        .detail-dni {
          color: #94a3b8;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .detail-info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .detail-info-label {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
          margin-bottom: 2px;
        }

        .detail-info-value {
          font-size: 14px;
          color: #334155;
          font-weight: 500;
          word-break: break-word;
        }

        /* Records section */
        .records-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .records-title {
          font-size: 18px;
          font-weight: 700;
          color: #0a2e6e;
        }

        .records-count {
          font-size: 14px;
          color: #94a3b8;
        }

        .records-table-wrap {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          overflow: hidden;
        }

        .records-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .records-scroll table {
          min-width: 720px;
          width: 100%;
        }

        /* Mobile record cards */
        .mobile-records {
          display: none;
        }

        .mobile-record-card {
          background: #fff;
          border: 1px solid #e8edf5;
          border-radius: 14px;
          padding: 16px;
          margin-bottom: 10px;
        }

        .mobile-record-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .mobile-record-date {
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        .mobile-record-status {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          background: #ecfdf5;
          color: #059669;
        }

        .mobile-record-status span {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #10b981;
        }

        .mobile-record-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .mobile-record-field-label {
          font-size: 11px;
          color: #94a3b8;
          margin-bottom: 2px;
        }

        .mobile-record-field-value {
          font-size: 13px;
          color: #334155;
          font-weight: 500;
        }

        .mobile-record-diagnosis {
          grid-column: 1 / -1;
          margin-top: 4px;
          padding-top: 10px;
          border-top: 1px solid #f1f5f9;
        }

        .mobile-record-view {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 100%;
          margin-top: 12px;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: none;
          color: #1457c0;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
        }

        .mobile-record-view:hover {
          background: #eff6ff;
          border-color: #1457c0;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .detail-info-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .detail-patient-card {
            padding: 20px;
          }

          .detail-patient-top {
            flex-direction: column;
            gap: 16px;
          }

          .detail-avatar {
            width: 52px; height: 52px;
            font-size: 17px;
            border-radius: 14px;
          }

          .detail-name {
            font-size: 20px;
          }

          .detail-info-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          /* Ocultar tabla, mostrar cards */
          .desktop-records {
            display: none;
          }

          .mobile-records {
            display: block;
          }

          .records-title {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .detail-patient-card {
            padding: 16px;
          }

          .detail-name {
            font-size: 18px;
          }

          .detail-name-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }

          .detail-info-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .mobile-record-card {
            padding: 14px;
          }

          .mobile-record-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="space-y-6">

        <Breadcrumb items={[
          { label: "Pacientes", href: "/dashboard/patients" },
          { label: "Historial clínico" },
        ]} />

        {/* Patient card */}
        <div className="detail-patient-card">
          <div className="detail-patient-top">
            <div className="detail-avatar">
              {MOCK_PATIENT.fullName.split(" ").map(n => n[0]).slice(0, 2).join("")}
            </div>
            <div style={{ flex: 1 }}>
              <div className="detail-name-row">
                <h1 className="detail-name">{MOCK_PATIENT.fullName}</h1>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${
                  MOCK_PATIENT.isActive ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${MOCK_PATIENT.isActive ? "bg-emerald-500" : "bg-slate-400"}`} />
                  {MOCK_PATIENT.isActive ? "Activo" : "Inactivo"}
                </span>
              </div>
              <p className="detail-dni">DNI: {MOCK_PATIENT.dni}</p>

              <div className="detail-info-grid">
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
                    <p className="detail-info-label">{item.label}</p>
                    <p className="detail-info-value">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Medical records */}
        <div>
          <div className="records-header">
            <div>
              <h2 className="records-title">Historial clínico</h2>
              <p className="records-count">{MOCK_RECORDS.length} atenciones registradas</p>
            </div>
          </div>

          <div className="records-table-wrap">

            {/* Desktop Table */}
            <div className="desktop-records records-scroll">
              <table>
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

            {/* Mobile Cards */}
            <div className="mobile-records" style={{ padding: 16 }}>
              {MOCK_RECORDS.map(record => (
                <div className="mobile-record-card" key={record.id}>
                  <div className="mobile-record-top">
                    <div className="mobile-record-date">
                      {new Date(record.date).toLocaleDateString("es-PE", { day: "2-digit", month: "short", year: "numeric" })}
                    </div>
                    <div className="mobile-record-status">
                      <span />
                      Completado
                    </div>
                  </div>
                  <div className="mobile-record-grid">
                    <div>
                      <div className="mobile-record-field-label">Médico</div>
                      <div className="mobile-record-field-value">{record.doctor}</div>
                    </div>
                    <div>
                      <div className="mobile-record-field-label">Especialidad</div>
                      <div className="mobile-record-field-value">{record.specialty}</div>
                    </div>
                    <div className="mobile-record-diagnosis">
                      <div className="mobile-record-field-label">Diagnóstico</div>
                      <div className="mobile-record-field-value">{record.diagnosis}</div>
                    </div>
                  </div>
                  <button
                    className="mobile-record-view"
                    onClick={() => router.push(`/dashboard/patients/${id}/records/${record.id}`)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
                    </svg>
                    Ver detalle
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}