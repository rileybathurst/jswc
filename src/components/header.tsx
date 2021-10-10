import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Nav from "./nav"

const Header = () => {
  return (
    <>
      {/* keep links out of the seo */}
      {/* typescript needs @types/react-helmet */}
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/vpi7tts.css" />
      </Helmet>


      <header>
        <h1><Link to="/">Jarrod Semmens<br />Window Cleaning</Link></h1>
        {/* <button>MENU</button> */}

        <hr />

        <Nav />

        <hr />
      </header>
    </>
  )
}

export default Header
