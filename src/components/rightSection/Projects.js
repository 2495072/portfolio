import React from 'react';
import ProjectsCSS from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faDesktop} from "@fortawesome/free-solid-svg-icons";
import weather from '../../files/weather.png';
import calendar from '../../files/calendar.png';
import tsubame from '../../files/tsubame.png';


function Projects(){
  const projects = [
    {
      name: "Tsubame",
      desc: "Tsubame is an individual project focused on serving the essence of the traditional Japanese tea ceremony and associated activities. Built using HTML and CSS, Tsubame provides a digital platform to explore the art of tea-making and engage in related cultural practices. From serene tea rituals to immersive activities, Tsubame offers an interactive experience that celebrates Japanese heritage and fosters appreciation for its traditions.",
      tech: ["HTML", "CSS", "JavaScript", "Illustrator"],
      git: "https://github.com/2495072/Tsubame",
      demo: "https://2495072.github.io/Tsubame/",
      image: tsubame,
      access: "public"
    },
    {
      name: "Weather",
      desc: "This collaborative college project aims to create a web application that allows users to view real-time weather information, including weather forecasts for the upcoming days. The app will pull data from a weather API and display it in an easy-to-read format, with support for different locations. The project will also feature an intuitive interface for users to interact with, ensuring accessibility and responsiveness.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      git: "https://github.com/2495072/WeatherApp",
      demo: "https://2495072.github.io/WeatherApp/",
      image: weather,
      access: "public"
    },
    {
      name: "Calendar",
      desc: "This individual college project focuses on creating a simple, interactive calendar that highlights the current day and the current week. The main feature is the ability to clearly mark the present day with a visual highlight, as well as highlight the entire current week to give users easy reference. The calendar is designed to be straightforward and easy to navigate, providing a quick visual representation of the current time.",
      tech: ["HTML", "JavaScript"],
      git: "https://github.com/2495072/Calendar",
      demo: "https://2495072.github.io/Calendar/",
      image: calendar,
      access: "public"
    },
    {
      name: "Veleax",
      desc: "This practical implementation was custom-developed for Veleax Company, a provider of application development services. As part of the project, I worked as the web designer, using Figma to design the user interface and layout of the website. The design aimed to provide an intuitive and visually appealing experience for users interacting with the various features of the system.",
      tech: ["Figma"],
      git: "https://github.com/vladapple/veleax",
      demo: "https://www.veleax.com",
      image: "https://veleax.s3.us-east-2.amazonaws.com/veleax.JPG",
      access: "private"
    }
  ]
  return (
    <div id="projects" className={`${ProjectsCSS.container}`}>
      <h4 className={`${ProjectsCSS.h4}`}>PROJECTS</h4>
      <div>
        {projects.map((project) => {
          return (
                  <div key={project.name} className={`${ProjectsCSS.project}`}>
                    <h3 className={`${ProjectsCSS.toolHeading}`}>Project: <a href={`${project.demo}`} target="_blank" rel="noreferrer" className={`${ProjectsCSS.toolHeadingColor}`}>{project.name}</a></h3>
                    <p className={`${ProjectsCSS.aboutText}`}>{project.desc}</p>
                    <a href={`${project.demo}`} target="_blank" rel="noreferrer">
                      <img src={`${project.image}`} alt={`${project.name}`} className={`${ProjectsCSS.projectImg}`}/>
                    </a><br></br>
                    {project.tech.map(item => (
                      <button key={item.toString()} className={`${ProjectsCSS.toolName}`}>{item}</button>
                    ))}
                    <div className={`${ProjectsCSS.icons}`}>
                      {project.access === "private" ? 
                      (
                        <FontAwesomeIcon icon={faGithub} className={`${ProjectsCSS.icon1}`} title="Private repository"/>
                      ):(
                        <a href={`${project.git}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={`${ProjectsCSS.icon}`}/></a>
                      )}
                      <a href={`${project.demo}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDesktop} size="sm" className={`${ProjectsCSS.icon}`}/></a>
                    </div> 
                  </div>
                );
        })}
      </div>
    </div>
  );
};

export default Projects;