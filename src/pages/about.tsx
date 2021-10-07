import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <title>About Us</title>
        <h2 className="heading-styles">About Us</h2>
        <p className="paragraph-styles">
          When was the last time you asked a Tahoe City, CA, cleaning service to wash away the dirt from your windows?
          Jarrod Semmens Window Cleaning can supply you with a thorough washing of your windows inside and out.
          From our high-quality, professional staff to our effective cleaning techniques, you’ll get the satisfaction of gleaming, sparkling results  from a locally owned and operated company.
        </p>
        <h3 className="heading-styles">Add Us to Your Schedule</h3>
        <p className="paragraph-styles">Cleaning windows is a tough task, and that’s why we only hire knowledgeable, skilled employees to take over the job for you. We work with both residential and commercial customers to keep natural light flowing through homes and offices across the city.
          Imagine the freedom of handing over one of the toughest cleaning projects on your list to a qualified Tahoe City, CA, cleaning service instead of attempting to get it done on your own. Call Jarrod Semmens Window Cleaning to request your estimate today.</p>
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
