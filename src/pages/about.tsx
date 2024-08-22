import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <>

      <Seo
        title="About Us"
        description="From our high-quality, professional staff to our effective cleaning techniques, you’ll get the satisfaction of gleaming, sparkling results  from a locally owned and operated company."
      />

      <Header />

      <main className="page-styles">

        <h3 className="page-title">
          <a href="tel:5305811987">
            Call Today For A Free Estimate! (530) 581-1987
          </a>
        </h3>

        <article className="triad">
          <section className="one-two">
            <h2>About Us</h2>
            <p>
              When was the last time you asked a Tahoe City, CA, cleaning service to wash away the dirt from your windows?
              Jarrod Semmens Window Cleaning can supply you with a thorough washing of your windows inside and out.
              From our high-quality, professional staff to our effective cleaning techniques, you’ll get the satisfaction of gleaming, sparkling results  from a locally owned and operated company.
            </p>
          </section>
          <hr className="one-three" />
        </article>

        <article className="triad">
          <section className="one-two">
            <h3>Add Us to Your Schedule</h3>
            <p>Cleaning windows is a tough task, and that’s why we only hire knowledgeable, skilled employees to take over the job for you. We work with both residential and commercial customers to keep natural light flowing through homes and offices across the city.
              Imagine the freedom of handing over one of the toughest cleaning projects on your list to a qualified Tahoe City, CA, cleaning service instead of attempting to get it done on your own. Call Jarrod Semmens Window Cleaning to request your estimate today.</p>
          </section>
        </article>

      </main>
      <Footer />
    </>
  )
}

export default AboutPage
