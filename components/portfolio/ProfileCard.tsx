"use client"

export default function ProfileCard() {
  return (
    <div className="portfolio-profile-card">
      <div className="portfolio-profile-image-container">
        <img
          src="/professional-profile-photo-harsh-panchal.jpg"
          alt="Harsh Panchal - Professional Profile"
          className="portfolio-profile-image"
        />
        <div className="portfolio-profile-badge">Developer</div>
      </div>

      <div className="portfolio-profile-info">
        <h2>Harsh Panchal</h2>
        <p className="portfolio-profile-role">Full Stack Developer</p>
        <p className="portfolio-profile-location">📍 New Delhi NCR</p>
      </div>

      <div className="portfolio-social-links">
        <a href="https://linkedin.com/in/yourusername" className="portfolio-social-btn" title="LinkedIn">
          in
        </a>
        <a href="https://github.com/harsh-panchal" className="portfolio-social-btn" title="GitHub">
          ⚙️
        </a>
        <a href="mailto:harsh1232@gmail.com" className="portfolio-social-btn" title="Email">
          ✉️
        </a>
      </div>
    </div>
  )
}
