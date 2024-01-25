
import styles from "./index.module.css"
export default function Skills() {
    return (
        <section className={styles.boxSkills} id="skills">
            <div className={styles.boxAbout}>
                <h1 className={styles.name}>Skills</h1>
            </div>
            <div className={styles.boxImg}>
                <div>
                    <img src="images/react.svg" width={100} alt="React" />
                    <p>REACT</p>
                </div>
                <div>
                    <img src="images/node-js.svg" width={100} alt="Node JS" />
                    <p>NODE JS</p>
                </div>  
                
                <div>
                    <img src="images/python.svg" width={100} alt="Python" />
                    <p>PYTHON</p>
                </div>
                
                <div>
                    <img src="images/mysql.svg" width={100} alt="My Sql" />
                    <p>MY SQL</p>
                </div>
                
                <div>
                    <img src="images/git.svg" width={100} alt="Git" />
                    <p>GIT</p>
                </div>
                
                <div>
                    <img src="images/powerbi.png" width={100} alt="Power Bi" />
                    <p>POWER BI</p>
                </div>
            </div>

        </section>
    )
}