import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import TahoeSvg from "../images/tahoe"
import TreelinesSVG from "../images/tree-lines"

import Nav from "./nav"

export function Trees() {
  return <StaticImage
    src="https://jarrodsemmenswindowcleaning.s3.us-west-1.amazonaws.com/stock-previews/AdobeStock_299275392_Preview.jpg"
    alt="painted trees"
    className="trees"
  />
}

const Footer = () => {
  return (
    <footer>

      <div className="footer__stripe">
        <div className="stripe">

          <p className="end">WHY <br className="br__pad" />CHOOSE <br className="br__pad" />US?</p>
          <ul className="two-three">
            <li>Locally Owned &amp; Operated</li>
            <li>We Hire Only High Quality Employees</li>
            <li>Friendly, Professional Service</li>
            <li>
              <a
                href="https://www.bbb.org/us/ca/tahoe-city/profile/window-cleaning/jarrod-semmens-window-cleaning-1156-90014486"
                target="_blank"
                rel='noreferrer noopener'
              >Member Of Better Business Bureau (BBB)</a></li>
          </ul>


        </div>
        <TahoeSvg />
      </div>

      <div className="footer__list">
        <div className="one-two">
          <p><a href="tel:5305811987">(530) 581-1987</a></p>
          <p>
            <a
              href="mailto:service@jarrodsemmenswindowcleaning.com?subject=Inquiry from Jarrod Semmens Window Cleaning.com"
              className="longline"
            >
              service@jarrodsemmenswindowcleaning.com
            </a>
          </p>

          <address>
            PO Box 7614<br />
            Tahoe City, CA 96145
          </address>


          <a
            href="https://www.yelp.com/biz/semmens-jarrod-window-cleaning-tahoe-city"
            target="_blank"
            rel='noreferrer noopener'
            className="yelp__link"
            aria-label="yelp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" ><title>yelp</title><rect width="512" height="512" className="svg__backer" /><path d="M248.32,74.24c-1.28-4.69-5.12-8.11-10.24-9.81-16.21-4.27-79.36,13.65-90.88,26-3.84,3.84-5.12,9-3.84,13.23,1.71,3.84,79.79,128.43,79.79,128.43,11.52,18.77,20.9,16.21,23.89,14.93,3-.85,12.37-3.84,11.52-26C256.85,195,249.17,79.79,248.32,74.24ZM214.61,308.05c6.4-1.7,10.67-7.68,11.1-14.93.42-7.68-3.42-14.51-9.82-17.07L198,268.8c-61-25.6-63.57-26.45-66.56-26.45-4.69-.43-9,2.13-11.94,6.82-6,9.82-8.54,41.39-6.4,62.3.85,6.82,2.13,12.8,3.84,16.21,2.56,4.69,6.4,7.68,11.09,7.68,3,0,4.69-.43,61.44-18.77Zm32,23.47c-6.82-3-14.5-1.28-18.77,4.27l-12.37,14.93c-42.67,51.2-44.38,53.33-45.66,56.32a12.66,12.66,0,0,0-.85,5.55,11.5,11.5,0,0,0,3.41,7.68c9.82,11.94,57.18,29.86,72.54,27.3A13.06,13.06,0,0,0,255.57,439c.86-3,1.28-5.12,1.28-65.28V346.45C257.71,340.05,253.44,334.08,246.61,331.52Zm148.48,12c-2.56-1.71-4.26-2.56-61-21.34,0,0-24.75-8.53-25.17-8.53-6-2.56-12.8-.43-17.5,5.55s-5.54,13.65-1.7,19.62l9.81,16.64c33.71,55.47,36.27,59.31,38.4,61.44,3.84,3,8.53,3.42,13.65,1.28,14.51-6,45.66-46.08,47.79-61.86C400.21,351.15,398.93,346.45,395.09,343.47Zm-91.3-63.15c9-1.71,82.34-19.2,88.32-23.47,3.84-2.56,6-7.25,5.54-12.8v-.42c-1.7-16.22-29.44-58-43.09-64.86-4.69-2.13-9.81-2.13-13.65.43-2.56,1.71-4.27,4.27-38.83,52.05L286.29,253c-4.26,5.12-4.26,12.38,0,18.78C290.56,278.61,294.83,282,303.79,280.32Z" className="yelp" /></svg>
          </a>

          <ul className="copyright pad__up">
            <li>Jarrod Semmens Window Cleaning</li>
            <li>
              {new Date().getFullYear()}

            </li>
            {/* <li>Terms and Conditions</li> */}
            {/* &copy;  */}
          </ul>
        </div>

        <div>
          <Nav />
          {/* <Trees /> */}
          <TreelinesSVG />
        </div>
      </div>

      <ul className="copyright pad__down">
        <li>Jarrod Semmens Window Cleaning</li>
        <li>{new Date().getFullYear()}</li>
        {/* <li>Terms and Conditions</li> */}
        {/* &copy;  */}
      </ul>
    </footer>
  )
}

export default Footer
