import { useEffect, useState } from "react";
import "./index.css";

export default function Skills() {
    const skillsImages = ['react.svg', 'node-js.svg', 'python.svg', 'mysql.svg', 'git.svg', 'powerbi.png'];
    const [currentSkills, setCurrentSkills] = useState([]);
    const [opacity, setOpacity] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(false);
            setTimeout(() => {
                const selectedSkills = skillsImages.sort(() => 0.5 - Math.random());
                setCurrentSkills(selectedSkills);
                setOpacity(true);
            }, 500); 
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='boxSkills' id="skills">
            <div className='boxAbout'>
                <h1 className='name'>HABILIDADES</h1>
            </div>
            <div className="boxImg">
                {currentSkills.map((image, index) => (
                    <img
                        key={index}
                        src={`images/${image}`}
                        alt={`Skill ${index}`}
                        className={`skill-image ${opacity ? 'show' : ''}`}
                    />
                ))}
            </div>
        </section>
    )
}
