import React, { Fragment } from 'react';
import Section from "../img/team.jpg";
import "../style/about.css";
const Projects = () => {
    return (
        <Fragment>
        <div className="middle">
        <h1>Projects Page</h1>
       <img src={Section} alt="" />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime inventore, deleniti alias autem cumque totam ab repudiandae corrupti hic.</p>
       </div>
        </Fragment>
    );
}

export default Projects;