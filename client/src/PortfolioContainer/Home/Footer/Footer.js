import React from 'react';
import './Footer.css';



export default function footer() {
    const footerImage = require('../../../assets/Home/shape-bg.png')
    return (
        <div className="footer-container">
            <div className="footer-parent">
                <img
                    src={footerImage}
                    alt='problem with the image'
                />
            </div>
        </div>
    );
}