import { useEffect, useState } from "react";
import styles from "./index.module.css"

export default function Skills() {
    const skillsImages = ['react.svg', 'node-js.svg', 'python.svg', 'mysql.svg', 'git.svg', 'powerbi.png', 'sass.svg', 'api.png','javascript.svg', 'css.svg', 'html.svg', 'github.svg', 'sql-server.svg', 'postman.svg', 'typescript.svg', 'bootstrap.svg'];
    const [currentSkills, setCurrentSkills] = useState(skillsImages);
    const [opacity, setOpacity] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(false);
            setTimeout(() => {
                const selectedSkills = skillsImages.sort(() => 0.5 - Math.random());
                setCurrentSkills(selectedSkills);
                setOpacity(true);
            }, 500);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.boxSkills} id="skills">
            <div className={styles.boxAbout}>
                <h1 className={styles.name}>HABILIDADES</h1>
            </div>
            <div className={styles.boxImg}>
                {currentSkills.map((image, index) => (
                    <div className={styles.colmena}
                        key={index}>
                        <img
                            src={`images/${image}`}
                            alt={`Skill ${index}`}
                            className={`${styles.skillImage} ${opacity ? styles.show : ''}`}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.listSkills}>
                {skillsImages.map((image, index) =>{
                    return (
                        <img key={index} className={styles.image} src={`images/${image}`} alt=""/>
                    )
                })}
            </div>
        </section>
    )
}
