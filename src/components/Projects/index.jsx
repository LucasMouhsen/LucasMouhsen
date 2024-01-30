import "./index.css";
import projects from "../../data/projects.json";


export const Projects = () => {
    return (
        <section className="page-content" id="projects">
            {projects && projects.map(({ id, title, imageSrc, description, skills, source }) => {
                return (
                    <div className="card" key={id}
                        style={{ backgroundImage: `url('${imageSrc}')` }}>
                        <div className="content">
                            <h2 className="title">{title}</h2>
                            <p className="copy">
                                {description}
                            </p>
                            <p className="copy">
                                {skills.map(
                                    skill =>{
                                        return skill+' '
                                    }
                                )}
                            </p>

                            <a href={source} className="btn">View Trips</a>
                        </div>
                    </div>
                )
            })}
        </section>
    );
};