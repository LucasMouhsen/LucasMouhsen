
import styles from "./index.module.css"
export default function Skills() {
    return (
        <div className={styles.box} id="skills">
            <div className={styles.boxAbout}>
                <h1 className={styles.name}>Skills</h1>
            </div>
            <div className={styles.boxImg}>
                <img src="/images/yo.png" width={100} alt="Lucas Diaz Mouhsen" />
                <img src="/images/yo.png" width={100} alt="Lucas Diaz Mouhsen" />
                <img src="/images/yo.png" width={100} alt="Lucas Diaz Mouhsen" />
                <img src="/images/yo.png" width={100} alt="Lucas Diaz Mouhsen" />
            </div>

        </div>
    )
}