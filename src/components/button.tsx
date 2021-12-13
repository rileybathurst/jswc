
import React, { useState, useRef, useEffect } from 'react';

function Button() {
  const [slide, setSlide] = useState('firstload');
  const [amount, setAmount] = useState(0);
  const ref = useRef();

  if (slide == "firstload") {

    useEffect(() => {
      console.log('firstload');
      console.log(ref.current);
      console.log(ref.current.clientHeight);
      setAmount(ref.current.clientHeight);
    });

    return (
      <>
        <button
          className="button-styles button4plus"
          onClick={() => setSlide('close')}
        >
          <span
            style={{ transform: 'translateY(-2rem)' }}
            className="span-styles"
          >close<br />menu
          </span>
        </button>
        <nav
          style={{
            transform: 'translateY(-' + amount + 'px)',
            // marginBottom: '-' + amount + 'px',
            marginBottom: '-134px',
          }}
          ref={ref}
        >
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </nav>
      </>
    );
  } else if (slide == "menu") {

    useEffect(() => {
      console.log('menu');
      console.log(ref.current.clientHeight);
      setAmount(ref.current.clientHeight);
    });

    return (
      <>
        <button
          className="button-styles button4plus"
          onClick={() => setSlide('close')}
        >
          <span
            style={{ transform: 'translateY(-2rem)' }}
            className="span-styles"
          >close<br />menu
          </span>
        </button>
        <nav
          style={{
            transform: 'translateY(-' + amount + 'px)',
            marginBottom: '-' + amount + 'px',
            transition: '2s ease',
          }}
          ref={ref}
        >
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </nav>
      </>
    );
  } else {

    useEffect(() => {
      console.log('else');
      console.log(ref.current.clientHeight);
      setAmount(ref.current.clientHeight);
    });

    return (
      <>
        <button
          className="button-styles button4plus"
          onClick={() => setSlide('menu')}
        >
          <span
            style={{ transform: 'translateY(0)' }}
            className="span-styles"
          >close<br />menu
          </span>
        </button>
        <nav
          style={{
            transform: 'translateY(0)',
            marginBottom: '-' + amount + 'px',
            transition: '2s ease',
          }}
          ref={ref}
        >
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Button
