import React, { useState, useEffect, useRef } from 'react';
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "./nav"
import Logo from "../images/logo"
import Button from './button'

export function Forrest() {
  return <StaticImage src="https://jarrodsemmenswindowcleaning.s3.us-west-1.amazonaws.com/adam-vradenburg-_gu7E90QChU-unsplash-compressed.jpg" alt="forrest image" className="forrest" />
}
// 📣 I cant remeber if I need to load this twice or that was just working

export function Cartoon() {
  return <StaticImage src="https://jarrodsemmenswindowcleaning.s3.us-west-1.amazonaws.com/stock-previews/AdobeStock_32749018_Preview-transparent.png" alt="cartoon window cleaner" className="cartoon" />
}

const Header = () => {
  return (
    <>
      {/* keep links out of the seo */}
      {/* typescript needs @types/react-helmet */}
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/vpi7tts.css"
        // crossorigin="use-credentials"
        />
      </Helmet>

      <h1 className="sr-only"><Link to="/">Jarrod Semmens Window Cleaning</Link></h1>
      <header>
        <Forrest />{/* full width */}

        <div className="header__container">
          {/* <Forrest /> */}{/* skinny */}
          <Logo />

          {/* <SmallMenu /> */}
          <Button />

          <div className='cartoon__wrapper'>
            <Cartoon />
          </div>
        </div>

        <div className="large_menu">
          <Nav />
        </div>
      </header>
    </>
  )
}

export default Header
