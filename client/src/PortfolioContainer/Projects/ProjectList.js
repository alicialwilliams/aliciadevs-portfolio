import React from 'react';
import './ProjectList.css';
import Project from './Project.js'
import { projects } from '../../data.js';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';


function ProjectList(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    return (
        <>
            <ScreenHeading
                title={'Projects'}
                subHeading={'Working Projects'}
            />
            <section className='project-section fade-in' id={props.id || " "}>
                <div className='container'>
                    <div className='project-list'>
                        {projects.map(item => (
                            <Project key={item.id} img={item.img} link={item.link} />
                        ))}




                    </div>


                </div >
            </section >
        </ >
    )
};

export default ProjectList;

