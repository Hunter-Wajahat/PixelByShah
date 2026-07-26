import React, { useRef } from 'react'
import './navbar.css';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const titleref = useRef(null)
    const ulref = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(titleref.current, {
            y: -30,
            opacity: 0, 
            delay: 0.5,
            duration: 1  
        })
        tl.from("li", {
            y: -30,
            opacity: 0, 
            delay: 0.1,
            duration: 0.5,
            stagger: 0.2
        })
    }, { scope: ulref });

    return (
        <div className='navbarContainer'>
            <h1 ref={titleref}>PixelByShah</h1>
            <ul ref={ulref}>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
