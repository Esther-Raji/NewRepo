import React from 'react'
import './HeroPage.css'
import img from '../assets/food.jpg'

const HeroPage = () => {
  return (
    <div className='Hero'>
       <div className='HeroLeft'>
        <h1>"It's Not Just F<span>oo</span>d, It's an Experience."</h1>
       </div>
       <div className='HeroRight'>
       {/* <img src={img} alt="" /> */}
       </div>
       

    </div>
  )
}

export default HeroPage