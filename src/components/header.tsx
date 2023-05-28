import React, { useState, useEffect, useRef } from 'react';
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "./nav"
import Logo from "../images/logo"
import Button from './button'

// this is purposley loaded twice I dont know if I can fix that with layers etc
export function Forrest() {
  return <StaticImage src="https://jarrodsemmenswindowcleaning.s3.us-west-1.amazonaws.com/adam-vradenburg-_gu7E90QChU-unsplash-compressed.jpg" alt="forrest image" className="forrest" />
}

export function Cartoon() {
  return <StaticImage src="https://jarrodsemmenswindowcleaning.s3.us-west-1.amazonaws.com/stock-previews/AdobeStock_32749018_Preview-transparent.png" alt="cartoon window cleaner" className="cartoon" />
}

const Header = () => {
  return (

    <header>
      <h1 className="sr-only"><Link to="/">Jarrod Semmens Window Cleaning</Link></h1>
      {/* full width */}
      <Forrest />

      <div className="header__container">
        <Forrest />
        <Link
          to='/'
          className="header__logo"
          title='Jarrod Semmens Window Cleaning'
        >
          <Logo />
        </Link>

        <Button />

        {/* // TODO: this needs the hover come out of the circle */}
        <div className='cartoon__wrapper'>
          <Cartoon />
        </div>
      </div>

      <div className="large_menu">
        <Nav />
      </div>
    </header>
  )
}

export default Header
