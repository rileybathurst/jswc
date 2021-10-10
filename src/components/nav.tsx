import * as React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/washing">Window Washing</Link></li>
        <li><Link to="/screens">Broken Screen Replacement</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
