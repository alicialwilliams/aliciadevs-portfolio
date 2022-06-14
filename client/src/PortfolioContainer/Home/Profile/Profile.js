import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';


export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                            <a href='https://www.linkedin.com/in/alicia-williams-97636a3' target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square fa_custom"></i>
                            </a>
                            <a href='https://www.instagram.com/alicancreate2' target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-instagram'></i>
                            </a>

                            <a href='https://twitter.com/ali_aliW2023' target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>

                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Alicia</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Junior Dev 😊",
                                        1500,
                                        "MERN Stack Dev 📱",
                                        1500,
                                        "React Dev 🌐",
                                        1500,

                                    ]}
                                />
                            </h1>
                        </span>
                        <span className='profile-role-tagline'>
                            Building applications with front and back end operations.
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}
                            Contact Me{" "}
                        </button>
                        <a href='AliciaLWilliams2022_Res.pdf' download='Alicia AliciaLWilliams2022_Res.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>

        </div>

    );
}
