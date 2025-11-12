"use client"

import ProfileCard from "./ProfileCard"
import ContactInfo from "./ContactInfo"

export default function Hero() {
  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero-container">
        <div className="portfolio-hero-left">
          <ProfileCard />
        </div>

        <div className="portfolio-hero-right">
          <div className="portfolio-intro-section">
            <h1 className="portfolio-name-title">Harsh Panchal</h1>
            <p className="portfolio-title-subtitle">Full Stack Developer</p>
            <p className="portfolio-title-subtitle">AI & DevOps Enthusiast</p>

            <div className="portfolio-intro-text">
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
