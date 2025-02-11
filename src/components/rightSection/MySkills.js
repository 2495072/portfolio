import React from 'react';
import MySkillsCSS from "./MySkills.module.css";

function MySkills(){
  const tools = [
    {
      tool_name: "Design Softwares",
      tool_desc: ["Figma", "Illustrator", "Photoshop", "InDesign", "XD",  "Premiere Pro"],
    },

    {
      tool_name: "Programming Languages",
      tool_desc: ["Python", "JavaScript", "PHP", "HTML & CSS", "SQL"],
    },

    {
      tool_name: "Front-End",
      tool_desc: ["Bootstrap", "React", "Wordpress", "Django"],
    },

    {
      tool_name: "Databases",
      tool_desc: ["MySQL", "SQLite"],
    },

    {
      tool_name: "Dev. Process",
      tool_desc: ["Agile Methodology", "Scrum", "Trello (Kanban board)", "Git (GitHub)"],
    },
  ]
  return (
    <>
      <div className={`${MySkillsCSS.container}`} id="skills">
        <div className={`${MySkillsCSS.skills}`}>
          <h4 className={`${MySkillsCSS.h4}`}>SKILLS</h4>
            {tools.map((tool) => {
              return (
                      <div key={tool.tool_name} className={`${MySkillsCSS.toolDiv}`}>
                        <h3 className={`${MySkillsCSS.toolHeading}`}>{tool.tool_name}</h3>
                        <p>
                          {tool.tool_desc.map(item => (
                            <button key={item.toString()} className={`${MySkillsCSS.toolName}`}>{item} </button>
                          ))}
                        </p>
                      </div>
                    );
            })}
        </div>
      </div>
    </>
  );
};

export default MySkills;