"use client"

import { useState, useEffect } from "react"
import Header from "@/components/portfolio/Header"
import Hero from "@/components/portfolio/Hero"
import Timeline from "@/components/portfolio/Timeline"
import Technologies from "@/components/portfolio/Technologies"
import Footer from "@/components/portfolio/Footer"
import "@/styles/portfolio.css"

export default function Home() {
  const [theme, setTheme] = useState("default")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || "default"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
  }, [])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  if (!mounted) return null

  return (
    <div className="portfolio-app" data-theme={theme}>
      <Header onThemeChange={handleThemeChange} currentTheme={theme} />
      <main className="portfolio-main">
        <Hero />
        <Timeline />
        <Technologies />
      </main>
      <Footer />
    </div>
  )
}
