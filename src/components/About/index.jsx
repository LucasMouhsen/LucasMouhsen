
import styles from "./index.module.css"
export default function About() {
    return (
        <section className={styles.box} id="about">
            <div className={styles.boxAbout}>
                <div className={styles.boxImg}>
                    <img className={styles.img} src="images/yo.png" alt="Lucas Diaz Mouhsen" />
                    <img className={styles.img} src="images/yo2.png" alt="Lucas Diaz Mouhsen" />
                    <img className={styles.img} src="images/yo3.png" alt="Lucas Diaz Mouhsen" />
                    <img className={styles.img} src="images/yo4.png" alt="Lucas Diaz Mouhsen" />
                </div>
                <div className={styles.nameAbout}>
                    <h1 className={styles.name}>Acerca de mi</h1>
                    <p className={styles.about}>
                        Soy un desarrollador <span>Full Stack</span>, apasionado por crear soluciones innovadoras, me especializo en el desarrollo de aplicaciones web robustas y escalables. 
                    </p>
                    
                    <p className={styles.about}>
                    Con habilidades sólidas en el ciclo completo de desarrollo,colaboro eficazmente en equipos ágiles utilizando la metodología <span>SCRUM</span>.
                    </p>
                    <p className={styles.about}> Mi enfoque está en la mejora continua y la eficiencia, y seguir impulsando la innovación en nuestros procesos. Mi aspiración es seguir desarrollándome en el campo de la programación y la optimización de procesos en el futuro.
                </p>
            </div>

        </div>
        </section >
    )
}