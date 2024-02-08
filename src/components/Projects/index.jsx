import styles from "./index.module.css"
import projects from "../../data/projects.json";


export const Projects = () => {
    return (
        <section className={styles.projects} id="projects">
            {projects && projects.map(({ id, title, imageSrc, description, skills, source }) => {
                return (
                    <div className={styles.projetsCard} key={id}
                        style={{ backgroundImage: `url('${imageSrc}')` }}>
                        <div className={styles.content}>
                        <h2 className={styles.title}>{title}</h2>
                            <p className={styles.copy}>
                                {description}
                            </p>
                            <p className={styles.copy}>
                                {skills.map(
                                    (skill, index) =>{
                                        return (
                                            <img key={index} className={styles.projetsImage} src={`images/${skill}`} alt={skill} />
                                        )
                                    }
                                )}
                            </p>

                            <button onClick={() => {window.open(source, '_blank')}}  className="btn btn-dark">Ver GitHub</button>
                        </div>
                    </div>
                )
            })}
        </section>
    );
};