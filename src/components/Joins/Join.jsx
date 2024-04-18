import React, { useRef, useState } from 'react';
import './Join.css';

const Join = () => {
  return (
    <div className='Join' id='join-us'>
      <div className="left-j">
        <hr />
        <div>
          <span>Ready To</span>
          <span className='stroke'> Level Up</span>
        </div>
        <div>
          <span >Your Body</span>
          <span className='stroke-text'> With Us?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="#" className='email-container'>
          <input type="email" name="user_email" placeholder='enter you email'/>
          <button type='button' className='btn btn-j'><article className='ex_a'>Send Email</article></button>
        </form>
      </div>
    </div>
  )
}

export default Join
