"use client"

import { usePathname } from "next/navigation"
import PublicNavbar from "./PublicNavbar"

export default function ConditionalNavbar() {
  const pathname = usePathname()
  const hideOn = ["/login", "/dashboard"]
  const shouldHide = hideOn.some((path) => pathname.startsWith(path))
  if (shouldHide) return null
  return <PublicNavbar />
}