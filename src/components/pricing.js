import React, { Fragment } from 'react';
import Section from "../img/feature.jpg";
import "../style/about.css";
const Pricing = () => {
    return (
        <Fragment>
        <div className="middle">
        <h1>Pricing Page</h1>
       <img src={Section} alt="" />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime inventore, deleniti alias autem cumque totam ab repudiandae corrupti hic.</p>
       </div>
        </Fragment>
    );
}

export default Pricing;