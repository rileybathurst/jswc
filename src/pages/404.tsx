import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <main>
      <Seo
          title="Not Found"
        />
        <h2>Page not found</h2>
        <p className="paragraph-styles">
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
      <Footer />
    </>
  )
}

export default NotFoundPage
