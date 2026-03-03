"use client"

import { useState } from "react"
import type { ReactElement } from "react"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { menuItems } from "@/lib/menu"
import { useAuthStore } from "@/store/auth.store"

const icons: Record<string, ReactElement> = {

  dashboard: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  calendar: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  users: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
}

const roleColors: Record<string, string> = {
  ROOT: "bg-purple-100 text-purple-700",
  ADMIN: "bg-blue-100 text-blue-700",
  DOCTOR: "bg-emerald-100 text-emerald-700",
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuthStore()

  const filtered = menuItems.filter(
    (item) => user?.role && item.roles.includes(user.role)
  )

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <aside
      className={`
        flex flex-col h-screen bg-white border-r border-slate-100 transition-all duration-300 ease-in-out
        ${collapsed ? "w-[72px]" : "w-[240px]"}
      `}
    >
      {/* Logo */}
      <div className={`flex items-center h-16 px-4 border-b border-slate-100 ${collapsed ? "justify-center" : "justify-between"}`}>
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1457c0] flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold text-[#0a2e6e] text-base tracking-tight">MediClick</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all"
        >
          {collapsed ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          )}
        </button>
      </div>

      {/* User info */}
      {!collapsed && user && (
        <div className="px-4 py-3 border-b border-slate-100">
          <p className="text-xs font-medium text-slate-800 truncate">{user.email}</p>
          <span className={`inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${roleColors[user.role] || "bg-slate-100 text-slate-600"}`}>
            {user.role}
          </span>
        </div>
      )}

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {filtered.map((item) => {
          const isActive = pathname === item.path || pathname.startsWith(item.path + "/")
          return (
            <Link
              key={item.path}
              href={item.path}
              title={collapsed ? item.label : undefined}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                ${collapsed ? "justify-center" : ""}
                ${isActive
                  ? "bg-[#1457c0] text-white shadow-md shadow-[#1457c0]/20"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                }
              `}
            >
              <span className="shrink-0">{icons[item.icon]}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>


      <div className="px-3 py-4 border-t border-slate-100">
        <button
          onClick={handleLogout}
          title={collapsed ? "Logout" : undefined}
          className={`
            w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
            text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all
            ${collapsed ? "justify-center" : ""}
          `}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          {!collapsed && <span>Cerrar sesión</span>}
        </button>
      </div>
    </aside>
  )
}