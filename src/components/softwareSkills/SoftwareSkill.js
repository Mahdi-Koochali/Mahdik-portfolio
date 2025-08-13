import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            console.log('Skill:', skills.skillName, 'imageSrc:', skills.imageSrc, 'fontAwesome:', skills.fontAwesomeClassname);
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.fontAwesomeClassname ? (
                  <i className={skills.fontAwesomeClassname}></i>
                ) : skills.imageSrc ? (
                  <img 
                    src={skills.imageSrc} 
                    alt={skills.skillName}
                    className="skill-image"
                    style={{ 
                      width: '3rem', 
                      height: '3rem',
                      objectFit: 'contain'
                    }}
                    onError={(e) => console.error('Image failed to load:', skills.imageSrc, e)}
                    onLoad={() => console.log('Image loaded successfully:', skills.imageSrc)}
                  />
                ) : (
                  <div style={{width: '3rem', height: '3rem', backgroundColor: 'red'}}>No Icon</div>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
