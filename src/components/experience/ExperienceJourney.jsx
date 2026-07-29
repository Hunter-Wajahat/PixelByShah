import React, { useRef } from 'react'
import './experience.css'
import merkavoix from "../../assets/companyLogos/MerkaVoix.jfif"
import multipleSolutions from "../../assets/companyLogos/MultipleSolutions.jfif"
import nextNova from "../../assets/companyLogos/nextNova.jfif"
import pieSolution from "../../assets/companyLogos/pieSolution.jfif"
import printedToday from "../../assets/companyLogos/printedToday.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const ExperienceJourney = () => {
    const slide = useRef()
    const journeyCardDataRight = [
        {
            key: "printed-today-2015",
            jobTitle: "Graphic Designer",
            companyName: "Printed Today",
            duration: "May 2015 - Jul 2016 · 1 yr 3 mos",
            location: "Manchester, England, United Kingdom",
            description: "i worked here and Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis placeat laboriosam officia soluta aliquam incidunt eos quod expedita quos labore quasi obcaecati minus, amet nobis."
        },
        {
            key: "next-nova-2021",
            jobTitle: "Senior Graphic Designer/Social Media manager",
            companyName: "Next Nova Technologies (Pvt) Ltd.",
            duration: "Jan 2021 - Jan 2022 · 1 yr 1 mo",
            location: "Abbottabad District, Khyber Pakhtunkhwa, Pakistan",
            description: "i worked here and Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis placeat laboriosam officia soluta aliquam incidunt eos quod expedita quos labore quasi obcaecati minus, amet nobis."
        },
        {
            key: "pie-solutions-2017",
            jobTitle: "Senior Graphic Designer",
            companyName: "Pie Solutions · Contract",
            duration: "Jun 2017 - Aug 2023 · 6 yrs 3 mos",
            location: "Unit B, 16 Robert St, Cheetham Hill, Manchester, United Kingdom",
            description: "i worked here and Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis placeat laboriosam officia soluta aliquam incidunt eos quod expedita quos labore quasi obcaecati minus, amet nobis."
        },
        {
            key: "merkavoix-2026",
            jobTitle: "Senior Graphic Designer",
            companyName: "Merkavoix · Full-time",
            duration: "Mar 2026 - Present",
            location: "Washington DC",
            description: "i worked here and Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis placeat laboriosam officia soluta aliquam incidunt eos quod expedita quos labore quasi obcaecati minus, amet nobis."
        }
    ]
    const journeyCardDataLeft = [
        {
            key: "multiple-solutions-2016",
            jobTitle: "Graphic Designer",
            companyName: "Multiple Solutions",
            duration: "Apr 2016 - Dec 2020 · 4 yrs 9 mos",
            location: "Manchester Area, United Kingdom",
            description: "i worked here and Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis placeat laboriosam officia soluta aliquam incidunt eos quod expedita quos labore quasi obcaecati minus, amet nobis."
        },
        {
            key: "self-employed-2010",
            jobTitle: "Graphic Designer",
            companyName: "Self employed",
            duration: "May 2010 - Aug 2022 · 12 yrs 4 mos",
            location: "Islamabad Pakistan",
            description: "i worked here and Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis placeat laboriosam officia soluta aliquam incidunt eos quod expedita quos labore quasi obcaecati minus, amet nobis."
        },
        {
            key: "pie-solutions-pvt-2022",
            jobTitle: "Senior Graphic Designer",
            companyName: "PIE Solutions Pvt Ltd · Full-time",
            duration: "Feb 2022 - Mar 2026 · 4 yrs 2 mos",
            location: "Silicon velley",
            description: "i worked here and Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis placeat laboriosam officia soluta aliquam incidunt eos quod expedita quos labore quasi obcaecati minus, amet nobis."
        },
    ]

    useGSAP(() => {

        const clone = slide.current.innerHTML;
        slide.current.innerHTML += clone;

        // Calculate the width of one full set of text
        const trackWidth = slide.current.scrollWidth / 5;

        // Create the infinite horizontal loop
        gsap.to(".animateImg", {
            x: -trackWidth,
            duration: 15,       // Adjust speed (higher = slower)
            ease: "none",       // Linear motion is required for tickers
            repeat: -1,          // Loop infinitely
            yoyo:true
        });

    }, {scope: slide.current})

    return (
        <>
            <div className="expJourneyConainer">
                <h1 className='expjourneyHead'>My 8+ years of Journey</h1>
            </div>
            <div className="expJourney">
                <div className="expLeft">
                    {journeyCardDataRight.map((data) => (
                        <div key={data.key} className="JourneyCardWrapper">
                            <div className="JourneyCard">
                                <h1 className="jobTitle">{data.jobTitle}</h1>
                                <h2 className='companyName'>at <b>{data.companyName}</b></h2>
                                <h3 className='jobDuration'>{data.duration}</h3>
                                <h3 className='jobLocation'>Location: {data.location}📍</h3>
                                <p className='journeyParagraph'> {data.description} </p>
                            </div>
                            <div className="timelineDot"></div>
                        </div>
                    ))}
                </div>
                <div className="expCenterL"></div>
                <div className="expRight">
                    {journeyCardDataLeft.map((data) => (
                        <div key={data.key} className="JourneyCardWrapperRight">
                            <div className="JourneyCardRight">
                                <h1 className="jobTitle"> {data.jobTitle} </h1>
                                <h2 className='companyName'>at <b> {data.location} </b></h2>
                                <h3 className='jobDuration'> {data.duration} </h3>
                                <h3 className='jobLocation'>Location: {data.location} 📍</h3>
                                <p className='journeyParagraph'> {data.description} </p>

                            </div>
                            <div className="timelineDotRight"></div>
                        </div>
                    ))}
                </div>
            </div>
            <div ref={slide} className="companySlideContainer">
                <img className='theBox animateImg' src={merkavoix} alt="merkaVoix" />
                <img className='theBox animateImg' src={multipleSolutions} alt="multiple Solutions" />
                <img className='theBox animateImg' src={nextNova} alt="nextNova" />
                <img className='theBox animateImg' src={pieSolution} alt="pie solution" />
                <img className=' animateImg' src={printedToday} alt="printed today" />
            </div>

        </>
    )
}

export default ExperienceJourney
