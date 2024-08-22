import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

const ScreenPage = () => {
  return (
    <>
      <Seo
        title="Broken Screen Replacement"
        description="Are your window screens damaged, missing, dented, or broken? Have  they become so clogged with grime and debris that they’re making your  windows look unsightly."
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

            <h2>Broken Screen Replacement</h2>
            <p>We’re committed to providing our customers with the excellent  service they deserve. When you enlist our help to replace your broken  window screens, you’ll benefit from our impressive work ethic and quick  turnaround. And because we value your business, we go out of our way to  keep our rates as reasonable as possible.</p>
            <p>Are your window screens damaged, missing, dented, or broken? Have  they become so clogged with grime and debris that they’re making your  windows look unsightly. You don’t have to struggle with old, banged-up  window screens any longer. At Jarrod Semmens Window Cleaning, we offer  broken screen replacement services for commercial and residential  customers in Tahoe City, CA.</p>
          </section>
        </article>


        <article className="triad">
          <section className="one-two">
            <h3>At Your Service</h3>
            <p>At Jarrod Semmens Window Cleaning, we’re committed to providing our  customers with the excellent service they deserve. When you enlist our  help to replace your broken window screens, you’ll benefit from our  impressive work ethic and quick turnaround. And because we value your  business, we go out of our way to keep our rates as reasonable as  possible.</p>
            <p>Improve your property with a new set of window screens. For more information or to request an estimate, call us today.</p>
          </section>
        </article>

        <article className="triad">
          <section className="one-two">
            <h3>Screens made at</h3>
            <address>
              5609 Uplands Road<br />
              Carnelian Bay 96140
            </address>
          </section>
        </article>

      </main>
      <Footer />
    </>
  )
}

export default ScreenPage
