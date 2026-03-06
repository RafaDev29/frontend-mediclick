import type { Role } from "@/types/roles.types"

export interface MenuItem {
  label: string
  path: string
  icon: string
  roles: Role[]
}

export const menuItems: MenuItem[] = [
  {
    label: "Gestión de Pacientes",
    path: "/dashboard/patients",
    icon: "users",
    roles: ["ROOT", "ADMIN", "DOCTOR"],
  },
  {
    label: "Agenda y Citas Médicas",
    path: "/dashboard/appointments",
    icon: "calendar",
    roles: ["ROOT", "ADMIN", "DOCTOR"],
  },
  {
    label: "Triaje / Enfermería",
    path: "/dashboard/triage",
    icon: "activity",
    roles: ["ROOT", "ADMIN", "DOCTOR"],
  },
  {
    label: "Consulta Médica",
    path: "/dashboard/consultations",
    icon: "stethoscope",
    roles: ["ROOT", "ADMIN", "DOCTOR"],
  },
  {
    label: "Exámenes Médicos",
    path: "/dashboard/exams",
    icon: "clipboard-list",
    roles: ["ROOT", "ADMIN", "DOCTOR"],
  },
  {
    label: "Farmacia",
    path: "/dashboard/pharmacy",
    icon: "pill",
    roles: ["ROOT", "ADMIN"],
  },
  {
    label: "Hospitalización",
    path: "/dashboard/hospitalization",
    icon: "bed-double",
    roles: ["ROOT", "ADMIN", "DOCTOR"],
  },
  {
    label: "Facturación",
    path: "/dashboard/billing",
    icon: "receipt",
    roles: ["ROOT", "ADMIN"],
  },
  {
    label: "Reportes",
    path: "/dashboard/reports",
    icon: "bar-chart-3",
    roles: ["ROOT", "ADMIN"],
  },
]