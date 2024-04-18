import React from 'react'
import './Programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className='Programs' id='programs'>
      <div className="programs-header">
        <div className="two-span">
        <span>Explore</span>
        <span> Our Program To<span className='ui_color'> Shape </span>You</span>
        </div>
     </div>

     <div className="program-categories">
        {programsData.map((program)=>(
            <div className='category'>
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <img src={RightArrow} alt="" />
                </div>
            </div>))}
     </div>
    </div>
  )
}

export default Programs
