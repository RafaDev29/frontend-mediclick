import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface Props {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: Props) {
  return (
    <nav className="flex items-center gap-2.5 mb-6">
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <div key={i} className="flex items-center gap-2.5">
            {i > 0 && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-300">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            )}
            {isLast || !item.href ? (
              <span className={`text-xl font-semibold ${isLast ? "text-[#0a2e6e]" : "text-slate-400"}`}>
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-xl font-medium text-slate-400 hover:text-[#1457c0] transition-colors">
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}