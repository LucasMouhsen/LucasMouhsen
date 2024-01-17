import { createContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "use-local-storage";

const DarkContext = createContext();

const DarkProvider = ({ children }) => {
  /* Buscamos si hay una preferecia de usuario sino inicializamos en false */
  const [isBackgroundDark, setIsBackgroundDark] = useLocalStorage('isLight', false)
  /* para cambiar el estado de isBackgroundDark una vez utilizado */
  const toggleBg = () => {
    console.log(isBackgroundDark);
    setIsBackgroundDark(!isBackgroundDark);
  };
  /* Datos que vamos a retornar */
  const contextValues = {
    isBackgroundDark,
    toggleBg
  };

  return (
    <DarkContext.Provider value={contextValues}>
      {children}
    </DarkContext.Provider>
  );
};

DarkProvider.propTypes = {
  children: PropTypes.node.isRequired, /* Datos obligatorios */
};

export { DarkContext, DarkProvider };