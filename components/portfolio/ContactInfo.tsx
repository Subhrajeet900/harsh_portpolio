"use client"

export default function ContactInfo() {
  const contactItems = [
    { label: "Email", value: "harsh1232@gmail.com", href: "mailto:harsh1232@gmail.com" },
    { label: "Phone", value: "+91 8368034357", href: "tel:+918368034357" },
    { label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com/in/yourusername" },
    { label: "GitHub", value: "github.com/harsh-panchal", href: "https://github.com/harsh-panchal" },
  ]

  return (
    <div className="portfolio-contact-info">
      <h3 className="portfolio-contact-title">Get in Touch</h3>
      <div className="portfolio-contact-list">
        {contactItems.map((item) => (
          <div key={item.label} className="portfolio-contact-item">
            <span className="portfolio-contact-label">{item.label}</span>
            <a href={item.href} className="portfolio-contact-value" target="_blank" rel="noopener noreferrer">
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
