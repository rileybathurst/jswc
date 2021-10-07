import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="page-styles">
      <h1 className="heading-styles">Jarrod Semmens Window Cleaning</h1>
      <p><a href="tel:5305811987">Call Today For A Free Estimate! (530) 581-1987</a></p>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/washing">Window Washing</Link></li>
          <li><Link to="/screens">Broken Screen Replacement</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
