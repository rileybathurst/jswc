import * as React from "react"

import Header from '../components/header'
import Footer from '../components/footer'

import "../styles/app.scss";
import Seo from "../components/seo";

// this goes in the seo file as thats the helmet
// it's not working yet
<link rel="stylesheet" href="https://use.typekit.net/vpi7tts.css" />

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <main className="page-styles">

        <Seo
          title="Jarrod Semmens Window Cleaning"
        />

        <article className="triad">
          <h2><a href="tel:5305811987">
            Call Today<br />
            For A<br />
            Free Estimate!<br />
            (530) 581-1987</a>
          </h2>

          <section className="two-three">
            <h2 className="heading-styles">Providing Year Round Service</h2>
            <p className="paragraph-styles">
              We’re your local number one source in Window Cleaning in Tahoe City and surrounding areas.
              Besides window cleaning, we offer gutter cleaning, screen repair and winter snow shoveling.
              We are locally owned and operated company and our passion is about helping others achieve their window cleaning needs.
              We have been in business since 1987 and proud of our continuous growth.
              Our philosophy is simple: We believe that by providing and excellent service for an affordable price we will have you as a customer for life…
              Call today for a FREE estimate!
            </p>
          </section>

          <hr className="one-three" />
        </article>

        <article className="triad">
          <section className="one-two">
            <h2 className="heading-styles">Quality Service &amp; Affordable Prices</h2>
            <p className="paragraph-styles">Jarrod Semmens Window Cleaning’s mission has always been to provide our customers with quality services as well as fair, competitive prices in a timely &amp; courteous manner.
              This is the reason for our success today.
              We guarantee our work and we never leave our customer unsatisfied.
              We carry full liability insurance and our employees are bonded.
              All of Jarrod Semmens Window Cleaning employees are well-trained, experienced professionals.
              We do offer Free Phone and On-Site Estimates and Weekend-Service.
              No job is too small or too big for Jarrod Semmens Window Cleaning.</p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
