import type { Role } from "@/types/roles.types"

export interface MenuItem {
  label: string
  path: string
  icon: string
  roles: Role[]
}

export const menuItems: MenuItem[] = [
  {
    label: "Atenciones",
    path: "/dashboard/appointments",
    icon: "calendar",
    roles: ["ROOT", "ADMIN", "DOCTOR"],
  },
  {
    label: "Pacientes",
    path: "/dashboard/patients",
    icon: "users",
    roles: ["ROOT", "ADMIN", "DOCTOR"],
  },
]