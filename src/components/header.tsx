import { Link } from "gatsby"
import * as React from "react"

import Nav from "./nav"

const Header = () => {
  return (
    <header className="page-styles">
      <h1 className="heading-styles"><Link to="/">Jarrod Semmens<br />Window Cleaning</Link></h1>
      {/* <button>MENU</button> */}

      <hr />

      <Nav />

      <hr />
    </header>
  )
}

export default Header
