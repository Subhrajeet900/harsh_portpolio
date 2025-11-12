import "./ContactInfo.css"

export default function ContactInfo() {
  const contactItems = [
    { label: "Email", value: "harsh1232@gmail.com", href: "mailto:harsh1232@gmail.com" },
    { label: "Phone", value: "+91 8368034357", href: "tel:+918368034357" },
    { label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com/in/yourusername" },
    { label: "GitHub", value: "github.com/harsh-panchal", href: "https://github.com/harsh-panchal" },
  ]

  return (
    <div className="contact-info">
      <h3 className="contact-title">Get in Touch</h3>
      <div className="contact-list">
        {contactItems.map((item) => (
          <div key={item.label} className="contact-item">
            <span className="contact-label">{item.label}</span>
            <a href={item.href} className="contact-value" target="_blank" rel="noopener noreferrer">
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
