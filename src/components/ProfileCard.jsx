import "./ProfileCard.css"

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img src="/professional-profile-photo-harsh-panchal.jpg" alt="Harsh Panchal - Professional Profile" className="profile-image" />
        <div className="profile-badge">Developer</div>
      </div>

      <div className="profile-info">
        <h2>Harsh Panchal</h2>
        <p className="profile-role">Full Stack Developer</p>
        <p className="profile-location">📍 New Delhi NCR</p>
      </div>

      <div className="social-links">
        <a href="https://linkedin.com/in/yourusername" className="social-btn" title="LinkedIn">
          in
        </a>
        <a href="https://github.com/harsh-panchal" className="social-btn" title="GitHub">
          ⚙️
        </a>
        <a href="mailto:harsh1232@gmail.com" className="social-btn" title="Email">
          ✉️
        </a>
      </div>
    </div>
  )
}
