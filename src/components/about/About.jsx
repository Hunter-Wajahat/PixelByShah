import React, { useRef } from 'react'
import mypicture from '../../assets/brush squere picture.png'
import './about.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
const About = () => {
  const aboutimg = useRef()
  useGSAP(() => {
    gsap.to(aboutimg.current, {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
    })
  })
  return (
    <div className='aboutContainer'>
      <div className="aboutimg">
        <img ref={aboutimg} width="80%" src={mypicture} alt="saqib syed" />
      </div>
      <div className="aboutHeadAndTextContainer">
        <h1 className="abouthead"><span></span>About</h1>

        <div className="aboutText">
          As a Senior Graphic Designer at Merkavoix, my work focuses on creating compelling marketing materials, including brochures, flyers, and banners, that effectively communicate brand messages. My expertise in Adobe InDesign and packaging design enables me to deliver innovative and visually engaging solutions tailored to client needs.

          With over 8 years of experience in graphic design, I am dedicated to producing high-quality creative outputs that drive brand awareness and engagement. My passion lies in developing unique designs that align with business goals and resonate with target audiences, supporting impactful storytelling and marketing efforts.
        </div>
      </div>
    </div>
  )
}

export default About
