import React from 'react'
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_main1.png';
import NumberCounter from 'number-counter'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>
        <div className="the-best-ad">
          {/* <div></div> */}
          <span>The best <span className="stroke">Gymnassium</span> in Town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke'>Transform</span>
            <span> Into</span>
          </div>
          <div>
            <span>Amazing</span>
            <span> Body</span>
            </div>
            <div><span>
              In Here We Will Help You Shape & Build Your Ideal Body &
              live up your life to Fullest.
              </span>
            </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={10} delay={2} className="increment" preFix="+ "/></span><span>Expert Coaches</span>
          </div>
          <div>
            <span><NumberCounter end={250} delay={2} className="increment" preFix="+ "/></span><span>Members Joined</span>
          </div>
          <div>
            <span><NumberCounter end={7} delay={2} className="increment" preFix="+ "/></span><span>Fitness Programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
           <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <img src={hero_image} alt=""  className='hero-image'/>
      </div>

    </div> 
  )
}

export default Hero

