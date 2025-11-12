import "./TimelineItem.css"

export default function TimelineItem({ type, title, organization, date, details, icon, isLeft }) {
  const typeColors = {
    education: "#6366f1",
    certification: "#8b5cf6",
    project: "#ec4899",
  }

  return (
    <div className={`timeline-item ${isLeft ? "left" : "right"}`}>
      <div className="timeline-marker" style={{ backgroundColor: typeColors[type] }}>
        <span className="marker-icon">{icon}</span>
      </div>

      <div className="timeline-content">
        <div className="timeline-card">
          <div className="card-badge" style={{ backgroundColor: typeColors[type] }}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>

          <h3 className="card-title">{title}</h3>
          <p className="card-organization">{organization}</p>
          <p className="card-date">{date}</p>

          <ul className="card-details">
            {details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
