import styles from "./index.module.css"
import { useEffect, useState } from 'react';
import { useDark } from '../../hooks/useDark';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  const { toggleBg } = useDark();
  
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
    <header className={styles.header} data-scrolling={!scrolling ? "no-scroll" : "scroll"}>
      <ul className={styles.headerList}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
        <div className={styles.toggleContainer}>
          {/* Input de tipo checkbox para cambiar el tema, con un manejador de clic en toggleBg */}
          <input
            type="checkbox"
            id="check"
            className={styles.toggle}
            onClick={toggleBg}
          />
          <label htmlFor="check"></label>
        </div>
    </header>
  );
}
