import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">© 2025 Harsh Panchal. Crafted with passion and code.</p>
          <p className="footer-tagline">Available for freelance work and full-time opportunities.</p>
        </div>

        <div className="footer-links">
          <a href="https://github.com/harsh-panchal" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:harsh1232@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
