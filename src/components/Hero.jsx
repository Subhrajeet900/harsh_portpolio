import "./Hero.css"
import ProfileCard from "./ProfileCard"
import ContactInfo from "./ContactInfo"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <ProfileCard />
        </div>

        <div className="hero-right">
          <div className="intro-section">
            <h1 className="name-title">Harsh Panchal</h1>
            <p className="title-subtitle">Full Stack Developer</p>
            <p className="title-subtitle">AI & DevOps Enthusiast</p>

            <div className="intro-text">
              <p>
                I'm a passionate full-stack developer from New Delhi, specializing in building scalable web applications
                and AI solutions. Currently pursuing B.Tech in Computer Science at K.R. Mangalam University.
              </p>
              <p>
                With expertise in React, Node.js, and modern web technologies, I create seamless digital experiences
                that combine thoughtful design with robust engineering.
              </p>
            </div>
          </div>

          <ContactInfo />
        </div>
      </div>
    </section>
  )
}
