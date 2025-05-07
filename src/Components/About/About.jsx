import React from 'react'
import aboutCSS from './../About/About.module.css'
import aboutImg from './../../assets/img4.png'

function About() {
  return (
    <div className={`${aboutCSS.about_wrapper} section`}>
      <div className={aboutCSS.about_img}>
        <img src={aboutImg} alt='about-img' />
      </div>
      <div className={aboutCSS.about_content}>
        <small className='section_Heading'>The Corbett Caves</small>
        <h2 className='section_Title'>Travel For Enough, You <span>Meet YourSelf</span></h2>
        <p>Best Hotel in Dhikuli, Ramnagar<br />At Corbettcavesinn, we provide more than just comfortable accommodations—we ensure a memorable and hassle-free stay with our premium services and modern amenities. Whether you're a business traveler, tourist, or family, our affordable hotel in Dhikuli, Ramnagar is designed to meet all your needs.</p>
        <div className={aboutCSS.Cards}>
          <p>10+<span>Awards Wins</span></p>
          <p>250k+<span>Visitors Visits</span></p>
          <p>20+<span>Events</span></p>
        </div>
      </div>
    </div>
  )
}

export default About
