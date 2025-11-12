"use client"

import "./Header.css"

export default function Header({ onThemeChange, currentTheme }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="portfolio-title">Portfolio</h1>
        </div>

        <nav className="theme-switcher">
          <button
            className={`theme-btn ${currentTheme === "default" ? "active" : ""}`}
            onClick={() => onThemeChange("default")}
            aria-label="Default theme"
          >
            <span className="theme-icon">⚪</span>
            Default
          </button>
          <button
            className={`theme-btn ${currentTheme === "light" ? "active" : ""}`}
            onClick={() => onThemeChange("light")}
            aria-label="Light theme"
          >
            <span className="theme-icon">☀️</span>
            Light
          </button>
          <button
            className={`theme-btn ${currentTheme === "dark" ? "active" : ""}`}
            onClick={() => onThemeChange("dark")}
            aria-label="Dark theme"
          >
            <span className="theme-icon">🌙</span>
            Dark
          </button>
        </nav>
      </div>
    </header>
  )
}
