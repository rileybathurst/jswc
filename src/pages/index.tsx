import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'

import "../styles/app.scss";
import Seo from "../components/seo";

import CleanerSVG from '../images/cleaner'

export function Cozy() {
  return <StaticImage src="https://jarrodsemmenswindowcleaning.s3.us-west-1.amazonaws.com/stock-previews/AdobeStock_233578526_Preview.jpeg" alt="cozy afternboon in tahoe with clean windows" className="cozy" />
}


const IndexPage = () => {
  return (
    <>
      <Seo
        title="Jarrod Semmens Window Cleaning"
      />
      <Header />

      <main className="page-styles">
        <h2 className="page-title"><a href="tel:5305811987">Call Today For A Free Estimate! (530) 581-1987</a></h2>

        <div className="hero__wrapper">
          <Hero />
        </div>

        <div className="sidekick">
          <Cozy />
          <blockquote>
            <h3>A wonderful window cleaning service! Efficient, professional and reasonable. We’ve used them for years.</h3>
            <q cite="https://www.yelp.com/biz/semmens-jarrod-window-cleaning-tahoe-city">Jeff P - Yelp</q>
          </blockquote>

          <article className="triad">
            <section className="one-two">
              <h2>Quality Service &amp; Affordable Prices</h2>
              <p>Jarrod Semmens Window Cleaning’s mission has always been to provide our customers with quality services as well as fair, competitive prices in a timely &amp; courteous manner.
                This is the reason for our success today.
                We guarantee our work and we never leave our customer unsatisfied.
                We carry full liability insurance and our employees are bonded.
                All of Jarrod Semmens Window Cleaning employees are well-trained, experienced professionals.
                We do offer Free Phone and On-Site Estimates and Weekend-Service.
                No job is too small or too big for Jarrod Semmens Window Cleaning.</p>
            </section>
          </article>

          <CleanerSVG />
        </div>
      </main >
      <Footer />
    </>
  )
}

export default IndexPage
