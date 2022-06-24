import React, {useState} from 'react';
import hero from '../../Assets/hero.png';
import './Home.css';

export default function Home(props) {
  const [selectedCountry, setSelectedCountry] = useState('Pakistan');

  function inputChangeHandler(event) {
    console.log(event.target.value);
    setSelectedCountry(event.target.value);
  }

  function onClickHandler() {
    props.changeCountryHandler(selectedCountry);
  }
  return (
    <section id="home">
      <div className="background">
        <img src={hero} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>A new sky, A new life</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id unde quod, ipsa facilis porro eveniet sequi voluptatum labore quidem incidunt voluptatem magnam facere quibusdam vero. Quod, magni! Eum, tempore minima.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where do you want to go?</label>
            <input type="text" placeholder='Search your location' value={selectedCountry} onChange={inputChangeHandler} />
          </div>
          <div className="container">
            <label htmlFor="">Check-In</label>
            <input type="date"/>
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date"/>
          </div>
          <div className="container">
            {/* <label htmlFor="">Check-out</label> */}
            <a href="#hotels">
              <button onClick={onClickHandler} href="#hotels">Explore Now!</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
