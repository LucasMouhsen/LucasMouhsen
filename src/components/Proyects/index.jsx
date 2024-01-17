import styles from "./index.module.css"

export default function Proyects() {
    return (
        <div className={styles.boxProyects} id="projects" >
            <div className={styles.boxAbout}>
                <h1 className={styles.name}>PROYECTOS</h1>
            </div>
            <div className={styles.boxImg}>
                <div>
                    <img src="/public/images/" width={100} alt="React Drinks" />
                    <p>React Drinks</p>
                </div>
                <div>
                    <img src="/public/images/" width={100} alt="ALi Music" />
                    <p>ALi Music</p>
                </div>
                <div>
                    <img src="/public/images/" width={100} alt="Registo HC" />
                    <p>Registo HC</p>
                </div>
            </div>
        </div>
    )
}