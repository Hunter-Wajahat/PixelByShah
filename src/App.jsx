import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Work from './components/work/Work';
import Experience from './components/experience/Experience';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
    </>
  )
}

export default App
