
import styles from "./index.module.css"
export default function About() {
    return (
        <div className={styles.box} id="about">
            <div className={styles.boxAbout}>
                <h1 className={styles.name}>Lucas Diaz Mouhsen</h1>
                <p className={styles.About}>Analista de Datos y Procesos en la Municipalidad de San Miguel, con 26 años de edad y una formación autodidacta en programación y complementada con un curso intensivo de desarrollador full stack en Digital House.</p>
            </div>
            <div className={styles.boxImg}>
                <img src="/images/yo.png" width={100} alt="Lucas Diaz Mouhsen" />
            </div>

        </div>
    )
}