import "./index.css";
import projects from "../../data/projects.json";


export const Projects = () => {
    const slider = document.querySelector(".slider");

    function activate(e) {
        const items = document.querySelectorAll(".item");
        e.target.matches(".next") && slider.append(items[0]);
        e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
    }

    document.addEventListener("click", activate, false);

    function activateNext() {
        const items = document.querySelectorAll(".item");
        slider.append(items[0]);
    }

    /* function activateAuto() {
        setInterval(() => {
            activateNext();
        }, 14000);
    }

    activateAuto(); */
    return (
        <section className="box-proyects" id="projects">

            <div className="">
                <h1 className="name">PROYECTOS</h1>
            </div>
            <ul className="slider">
                {projects.map(({ id, title, imageSrc, description, /* skills, source */ }) => {
                    return (

                        <li key={id}
                            className="item"
                            style={{ backgroundImage: `url('${imageSrc}')` }}

                        >
                            <div className="content">
                                <h2 className="title">{title}</h2>
                                <p className="description">
                                    {description}
                                </p>
                                <button >Read More</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <nav className="nav">
                <button className="btn prev" onClick={(e) => console.log(e.target.matches(".prev"))}></button>
                <button className="btn next" onClick={(e) => activate(e)}></button>
            </nav>
        </section>
    );
};

/* 

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

*/