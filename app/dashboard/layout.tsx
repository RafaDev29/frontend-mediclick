"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/shared/Sidebar"
import { useAuthStore } from "@/store/auth.store"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { accessToken, loadFromStorage } = useAuthStore()
  const router = useRouter()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    loadFromStorage()
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    if (!accessToken && !localStorage.getItem("accessToken")) {
      router.push("/login")
    }
  }, [ready, accessToken])

  if (!ready) return null

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  )
}