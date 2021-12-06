import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>i'm eduardo</h1>
          <h4>freelance web frontend and backend</h4>
          <Link to="/contact" className="btn">
            contact me
          </Link>
          <div className="social-links">
            {socialLinks.map(link => {
              return (
                <a href={link.url} key={link.id} className="social-link">
                  {link.icon}
                </a>
              )
            })}
          </div>
        </article>
        {/* controlling the height with StaticImage SVG can be done 
        changing the number of columns in grid-column (.hero-img)*/}
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
        {/* controlling the height with react img can be done with height in the class with width=100% to fit the parent */}
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
        {/* See https://undraw.co for cool SVG images */}
      </section>
    </header>
  )
}

export default Hero
