
function scrolling(event, isScrolling, setIsScrolling){
    event.preventDefault();

    if (!isScrolling) {
        setIsScrolling(true);
        // Determinar la dirección del desplazamiento y el valor del desplazamiento
        const delta = Math.sign(event.deltaY); // Dirección del desplazamiento
        const scrollvh = window.innerHeight * delta; // 100vh
        // Hacer scroll
        window.scrollBy({
            top: scrollvh,
        });

        // Desactivar el indicador de desplazamiento después de un tiempo
        setTimeout(() => {
            setIsScrolling(false);
        }, 1000);
    }
   }

export default scrolling