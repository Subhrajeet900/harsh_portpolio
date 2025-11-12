"use client"

interface TimelineItemProps {
  type: "education" | "certification" | "project"
  title: string
  organization: string
  date: string
  details: string[]
  icon: string
  isLeft: boolean
}

export default function TimelineItem({ type, title, organization, date, details, icon, isLeft }: TimelineItemProps) {
  const typeColors: { [key: string]: string } = {
    education: "#6366f1",
    certification: "#8b5cf6",
    project: "#ec4899",
  }

  return (
    <div className={`portfolio-timeline-item ${isLeft ? "left" : "right"}`}>
      <div className="portfolio-timeline-marker" style={{ backgroundColor: typeColors[type] }}>
        <span className="portfolio-marker-icon">{icon}</span>
      </div>

      <div className="portfolio-timeline-content">
        <div className="portfolio-timeline-card">
          <div className="portfolio-card-badge" style={{ backgroundColor: typeColors[type] }}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>

          <h3 className="portfolio-card-title">{title}</h3>
          <p className="portfolio-card-organization">{organization}</p>
          <p className="portfolio-card-date">{date}</p>

          <ul className="portfolio-card-details">
            {details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
