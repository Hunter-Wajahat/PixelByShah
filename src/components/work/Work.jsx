import React, {useRef} from 'react'
import './work.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

// FIFA images
import fifaimg1 from "../../assets/work/FIFA/fifa1.jpg"
import fifaimg2 from "../../assets/work/FIFA/fifa2.jpg"
import fifaimg3 from "../../assets/work/FIFA/fifa3.jpg"
import fifaFinalimg from "../../assets/work/FIFA/FIFA_final.jpg"

//PIA images
import PIA1 from "../../assets/work/PIA/PIA1.jfif"
import PIA2 from "../../assets/work/PIA/PIA2.jfif"
import PIA3 from "../../assets/work/PIA/PIA3.jfif"
import PIA4 from "../../assets/work/PIA/PIA4.jfif"
const Work = () => {
    const fifaimageContainer = useRef()
    const  piaimageContainer = useRef()
    useGSAP(() => {
    gsap.to("img", {
        x: "-280px",
        delay: 1,
        duration: 10,
        repeat:-1,
        yoyo:true
    })

}, { scope: fifaimageContainer })

// animation for PIA work
    useGSAP(() => {
    gsap.to("img", {
        x: "-2200px",
        delay: 1,
        duration: 50,
        repeat:-1,
        yoyo:true
    })
}, {scope: piaimageContainer})
    return (
        <>
            <div className="workContainer">
                <h1 className="workHeader"><span></span> <div>WORK</div></h1>
                <div className="imageAndTitleContainer">
                    <h2 className="imagesTitle">FIFA World Cup</h2>
                    <div ref={fifaimageContainer} className="onlyImageContainer">
                    
                     <div className="imageSlide"><img src={fifaimg1} alt="work_Image" /></div>
                    <div className="imageSlide"><img src={fifaimg2} alt="work_Image" /></div>
                    <div className="imageSlide"><img src={fifaimg3} alt="work_Image" /></div>
                    <div className="imageSlide"><img src={fifaFinalimg} alt="work_Image" /></div>
                    </div>
                </div>


                <div className="imageAndTitleContainer">
                    <h2 className="imagesTitle">PIA - New Design</h2>
                    <div ref={piaimageContainer} className="onlyImageContainer">
                   <div className="imageSlide"><img src={PIA1} alt="work_Image" /></div>
                    <div className="imageSlide"><img src={PIA2} alt="work_Image" /></div>
                    <div className="imageSlide"><img src={PIA3} alt="work_Image" /></div>
                    <div className="imageSlide"><img src={PIA4} alt="work_Image" /></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Work
