import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Header from '../components/header'
import Footer from '../components/footer'
import Seo from "../components/seo";

import CleanerSVG from '../images/cleaner'
import SqueegeeSVG from '../images/squeegee'

export function Cozy() {
  return <StaticImage src="https://jarrodsemmenswindowcleaning.s3.us-west-1.amazonaws.com/stock-previews/AdobeStock_233578526_Preview.jpeg" alt="a woman sitting in a blanket on a cozy afternoon in tahoe with clean windows" className="cozy" />
}


const IndexPage = () => {
  return (
    <>
      {/* // TODO: move these to the footer */}
      <Seo
        title="Jarrod Semmens Window Cleaning"
      />
      <Header />

      <main className="page-styles">
        <h2 className="page-title"><a href="tel:5305811987">Call Today For A Free Estimate! (530) 581-1987</a></h2>

        <div id="hero__wrapper" className="hero__wrapper">
          <div className="hero__wrapper--start">{/* stay gold */}</div>
          <article className="hero">
            <div className="hero__background">{/* stay gold*/}</div>
            <div id="card-content" className="card-content">
              <div id="card-text">
                <h2>Providing Year Round Service</h2>
                <p>
                  We&apos;re your local number one source in Window Cleaning in Tahoe City and surrounding areas.
                  Besides window cleaning, we offer gutter cleaning, screen repair and winter snow shoveling.
                  We are locally owned and operated company and our passion is about helping others achieve their window cleaning needs.
                  We have been in business since 1987 and proud of our continuous growth.
                  Our philosophy is simple: We believe that by providing and excellent service for an affordable price we will have you as a customer for life…
                  Call today for a FREE estimate!
                </p>
              </div>
            </div>
            <SqueegeeSVG />
            <div className='squeegee__line'>{/* stay gold */}</div>
          </article>
          <div className="hero__wrapper--end">{/* stay gold */}</div>
        </div>

        <div className="cleaner__wrapper">
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
          </div>

          <CleanerSVG />
        </div>
      </main >
      <Footer />
    </>
  )
}

export default IndexPage
