import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from "@fortawesome/free-regular-svg-icons"
import './index.css'

export default function Header() {
    return (
        <div className='header'>
            <ul className='headerList'>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#" className='mode'>
                <FontAwesomeIcon icon={faSun} />
            </a>
        </div>
    );
}
