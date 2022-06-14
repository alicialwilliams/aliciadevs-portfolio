import React from 'react';
import './Project.css';


function Project({ img, link }) {
    return (
        <div className='proj'>
            <div className='proj-browser'>
                <div className='proj-circle'></div>
                <div className='proj-circle'></div>
                <div className='proj-circle'></div>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={img} alt="" className='proj-img' /> </a>
        </div>
    )
}

export default Project