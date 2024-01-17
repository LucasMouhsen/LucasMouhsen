
import styles from "./index.module.css"
export default function About() {
    return (
        <div className={styles.box} id="about">
            <div className={styles.boxAbout}>
                <div className={styles.nameAbout}>
                    <h1 className={styles.name}>Acerca de mi</h1>
                    <p className={styles.about}>Info personal</p>
                </div>
                <div className={styles.boxImg}>
                    <img className={styles.img} src="/images/yo.png" alt="Lucas Diaz Mouhsen" />
                    <img className={styles.img} src="/images/yo2.png" alt="Lucas Diaz Mouhsen" />
                    <img className={styles.img} src="/images/yo3.png" alt="Lucas Diaz Mouhsen" />
                    <img className={styles.img} src="/images/yo4.png" alt="Lucas Diaz Mouhsen" />
                </div>

            </div>
        </div>
    )
}