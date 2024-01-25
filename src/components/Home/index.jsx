import styles from "./index.module.css";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    return (
        <section className={styles.box} id="home">
            <div className={styles.boxHome}>
                <div className={styles.nameHome}>
                    <h1 className={styles.name}>
                        <span>Lucas Diaz Mouhsen</span>
                    </h1>
                    <p className={styles.description}>Desarrollador {' '}
                        <Typewriter
                            words={['FrontEnd.', 'BackEnd.', 'Full Stack.']}
                            loop={100}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={50}
                            className={styles.writer}
                        />
                    </p>
                </div>
                <div className={styles.boxImg}>
                    <img className={styles.img} src="images\linkedin.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Home;
