"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

interface ModeToggleProps {
  isScrolled?: boolean
}

export function ModeToggle({ isScrolled = false }: ModeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("system")
    } else if (theme === "system") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    if (theme === "dark") {
      return <Moon className="size-4 xl:size-5 relative z-10 transition-transform duration-300" />
    } else if (theme === "system") {
      return <Monitor className="size-4 xl:size-5 relative z-10 transition-transform duration-300" />
    } else {
      return <Sun className="size-4 xl:size-5 relative z-10 transition-transform duration-300" />
    }
  }

  if (!mounted) {
    return (
      <button
        className={[
          "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-transparent bg-transparent px-2 xl:px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
          isScrolled
            ? "text-foreground/70"
            : "text-white/90",
        ].join(" ")}
        aria-label="Toggle theme"
      >
        <Monitor className="size-4 xl:size-5" />
      </button>
    )
  }

  return (
    <button
      onClick={cycleTheme}
      className={[
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-transparent bg-transparent px-2 xl:px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
        isScrolled
          ? "text-foreground/70 hover:text-foreground"
          : "text-white/90 hover:text-white",
      ].join(" ")}
      aria-label="Toggle theme"
      title={`Current: ${theme === "system" ? "System" : theme === "dark" ? "Dark" : "Light"} mode. Click to cycle.`}
    >
      <span className="absolute inset-0 rounded-full bg-yellow-500/0 transition group-hover:bg-yellow-500/10" />
      {getIcon()}
    </button>
  )
}
