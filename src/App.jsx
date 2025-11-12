"use client"

import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Timeline from "./components/Timeline"
import Technologies from "./components/Technologies"
import Footer from "./components/Footer"

function App() {
  const [theme, setTheme] = useState("default")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "default"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
  }, [])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <Header onThemeChange={handleThemeChange} currentTheme={theme} />
      <main className="main-content">
        <Hero />
        <Timeline />
        <Technologies />
      </main>
      <Footer />
    </div>
  )
}

export default App
