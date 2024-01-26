import styles from "./style.module.css";
import { useEffect, useState } from "react";


const Skilllist = ({skillsData}) => {
    const [skills, setSkills] = useState(skillsData);


    useEffect(() => {
      if (skillsData) {
        (async () => {
          const obj = [];
    
          for (const skill of skillsData) {
            try {
              const svg = await import(`../../assets/svg/${skill.icon}`);
              obj.push({icon: svg.default, title: skill.title, description: skill.description});
            } catch (error) {
              console.error(`Error loading SVG ${skill.icon}:`, error);
            }
          }
          console.log(obj)
          setSkills(obj);
        })()
      }
    }, [skillsData]);

    if (skills == null) return null
    
    return (
      <div className={styles.grid__container}>
        {skills.map(({ title, description, icon }, i) => (
          <div className={styles.grid__item} key={i} >
            <img src={icon} className={styles.skill__icon} alt="" />
            <div className={styles.skill__title} >{title}</div>
            <div className={styles.skill__description}>{description}</div>
          </div>
        ))}
      </div>
    )
}

export default Skilllist