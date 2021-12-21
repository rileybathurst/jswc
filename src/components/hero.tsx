import React, { useState, useRef, useEffect } from 'react';

import SqueegeeSVG from '../images/squeegee'

function Clip() {

  const [amount, setAmount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current.clientHeight);
    setAmount(ref.current.clientHeight);
  });

  return (
    <>
      <div className="card-content">
        <div
          className="squeegee__outline"
          style={{
            height: amount + 'px',
          }}
        >{/* stay gold */}</div>
        <div id="card-text" ref={ref}>
          <h2>Providing Year Round Service</h2>
          <p>
            We’re your local number one source in Window Cleaning in Tahoe City and surrounding areas.
            Besides window cleaning, we offer gutter cleaning, screen repair and winter snow shoveling.
            We are locally owned and operated company and our passion is about helping others achieve their window cleaning needs.
            We have been in business since 1987 and proud of our continuous growth.
            Our philosophy is simple: We believe that by providing and excellent service for an affordable price we will have you as a customer for life…
            Call today for a FREE estimate!
          </p>
        </div>
      </div>
      <SqueegeeSVG />
      <div className='squeegee__line'>{/* stay gold */}</div>
    </>
  );
}

const Hero = () => {
  return (

    <article className="hero">
      {/* <SqueegeeSVG /> */}
      <Clip />
    </article>)
}

export default Hero