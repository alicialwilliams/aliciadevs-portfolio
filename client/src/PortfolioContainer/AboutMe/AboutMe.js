import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description: "Recent MERN Stack graduate with an  entrepreneurial spirit and eager to learn new things.  Dedicated, driven and an avid team player with a strong work ethic.  I am seeking a company where I can utilize my skills and broad work experience as an entry level software developer.",
        highlights: {
            bullets: [
                "JavaScript",
                "React",
                "MERN Stack web",
                "Interactive Front End as per the design",
            ],
            heading: "Here are a Few Highlights:"
        },
    };
    const renderHighlight = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ''}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why choose Me?'} />
                <div className='about-me-card'>
                    {/* <div className='about-me-profile'></div> */}
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn'
                                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                            >
                                {""}
                                Contact Me{" "}
                            </button>
                            <a href='AliciaLWilliams2022_Res.pdf' download='Alicia AliciaLWilliams2022_Res.pdf'>
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
