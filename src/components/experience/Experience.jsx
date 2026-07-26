import React from 'react'
import './experience.css'
import AI from '../../assets/work/Gtools/AI.png'
import PS from '../../assets/work/Gtools/PS.png'
import Lr from '../../assets/work/Gtools/Lr.png'
import canva from '../../assets/work/Gtools/canva.png'
import coral from '../../assets/work/Gtools/coral.png'
import ExperienceJourney from './ExperienceJourney'

const Experience = () => {
    return (
        <>
            <div className="experienceContainer">
                <h1 className='experienceHead'>Experience <span>(8+ years)</span></h1>
                <div className="toolsContainer">
                    <h2 className="toolsHead">
                        Tools
                    </h2>
                    <div className="toolsImages">
                        <div className="singleimgContainer">
                            <img height="300px" src={AI} alt="Illustrator" />
                        </div>

                        <div className="singleimgContainer">
                            <img height="250px" src={PS} alt="Photoshop" />
                        </div>

                        <div className="singleimgContainer">
                            <img height="200" src={Lr} alt="lightroom" />
                        </div>

                        <div className="singleimgContainer">
                            <img height="220px" src={canva} alt="canva" />
                        </div>

                        <div className="singleimgContainer">
                            <img width="230px" src={coral} alt="coral" />
                        </div>
                    </div>
                </div>
            </div>
            <ExperienceJourney/>
        </>
    )
}

export default Experience
