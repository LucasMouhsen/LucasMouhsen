import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from "@fortawesome/free-regular-svg-icons"
import './index.css'
import { useEffect, useState } from 'react';

export default function Header() {
    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Limpia el event listener cuando el componente se desmonta
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return (
        <div className={`header ${scrolling ? 'headerWhite' : 'headerTransparent'}`}>
            <ul className='headerList'>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <a href="#" className='mode'>
                <FontAwesomeIcon icon={faSun} />
            </a>
        </div>
    );
}
