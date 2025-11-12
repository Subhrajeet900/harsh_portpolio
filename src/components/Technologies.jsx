import "./Technologies.css"

export default function Technologies() {
  const tech = {
    languages: ["C++", "Python", "Java", "SQL", "JavaScript"],
    frontend: ["React", "React.js (Vite)", "Tailwind CSS", "CSS3", "HTML5"],
    backend: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "FastAPI"],
    tools: ["Docker", "Git/GitHub", "Postman", "DevOps", "JWT"],
  }

  return (
    <section className="technologies-section">
      <div className="tech-container">
        <h2 className="tech-title">Technologies & Skills</h2>

        <div className="tech-grid">
          {Object.entries(tech).map(([category, items]) => (
            <div key={category} className="tech-category">
              <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="tech-tags">
                {items.map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
