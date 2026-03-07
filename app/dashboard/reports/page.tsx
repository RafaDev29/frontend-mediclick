"use client"

import { useState } from "react"
import Breadcrumb from "@/components/shared/Breadcrumb"

type FilterPeriod = "week" | "month" | "quarter" | "year"

// ── Mock data ────────────────────────────────────────────────────────────────
const PATIENT_STATUS_DATA = [
  { status: "En Consulta Médica",        value: 142, color: "#0ea5e9",  bg: "bg-cyan-50 text-cyan-600" },
  { status: "En Sala de Espera",         value: 98,  color: "#f59e0b",  bg: "bg-amber-50 text-amber-600" },
  { status: "Tratamiento en Curso",      value: 87,  color: "#eab308",  bg: "bg-yellow-50 text-yellow-700" },
  { status: "Alta Médica",               value: 76,  color: "#10b981",  bg: "bg-emerald-50 text-emerald-600" },
  { status: "En Triaje / Eval. Inicial", value: 64,  color: "#f97316",  bg: "bg-orange-50 text-orange-600" },
  { status: "Hospitalización",           value: 53,  color: "#ef4444",  bg: "bg-red-50 text-red-600" },
  { status: "En Exámenes",               value: 47,  color: "#8b5cf6",  bg: "bg-purple-50 text-purple-600" },
  { status: "Registrado",                value: 38,  color: "#3b82f6",  bg: "bg-blue-50 text-blue-600" },
  { status: "Diagnóstico Emitido",       value: 31,  color: "#14b8a6",  bg: "bg-teal-50 text-teal-600" },
  { status: "En Procedimiento",          value: 29,  color: "#ec4899",  bg: "bg-pink-50 text-pink-600" },
]

const HOURS_DATA = [
  { hour: "06h", val: 8  },
  { hour: "07h", val: 22 },
  { hour: "08h", val: 48 },
  { hour: "09h", val: 74 },
  { hour: "10h", val: 91 },
  { hour: "11h", val: 88 },
  { hour: "12h", val: 63 },
  { hour: "13h", val: 45 },
  { hour: "14h", val: 70 },
  { hour: "15h", val: 85 },
  { hour: "16h", val: 95 },
  { hour: "17h", val: 72 },
  { hour: "18h", val: 50 },
  { hour: "19h", val: 28 },
  { hour: "20h", val: 12 },
]

const DAYS_DATA = [
  { day: "Lun", val: 68 },
  { day: "Mar", val: 74 },
  { day: "Mié", val: 82 },
  { day: "Jue", val: 79 },
  { day: "Vie", val: 91 },
  { day: "Sáb", val: 55 },
  { day: "Dom", val: 22 },
]

const TOP_DOCTORS_DATA = [
  { name: "Dr. Carlos Mendoza",  specialty: "Cardiología",    patients: 124, avatar: "CM", trend: +12, color: "#1457c0" },
  { name: "Dra. Ana Ríos",       specialty: "Pediatría",      patients: 118, avatar: "AR", trend: +8,  color: "#0ea5e9" },
  { name: "Dr. Luis Paredes",    specialty: "Traumatología",  patients: 107, avatar: "LP", trend: +5,  color: "#8b5cf6" },
  { name: "Dra. María Torres",   specialty: "Ginecología",    patients: 99,  avatar: "MT", trend: +3,  color: "#ec4899" },
  { name: "Dr. Roberto Chávez",  specialty: "Neurología",     patients: 88,  avatar: "RC", trend: -2,  color: "#f97316" },
  { name: "Dra. Sofía Vargas",   specialty: "Dermatología",   patients: 81,  avatar: "SV", trend: +7,  color: "#10b981" },
]

const SPECIALTY_DATA = [
  { name: "Cardiología",    patients: 342, color: "#1457c0", pct: 95 },
  { name: "Pediatría",      patients: 318, color: "#0ea5e9", pct: 88 },
  { name: "Traumatología",  patients: 289, color: "#8b5cf6", pct: 80 },
  { name: "Ginecología",    patients: 276, color: "#ec4899", pct: 76 },
  { name: "Neurología",     patients: 241, color: "#f97316", pct: 67 },
  { name: "Dermatología",   patients: 198, color: "#10b981", pct: 55 },
  { name: "Oftalmología",   patients: 87,  color: "#64748b", pct: 24 },
  { name: "Reumatología",   patients: 64,  color: "#94a3b8", pct: 18 },
  { name: "Geriatría",      patients: 51,  color: "#cbd5e1", pct: 14 },
]

const SURGERY_DATA = {
  total: 312,
  completed: 289,
  inProgress: 8,
  scheduled: 15,
  byType: [
    { name: "Laparoscopía",        count: 98,  color: "#1457c0", pct: 100 },
    { name: "Artroscopía",         count: 72,  color: "#0ea5e9", pct: 73  },
    { name: "Cesárea",             count: 65,  color: "#ec4899", pct: 66  },
    { name: "Colecistectomía",     count: 48,  color: "#8b5cf6", pct: 49  },
    { name: "Apendicectomía",      count: 29,  color: "#f97316", pct: 30  },
  ],
  monthlyTrend: [42, 38, 51, 47, 55, 49, 62, 58, 71, 65, 78, 72],
  avgDuration: "2h 34min",
  successRate: 97.8,
  complications: 6,
}

const MONTHS = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]

export default function ReportsPage() {
  const [period, setPeriod] = useState<FilterPeriod>("month")
  const [activeTab, setActiveTab] = useState<"overview" | "doctors" | "specialties" | "surgeries">("overview")

  const totalPatients = PATIENT_STATUS_DATA.reduce((a, b) => a + b.value, 0)
  const maxBar = Math.max(...HOURS_DATA.map(h => h.val))
  const maxDay = Math.max(...DAYS_DATA.map(d => d.val))
  const maxSurgery = Math.max(...SURGERY_DATA.monthlyTrend)
  const lowSpecialties = [...SPECIALTY_DATA].sort((a, b) => a.patients - b.patients).slice(0, 3)

  const PERIOD_LABELS: Record<FilterPeriod, string> = {
    week: "Esta semana",
    month: "Este mes",
    quarter: "Este trimestre",
    year: "Este año",
  }

  return (
    <>
      <style>{`
        .reports-grid { display: grid; gap: 20px; }
        .reports-grid-2 { grid-template-columns: 1fr 1fr; }
        .reports-grid-3 { grid-template-columns: 1fr 1fr 1fr; }
        .reports-grid-4 { grid-template-columns: repeat(4, 1fr); }
        .card { background:#fff; border-radius:20px; border:1px solid #e8edf5; padding:24px; box-shadow:0 1px 4px rgba(0,0,0,.04); }
        .card-title { font-size:13px; font-weight:700; color:#0a2e6e; letter-spacing:.02em; margin-bottom:18px; display:flex; align-items:center; gap:8px; }
        .card-title svg { opacity:.7; }

        .stat-card { border-radius:20px; padding:22px; display:flex; flex-direction:column; gap:6px; }
        .stat-label { font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:.06em; opacity:.65; }
        .stat-value { font-size:32px; font-weight:800; line-height:1; }
        .stat-sub { font-size:12px; opacity:.7; margin-top:2px; }

        .tab-bar { display:flex; gap:4px; background:#f1f5f9; border-radius:14px; padding:4px; margin-bottom:20px; }
        .tab-btn { flex:1; padding:8px 14px; border-radius:10px; border:none; background:none; font-size:12px; font-weight:600; color:#64748b; cursor:pointer; transition:all .15s; white-space:nowrap; }
        .tab-btn.active { background:#fff; color:#0a2e6e; box-shadow:0 1px 4px rgba(0,0,0,.1); }

        .period-filter { display:flex; gap:4px; }
        .period-btn { padding:6px 14px; border-radius:10px; border:1px solid #e2e8f0; background:#fff; font-size:12px; font-weight:600; color:#64748b; cursor:pointer; transition:all .15s; }
        .period-btn.active { background:#1457c0; border-color:#1457c0; color:#fff; }
        .period-btn:hover:not(.active) { border-color:#1457c0; color:#1457c0; }

        /* Bar chart */
        .bar-chart { display:flex; align-items:flex-end; gap:5px; height:120px; }
        .bar-col { flex:1; display:flex; flex-direction:column; align-items:center; gap:4px; }
        .bar-fill { width:100%; border-radius:6px 6px 0 0; transition:height .4s ease; min-height:4px; }
        .bar-label { font-size:10px; color:#94a3b8; font-weight:500; }

        /* Status list */
        .status-list { display:flex; flex-direction:column; gap:10px; }
        .status-row { display:flex; align-items:center; gap:10px; }
        .status-name { font-size:12px; color:#475569; font-weight:500; flex:1; min-width:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .status-bar-track { flex:2; height:7px; background:#f1f5f9; border-radius:99px; overflow:hidden; }
        .status-bar-fill { height:100%; border-radius:99px; transition:width .5s ease; }
        .status-count { font-size:12px; font-weight:700; color:#0a2e6e; min-width:30px; text-align:right; }

        /* Doctor card */
        .doctor-row { display:flex; align-items:center; gap:12px; padding:12px 0; border-bottom:1px solid #f8fafc; }
        .doctor-row:last-child { border-bottom:none; padding-bottom:0; }
        .doctor-avatar { width:38px; height:38px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; flex-shrink:0; }
        .doctor-name { font-size:13px; font-weight:700; color:#1e293b; }
        .doctor-spec { font-size:11px; color:#94a3b8; margin-top:2px; }
        .doctor-count { font-size:20px; font-weight:800; color:#0a2e6e; }
        .doctor-trend { font-size:11px; font-weight:600; }
        .rank-badge { width:22px; height:22px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:800; flex-shrink:0; }

        /* Specialty bar */
        .spec-row { margin-bottom:14px; }
        .spec-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; }
        .spec-name { font-size:12px; font-weight:600; color:#334155; }
        .spec-count { font-size:12px; font-weight:700; color:#0a2e6e; }
        .spec-track { height:8px; background:#f1f5f9; border-radius:99px; overflow:hidden; }
        .spec-fill { height:100%; border-radius:99px; }

        /* Surgery */
        .surgery-stat { text-align:center; padding:16px; border-radius:16px; }
        .surgery-stat-val { font-size:28px; font-weight:800; }
        .surgery-stat-lbl { font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:.05em; opacity:.65; margin-top:4px; }

        /* Low spec badges */
        .low-spec-card { border-radius:16px; padding:16px; border:2px dashed; }

        /* Line chart mini */
        .sparkline-wrap { position:relative; height:70px; margin-top:8px; }

        /* Responsive */
        @media (max-width: 1024px) {
          .reports-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .reports-grid-3 { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .reports-grid-2 { grid-template-columns: 1fr; }
          .reports-grid-3 { grid-template-columns: 1fr; }
          .reports-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .tab-btn { font-size:11px; padding:7px 8px; }
          .period-btn { padding:5px 10px; font-size:11px; }
        }
        @media (max-width: 480px) {
          .reports-grid-4 { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="space-y-5">

        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <Breadcrumb items={[{ label: "Reportes" }]} />
          <div className="period-filter">
            {(["week","month","quarter","year"] as FilterPeriod[]).map(p => (
              <button
                key={p}
                className={`period-btn ${period === p ? "active" : ""}`}
                onClick={() => setPeriod(p)}
              >
                {{ week:"Semana", month:"Mes", quarter:"Trimestre", year:"Año" }[p]}
              </button>
            ))}
          </div>
        </div>

        {/* KPI cards */}
        <div className="reports-grid reports-grid-4">
          <div className="stat-card" style={{ background:"linear-gradient(135deg,#1457c0,#0a2e6e)", color:"#fff" }}>
            <div className="stat-label" style={{ opacity:.7 }}>Total pacientes</div>
            <div className="stat-value">{totalPatients.toLocaleString()}</div>
            <div className="stat-sub">↑ 12% vs período anterior</div>
          </div>
          <div className="stat-card" style={{ background:"linear-gradient(135deg,#0ea5e9,#0284c7)", color:"#fff" }}>
            <div className="stat-label" style={{ opacity:.7 }}>Consultas</div>
            <div className="stat-value">1,284</div>
            <div className="stat-sub">↑ 8% vs período anterior</div>
          </div>
          <div className="stat-card" style={{ background:"linear-gradient(135deg,#10b981,#059669)", color:"#fff" }}>
            <div className="stat-label" style={{ opacity:.7 }}>Cirugías</div>
            <div className="stat-value">{SURGERY_DATA.total}</div>
            <div className="stat-sub">✓ {SURGERY_DATA.successRate}% tasa de éxito</div>
          </div>
          <div className="stat-card" style={{ background:"linear-gradient(135deg,#f59e0b,#d97706)", color:"#fff" }}>
            <div className="stat-label" style={{ opacity:.7 }}>Médicos activos</div>
            <div className="stat-value">48</div>
            <div className="stat-sub">En {PERIOD_LABELS[period].toLowerCase()}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tab-bar">
          {([
            { key:"overview",    label:"Resumen General" },
            { key:"doctors",     label:"Médicos" },
            { key:"specialties", label:"Especialidades" },
            { key:"surgeries",   label:"Cirugías" },
          ] as const).map(t => (
            <button key={t.key} className={`tab-btn ${activeTab === t.key ? "active" : ""}`} onClick={() => setActiveTab(t.key)}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ── TAB: OVERVIEW ───────────────────────────────────────── */}
        {activeTab === "overview" && (
          <>
            <div className="reports-grid reports-grid-2">

              {/* Pacientes por estado */}
              <div className="card">
                <div className="card-title">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  Pacientes por Estado
                </div>
                <div className="status-list">
                  {PATIENT_STATUS_DATA.map(s => (
                    <div className="status-row" key={s.status}>
                      <div className="status-name">{s.status}</div>
                      <div className="status-bar-track">
                        <div className="status-bar-fill" style={{ width:`${(s.value/PATIENT_STATUS_DATA[0].value)*100}%`, background:s.color }}/>
                      </div>
                      <div className="status-count">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Horas y días de mayor afluencia */}
              <div className="card" style={{ display:"flex", flexDirection:"column", gap:0 }}>
                <div className="card-title">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Hora y Día de Mayor Afluencia
                </div>

                {/* Horas */}
                <p style={{ fontSize:11, fontWeight:700, color:"#94a3b8", textTransform:"uppercase", letterSpacing:".05em", marginBottom:8 }}>Por hora</p>
                <div className="bar-chart" style={{ height:90 }}>
                  {HOURS_DATA.map(h => {
                    const pct = (h.val / maxBar) * 100
                    const isTop = h.val === maxBar
                    return (
                      <div className="bar-col" key={h.hour}>
                        <div
                          className="bar-fill"
                          style={{
                            height:`${pct}%`,
                            background: isTop ? "#1457c0" : "#bfdbfe",
                          }}
                        />
                        <div className="bar-label">{h.hour}</div>
                      </div>
                    )
                  })}
                </div>

                <div style={{ height:1, background:"#f1f5f9", margin:"16px 0" }}/>

                {/* Días */}
                <p style={{ fontSize:11, fontWeight:700, color:"#94a3b8", textTransform:"uppercase", letterSpacing:".05em", marginBottom:8 }}>Por día de la semana</p>
                <div className="bar-chart" style={{ height:70 }}>
                  {DAYS_DATA.map(d => {
                    const pct = (d.val / maxDay) * 100
                    const isTop = d.val === maxDay
                    return (
                      <div className="bar-col" key={d.day}>
                        <div
                          className="bar-fill"
                          style={{
                            height:`${pct}%`,
                            background: isTop ? "#0ea5e9" : "#bae6fd",
                          }}
                        />
                        <div className="bar-label">{d.day}</div>
                      </div>
                    )
                  })}
                </div>

                <div style={{ marginTop:14, display:"flex", gap:12 }}>
                  <div style={{ flex:1, padding:"10px 14px", borderRadius:12, background:"#eff6ff" }}>
                    <div style={{ fontSize:10, color:"#1457c0", fontWeight:700, textTransform:"uppercase", letterSpacing:".05em" }}>Hora pico</div>
                    <div style={{ fontSize:20, fontWeight:800, color:"#0a2e6e" }}>16:00 h</div>
                  </div>
                  <div style={{ flex:1, padding:"10px 14px", borderRadius:12, background:"#f0f9ff" }}>
                    <div style={{ fontSize:10, color:"#0ea5e9", fontWeight:700, textTransform:"uppercase", letterSpacing:".05em" }}>Día pico</div>
                    <div style={{ fontSize:20, fontWeight:800, color:"#0a2e6e" }}>Viernes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Especialidades con menos atención */}
            <div className="card">
              <div className="card-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                Especialidades con Menor Atención
              </div>
              <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
                {lowSpecialties.map((s, i) => (
                  <div
                    key={s.name}
                    className="low-spec-card"
                    style={{
                      flex:"1 1 200px",
                      borderColor: ["#ef4444","#f97316","#f59e0b"][i],
                      background: ["#fff5f5","#fff7ed","#fffbeb"][i],
                    }}
                  >
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                      <span style={{
                        width:28, height:28, borderRadius:8,
                        background:["#fee2e2","#ffedd5","#fef3c7"][i],
                        color:["#ef4444","#f97316","#f59e0b"][i],
                        display:"flex", alignItems:"center", justifyContent:"center",
                        fontSize:13, fontWeight:800
                      }}>
                        {i + 1}
                      </span>
                      <span style={{ fontSize:13, fontWeight:700, color:"#1e293b" }}>{s.name}</span>
                    </div>
                    <div style={{ fontSize:28, fontWeight:800, color:["#ef4444","#f97316","#f59e0b"][i] }}>{s.patients}</div>
                    <div style={{ fontSize:11, color:"#94a3b8", marginTop:2 }}>pacientes atendidos</div>
                    <div style={{ marginTop:10 }}>
                      <div style={{ height:6, background:"#f1f5f9", borderRadius:99, overflow:"hidden" }}>
                        <div style={{ height:"100%", width:`${s.pct}%`, background:["#ef4444","#f97316","#f59e0b"][i], borderRadius:99 }}/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize:11, color:"#94a3b8", marginTop:12, lineHeight:1.6 }}>
                ⚠ Estas especialidades presentan la menor demanda en el período seleccionado. Considera revisar disponibilidad horaria, difusión o asignación de recursos.
              </p>
            </div>
          </>
        )}

        {/* ── TAB: DOCTORS ─────────────────────────────────────────── */}
        {activeTab === "doctors" && (
          <div className="reports-grid reports-grid-2">
            <div className="card">
              <div className="card-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                Top Médicos — Mayor Atención Semanal
              </div>
              {TOP_DOCTORS_DATA.map((d, i) => (
                <div className="doctor-row" key={d.name}>
                  <div
                    className="rank-badge"
                    style={{
                      background: i === 0 ? "#fef3c7" : i === 1 ? "#f1f5f9" : "#fdf2f8",
                      color:      i === 0 ? "#d97706" : i === 1 ? "#64748b" : "#db2777",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="doctor-avatar" style={{ background: d.color + "18", color: d.color }}>
                    {d.avatar}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div className="doctor-name">{d.name}</div>
                    <div className="doctor-spec">{d.specialty}</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div className="doctor-count">{d.patients}</div>
                    <div
                      className="doctor-trend"
                      style={{ color: d.trend > 0 ? "#10b981" : "#ef4444" }}
                    >
                      {d.trend > 0 ? `↑ +${d.trend}` : `↓ ${d.trend}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="card-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                </svg>
                Distribución de Consultas por Médico
              </div>
              {TOP_DOCTORS_DATA.map(d => (
                <div key={d.name} className="spec-row">
                  <div className="spec-header">
                    <span className="spec-name">{d.name.replace("Dr. ","").replace("Dra. ","")}</span>
                    <span className="spec-count">{d.patients}</span>
                  </div>
                  <div className="spec-track">
                    <div
                      className="spec-fill"
                      style={{
                        width:`${(d.patients / TOP_DOCTORS_DATA[0].patients) * 100}%`,
                        background: d.color
                      }}
                    />
                  </div>
                </div>
              ))}
              <div style={{ marginTop:16, padding:"12px 16px", borderRadius:14, background:"#f8fafc", border:"1px solid #e2e8f0" }}>
                <div style={{ fontSize:11, color:"#94a3b8", fontWeight:600, textTransform:"uppercase", letterSpacing:".05em", marginBottom:4 }}>Médico más destacado</div>
                <div style={{ fontSize:15, fontWeight:800, color:"#0a2e6e" }}>Dr. Carlos Mendoza</div>
                <div style={{ fontSize:12, color:"#64748b" }}>124 pacientes · Cardiología · ↑ 12% esta semana</div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB: SPECIALTIES ─────────────────────────────────────── */}
        {activeTab === "specialties" && (
          <div className="reports-grid reports-grid-2">
            <div className="card">
              <div className="card-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                Todas las Especialidades por Atención
              </div>
              {SPECIALTY_DATA.map(s => (
                <div key={s.name} className="spec-row">
                  <div className="spec-header">
                    <span className="spec-name">{s.name}</span>
                    <span className="spec-count">{s.patients}</span>
                  </div>
                  <div className="spec-track">
                    <div className="spec-fill" style={{ width:`${s.pct}%`, background:s.color }}/>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {/* Menos atención */}
              <div className="card">
                <div className="card-title">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  Las 3 con Menor Atención
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  {lowSpecialties.map((s, i) => (
                    <div key={s.name} style={{
                      display:"flex", alignItems:"center", gap:12,
                      padding:"10px 14px", borderRadius:14,
                      background:["#fff5f5","#fff7ed","#fffbeb"][i],
                      border:`1px solid ${["#fecaca","#fed7aa","#fde68a"][i]}`
                    }}>
                      <span style={{
                        width:30, height:30, borderRadius:10, flexShrink:0,
                        background:["#fee2e2","#ffedd5","#fef3c7"][i],
                        color:["#ef4444","#f97316","#f59e0b"][i],
                        display:"flex", alignItems:"center", justifyContent:"center",
                        fontSize:14, fontWeight:800
                      }}>{i+1}</span>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:13, fontWeight:700, color:"#1e293b" }}>{s.name}</div>
                        <div style={{ fontSize:11, color:"#94a3b8" }}>{s.patients} pacientes</div>
                      </div>
                      <span style={{
                        fontSize:12, fontWeight:700,
                        color:["#ef4444","#f97316","#f59e0b"][i],
                        background:["#fee2e2","#ffedd5","#fef3c7"][i],
                        padding:"3px 10px", borderRadius:8
                      }}>
                        {s.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donut mini */}
              <div className="card">
                <div className="card-title">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
                  </svg>
                  Top 5 por Participación
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                  {SPECIALTY_DATA.slice(0,5).map((s,i) => (
                    <div key={s.name} style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <div style={{ width:10, height:10, borderRadius:3, background:s.color, flexShrink:0 }}/>
                      <div style={{ flex:1, fontSize:12, color:"#475569", fontWeight:500 }}>{s.name}</div>
                      <div style={{ fontSize:12, fontWeight:700, color:"#0a2e6e" }}>
                        {Math.round((s.patients / SPECIALTY_DATA.reduce((a,b)=>a+b.patients,0))*100)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB: SURGERIES ───────────────────────────────────────── */}
        {activeTab === "surgeries" && (
          <>
            {/* KPIs cirugía */}
            <div className="reports-grid reports-grid-4">
              <div className="surgery-stat" style={{ background:"#eff6ff", border:"1px solid #bfdbfe" }}>
                <div className="surgery-stat-val" style={{ color:"#1457c0" }}>{SURGERY_DATA.total}</div>
                <div className="surgery-stat-lbl" style={{ color:"#3b82f6" }}>Total cirugías</div>
              </div>
              <div className="surgery-stat" style={{ background:"#f0fdf4", border:"1px solid #bbf7d0" }}>
                <div className="surgery-stat-val" style={{ color:"#059669" }}>{SURGERY_DATA.completed}</div>
                <div className="surgery-stat-lbl" style={{ color:"#10b981" }}>Completadas</div>
              </div>
              <div className="surgery-stat" style={{ background:"#fefce8", border:"1px solid #fde68a" }}>
                <div className="surgery-stat-val" style={{ color:"#d97706" }}>{SURGERY_DATA.scheduled}</div>
                <div className="surgery-stat-lbl" style={{ color:"#f59e0b" }}>Programadas</div>
              </div>
              <div className="surgery-stat" style={{ background:"#fff5f5", border:"1px solid #fecaca" }}>
                <div className="surgery-stat-val" style={{ color:"#ef4444" }}>{SURGERY_DATA.complications}</div>
                <div className="surgery-stat-lbl" style={{ color:"#ef4444" }}>Complicaciones</div>
              </div>
            </div>

            <div className="reports-grid reports-grid-2">
              {/* Tendencia mensual */}
              <div className="card">
                <div className="card-title">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                  </svg>
                  Tendencia Mensual de Cirugías
                </div>
                <div style={{ display:"flex", alignItems:"flex-end", gap:6, height:110 }}>
                  {SURGERY_DATA.monthlyTrend.map((v, i) => {
                    const pct = (v / maxSurgery) * 100
                    const isLast = i === SURGERY_DATA.monthlyTrend.length - 1
                    return (
                      <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                        <div style={{
                          width:"100%",
                          height:`${pct}%`,
                          minHeight:4,
                          borderRadius:"6px 6px 0 0",
                          background: isLast ? "#1457c0" : "#bfdbfe",
                          position:"relative",
                        }}/>
                        <div style={{ fontSize:9, color:"#94a3b8", fontWeight:500 }}>{MONTHS[i]}</div>
                      </div>
                    )
                  })}
                </div>
                <div style={{ display:"flex", gap:12, marginTop:16 }}>
                  <div style={{ flex:1, padding:"10px 14px", borderRadius:12, background:"#f8fafc", border:"1px solid #e2e8f0" }}>
                    <div style={{ fontSize:10, color:"#94a3b8", fontWeight:700, textTransform:"uppercase" }}>Duración promedio</div>
                    <div style={{ fontSize:18, fontWeight:800, color:"#0a2e6e" }}>{SURGERY_DATA.avgDuration}</div>
                  </div>
                  <div style={{ flex:1, padding:"10px 14px", borderRadius:12, background:"#f0fdf4", border:"1px solid #bbf7d0" }}>
                    <div style={{ fontSize:10, color:"#10b981", fontWeight:700, textTransform:"uppercase" }}>Tasa de éxito</div>
                    <div style={{ fontSize:18, fontWeight:800, color:"#059669" }}>{SURGERY_DATA.successRate}%</div>
                  </div>
                </div>
              </div>

              {/* Por tipo */}
              <div className="card">
                <div className="card-title">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                    <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
                    <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                    <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
                    <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
                    <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
                    <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
                    <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/>
                    <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
                  </svg>
                  Cirugías por Tipo
                </div>
                {SURGERY_DATA.byType.map(t => (
                  <div key={t.name} className="spec-row">
                    <div className="spec-header">
                      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <div style={{ width:8, height:8, borderRadius:3, background:t.color, flexShrink:0 }}/>
                        <span className="spec-name">{t.name}</span>
                      </div>
                      <span className="spec-count">{t.count}</span>
                    </div>
                    <div className="spec-track">
                      <div className="spec-fill" style={{ width:`${t.pct}%`, background:t.color }}/>
                    </div>
                  </div>
                ))}

                {/* Estado actual */}
                <div style={{ marginTop:16, display:"flex", gap:10 }}>
                  <div style={{ flex:1, padding:"10px 12px", borderRadius:12, background:"#fefce8", border:"1px solid #fde68a", textAlign:"center" }}>
                    <div style={{ fontSize:11, color:"#d97706", fontWeight:700, textTransform:"uppercase" }}>En curso hoy</div>
                    <div style={{ fontSize:22, fontWeight:800, color:"#92400e" }}>{SURGERY_DATA.inProgress}</div>
                  </div>
                  <div style={{ flex:1, padding:"10px 12px", borderRadius:12, background:"#fff5f5", border:"1px solid #fecaca", textAlign:"center" }}>
                    <div style={{ fontSize:11, color:"#ef4444", fontWeight:700, textTransform:"uppercase" }}>Complicaciones</div>
                    <div style={{ fontSize:22, fontWeight:800, color:"#991b1b" }}>{SURGERY_DATA.complications}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </>
  )
}