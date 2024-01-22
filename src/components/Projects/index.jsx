/* import styles from "./index.module.css"

export default function Proyects() {
    return (
        <div className={styles.boxProyects} id="projects" >
            <div className={styles.boxAbout}>
                <h1 className={styles.name}>PROYECTOS</h1>
            </div>
            <div className={styles.boxImg}>
                <div>
                    <img src="images/" width={100} alt="React Drinks" />
                    <p>React Drinks</p>
                </div>
                <div>
                    <img src="images/" width={100} alt="ALi Music" />
                    <p>ALi Music</p>
                </div>
                <div>
                    <img src="images/" width={100} alt="Registo HC" />
                    <p>Registo HC</p>
                </div>
            </div>
        </div>
    )
} */

import styles from "./index.module.css";
import projects from "../../data/projects.json";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">

            <div className={styles.boxAbout}>
                <h1 className={styles.name}>PROYECTOS</h1>
            </div>
            <div className={styles.projects}>
                {projects && projects.map(({ id, title, imageSrc, description, skills, source }) => {
                    return (
                        <div key={id} className={styles.containerProject}>
                            <img
                                src={imageSrc}
                                alt={`Image of ${title}`}
                                className={styles.image}
                            />
                            <div className={styles.content}>
                                <h3 className={styles.title}>{title}</h3>
                                <p className={styles.description}>{description}</p>
                                <ul className={styles.skills}>
                                    {skills.map((skill, id) => (
                                        <li key={id} className={styles.skill}>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.links}>
                                    <a href={source} className={styles.link}>
                                        Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

