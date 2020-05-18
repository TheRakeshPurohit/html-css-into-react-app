import React, { Fragment } from 'react';
import Section from "../img/blogFeatureImg.jpg";
import "../style/about.css";
const Contact = () => {
    return (
        <Fragment>
        <div className="middle">
        <h1>Contact Page</h1>
       <img src={Section} alt="" />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime inventore, deleniti alias autem cumque totam ab repudiandae corrupti hic.</p>
       </div>
        </Fragment>
    );
}

export default Contact;