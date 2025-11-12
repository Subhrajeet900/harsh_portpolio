"use client"

import TimelineItem from "./TimelineItem"

export default function Timeline() {
  const timelineData = [
    {
      type: "education",
      title: "B.Tech in Computer Science Engineering",
      organization: "K.R. Mangalam University",
      date: "Sept 2024 - May 2028",
      details: ["CGPA: 7.54/10.0", "Coursework: Full Stack Development"],
      icon: "🎓",
    },
    {
      type: "certification",
      title: "IBM Full Stack Developer Certification",
      organization: "IBM",
      date: "May 2025 - June 2025",
      details: ["Gained Industry Insight as a Full Stack Developer", "Learnt Skills on AI and DevOps"],
      icon: "🏆",
    },
    {
      type: "project",
      title: "Verdict - The final say on product health",
      organization: "Personal Project",
      date: "July 2025",
      details: [
        "Developed a full-stack AI application that analyzes product data",
        "Generates environmental and health impact assessments",
        "Tech: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Docker",
      ],
      icon: "🚀",
    },
    {
      type: "project",
      title: "TruthLens AI - AI fake news detector",
      organization: "Personal Project",
      date: "June 2025",
      details: [
        "Built a full-stack AI application to detect fake news",
        "Analyzes text content and predicts misinformation likelihood",
        "Tech: React.js (Vite), Tailwind CSS, FastAPI with Pydantic, MongoDB",
      ],
      icon: "🤖",
    },
  ]

  return (
    <section className="portfolio-timeline-section">
      <div className="portfolio-timeline-container">
        <h2 className="portfolio-timeline-title">My Journey</h2>
        <p className="portfolio-timeline-subtitle">Education, Certifications & Projects</p>

        <div className="portfolio-timeline">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
