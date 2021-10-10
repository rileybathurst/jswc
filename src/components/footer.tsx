import * as React from "react"

import Nav from "./nav"

const Footer = () => {
  return (
    <footer className="page-styles">

      <div className="triad">
      <hr className="one-three" />

        <p className="end">WHY<br />CHOOSE<br />US?</p>
        <ul className="two-three">
          <li>Locally Owned &amp; Operated</li>
          <li>We Hire Only High Quality Employees</li>
          <li>Friendly, Professional Service</li>
          <li><a href="https://www.bbb.org/us/ca/tahoe-city/profile/window-cleaning/jarrod-semmens-window-cleaning-1156-90014486" target="_blank" rel='noreferrer'>Member Of Better Business Bureau(BBB)</a></li>
        </ul>

        <hr className="one-three" />
      </div>

      <div className="triad">
        <div className="one-two">
          <p><a href="tel:5305811987">(530) 581-1987</a></p>
          <p><a href="mailto:service@jarrodsemmenswindowcleaning.com">service@jarrodsemmenswindowcleaning.com</a></p>

          <address>
            3055 Cedarwood Dr<br />
            Tahoe City, CA 96145
          </address>

          <p><a href="https://www.yelp.com/biz/semmens-jarrod-window-cleaning-tahoe-city" target="_blank" rel='noreferrer'>Yelp</a></p>
        </div>

      <div>
        <Nav />
      </div>

      <hr className="one-three" />


        

      </div>

      <ul className="copyright">
        <li>&copy; 2021 Jarrod Semmens Window Cleaning</li>
        {/* <li>Terms and Conditions</li> */}
        </ul>

    </footer>
  )
}

export default Footer
