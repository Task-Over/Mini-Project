import React, { useState } from 'react';
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import './Testmonials.css';

const Testmonials = () => {
    const [selected, setSelected] = useState(0);
    const handleLeft = ()=>{
        if(selected === 0){
            setSelected(2)
        }
        else{
            setSelected((currSlected)=>currSlected-1);
        }
    }
    const handleRightt = ()=>{
        if(selected === 2){
            setSelected(0)
        }
        else{
            setSelected((currSlected)=>currSlected+1);
        }
    }
  return (
    <div className='Testimonials' id='testimonials'>
      <div className="left-t">
        <span>Testimonials</span>
        <span >What They</span>
        <span>Say About US</span>
        <span>
            {testimonialsData[selected].review}
        </span>
        <span>
            <span style={{color: 'var(--orange', fontWeight: 'bold'}}>{testimonialsData[selected].name} </span>
            <span>- {testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt=""/>
        <div className="arrows">
            <img src={leftArrow} onClick={handleLeft} alt="" />
            <img src={rightArrow}  onClick={handleRightt} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testmonials
