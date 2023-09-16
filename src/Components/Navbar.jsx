import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  // Consumir el contexto y obtener el estado y la función de despacho

  const { theme, setTheme } = useContext(ContextGlobal);

  const themeHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <nav className={theme? theme : ""}>
      <div className="icon">
        <img src={'../../public/DH.ico'} alt="icon" />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/favs">Favoritos</Link>
        <Link to="/contacto">Contacto</Link>
        <button onClick={themeHandler}>
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
    </button>
       
      </div>
    </nav>
  );
};

export default Navbar;
