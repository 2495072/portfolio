import React from 'react';
import AboutCSS from "./About.module.css";
import pdfFile from '../../files/Resume.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons";

function About(){
  return (
    <>
      <div className={`${AboutCSS.container}`} id="about">
              <h4 className={`${AboutCSS.h4}`}>ABOUT</h4>
              <p className={`${AboutCSS.aboutText}`}>
                  Montreal-based Graphic and Web Designer with a vibrant, dynamic approach, balanced by a minimalist aesthetic and a passion for 
                  thoughtful design. Known for being meticulous, highly collaborative, and driven by both passion and curiosity, I thrive on turning 
                  creative ideas into functional, user-friendly solutions.
                  In 2021, I transitioned into programming after completing
                  <a href="https://johnabbott.qc.ca" target="_blank" rel="noreferrer" className={`${AboutCSS.link}`}> John Abbott College's </a> 
                   Graphic and Web Design program. This pivotal shift allowed me to blend design and development expertise, creating well-rounded 
                  digital experiences.
              </p> 
              <p className={`${AboutCSS.aboutText}`}>
                  Following an internship, I joined
                  <a href="https://veleax.com" target="_blank" rel="noreferrer" className={`${AboutCSS.link}`}> Veleax Inc.</a>,
                   where I led the design and development of a web application from concept to completion. This role challenged me to integrate 
                  cutting-edge technologies while delivering seamless user experiences aligned with the company's objectives. The project 
                  strengthened my technical skills and reinforced the value of adaptability, problem-solving, and continuous learning in 
                  fast-evolving development environments.
              </p>
              <p className={`${AboutCSS.aboutText}`}>
                  My skill set includes front-end technologies like HTML, CSS, JavaScript, and React, combined with a strong understanding of UX/UI 
                  design principles. I’m passionate about building responsive, accessible, and visually appealing websites that connect users 
                  to brands through optimized performance and intuitive interaction.
              </p>
              <p className={`${AboutCSS.aboutText}`}>
                  I’m excited to contribute my creativity, technical expertise, and collaborative mindset to forward-thinking teams working on 
                  innovative projects.
              </p>

              <br></br>

              <p>
                  <a href={pdfFile} target="_blank" rel="noreferrer" className={`${AboutCSS.cv}`}>
                    <span className={`${AboutCSS.resume}`}>RESUME</span>
                    <FontAwesomeIcon icon={faArrowsRotate} size="sm" className={`${AboutCSS.arrow}`}/>
                  </a>
              </p> 
      </div>
    </>
  );
};

export default About;