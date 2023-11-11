
import styles from "./index.module.css"
export default function Home() {
    return (
        <div className={styles.box} id="home">
            <div className={styles.boxHome}>
                <div className={styles.nameHome}>
                    <h1 className={styles.name}>Lucas Diaz Mouhsen</h1>
                    <p className={styles.Home}>Desarrollador.</p>
                </div>
                <div className={styles.boxImg}>
                </div>
            </div>
        </div>
    )
}