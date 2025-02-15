import React, {useState, useEffect} from 'react';
import DetailsCSS from "./Details.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Details(){
  const [activeSection, setActiveSection] = useState('#about');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Calculate the scroll position for each section
      const about = document.querySelector('#about').offsetTop-100;
      const skills = document.querySelector('#skills').offsetTop-100;
      const projects = document.querySelector('#projects').offsetTop-100;
      const contact = document.querySelector('#contact').offsetTop-100;

      // Determine which section is currently in view
      if (scrollPosition >= about && scrollPosition < skills) {
        setActiveSection('#about');
      } else if (scrollPosition >= skills && scrollPosition < projects) {
        setActiveSection('#skills');
      } else if (scrollPosition >= projects && scrollPosition < contact) {
        setActiveSection('#projects');
      } else if (scrollPosition >= contact) {
          setActiveSection('#contact');
      } else {
        setActiveSection('#about');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (sectionId) => {
    smoothScroll(sectionId);
  };

  const smoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    const offsetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: offsetPosition-100,
      behavior: 'smooth'
    });
    // Update the active section after smooth scrolling is completed
    setTimeout(() => {
      setActiveSection(targetId);
    }, 1000);
  }
  return (
    <>
      <div className={`${DetailsCSS.container}`}>
              <h2>Evgenia Epelboym</h2> 
              <h4 className={`${DetailsCSS.fullStack}`}>Web Designer & Front-End Developer</h4>
              <p className={`${DetailsCSS.aboutText}`}>
              Passionate and detail-oriented Web and Front-End Developer with expertise in
              building user-friendly, visually appealing websites.
              </p>
              <div className={`${DetailsCSS.menu}`} onClick={() => handleItemClick('#about')}>
                  <span className={`${activeSection === '#about' ? `${DetailsCSS.lineActive}` : `${DetailsCSS.line}`}`}></span>
                  <span className={`${activeSection === '#about' ? `${DetailsCSS.wordActive}` : `${DetailsCSS.word}`}`}>about</span>
              </div><br></br>
              <div className={`${DetailsCSS.menu}`} onClick={() => handleItemClick('#skills')}>
                  <span className={`${activeSection === '#skills' ? `${DetailsCSS.lineActive}` : `${DetailsCSS.line}`}`}></span>
                  <span className={`${activeSection === '#skills' ? `${DetailsCSS.wordActive}` : `${DetailsCSS.word}`}`}>skills</span>
              </div><br></br>
              <div className={`${DetailsCSS.menu}`} onClick={() => handleItemClick('#projects')}>
                  <span className={`${activeSection === '#projects' ? `${DetailsCSS.lineActive}` : `${DetailsCSS.line}`}`}></span>
                  <span className={`${activeSection === '#projects' ? `${DetailsCSS.wordActive}` : `${DetailsCSS.word}`}`}>projects</span>
              </div><br></br>
              <div className={`${DetailsCSS.menu}`} onClick={() => handleItemClick('#contact')}>
                  <span className={`${activeSection === '#contact' ? `${DetailsCSS.lineActive}` : `${DetailsCSS.line}`}`}></span>
                  <span className={`${activeSection === '#contact' ? `${DetailsCSS.wordActive}` : `${DetailsCSS.word}`}`}>contact</span>
              </div>
              <div className={`${DetailsCSS.icons}`}>
                <a href="https://github.com/2495072" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={`${DetailsCSS.icon}`}/></a>  
                <a href="https://www.linkedin.com/in/evgenia-epelboym/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className={`${DetailsCSS.icon}`}/></a>
              </div> 
              
      </div>
    </>
  );
};

export default Details;