import React, {useRef} from 'react'
import './hero.css'
import myMascot from '../../assets/myMascot.jpg'
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';

const Hero = () => {
    const imageref = useRef()
    useGSAP(() => {
            gsap.to(imageref.current, {
                y:20,
                duration:2,
                // delay: 1,
                repeat: -1,
                yoyo:true
            })
        });
  return (
    <main className='hero'>
        <div className='heroText'>
        <h1> <span>I am a Senior Graphic Designer</span>  with 8+ years of experience in branding, marketing, and packaging design, creating visuals that leave a lasting impression. </h1>
        </div>
        <div className="heroImg">
            <div ref={imageref} className="circle">
            <img src={myMascot} alt="Saqib syed" />
            </div>
        </div>
    </main>
  )
}

export default Hero
