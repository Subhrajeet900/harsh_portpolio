"use client"

interface HeaderProps {
  onThemeChange: (theme: string) => void
  currentTheme: string
}

export default function Header({ onThemeChange, currentTheme }: HeaderProps) {
  return (
    <header className="portfolio-header">
      <div className="portfolio-header-container">
        <div className="portfolio-logo-section">
          <h1 className="portfolio-title">Portfolio</h1>
        </div>

        <nav className="portfolio-theme-switcher">
          <button
            className={`portfolio-theme-btn ${currentTheme === "default" ? "active" : ""}`}
            onClick={() => onThemeChange("default")}
            aria-label="Default theme"
          >
            <span className="portfolio-theme-icon">⚪</span>
            Default
          </button>
          <button
            className={`portfolio-theme-btn ${currentTheme === "light" ? "active" : ""}`}
            onClick={() => onThemeChange("light")}
            aria-label="Light theme"
          >
            <span className="portfolio-theme-icon">☀️</span>
            Light
          </button>
          <button
            className={`portfolio-theme-btn ${currentTheme === "dark" ? "active" : ""}`}
            onClick={() => onThemeChange("dark")}
            aria-label="Dark theme"
          >
            <span className="portfolio-theme-icon">🌙</span>
            Dark
          </button>
        </nav>
      </div>
    </header>
  )
}
