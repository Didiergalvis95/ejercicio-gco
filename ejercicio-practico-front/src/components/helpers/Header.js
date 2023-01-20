import { Link } from "react-router-dom";
import gco from "../../imagenes/gco.png";
import "../../assets/styles/header.css";

const Header = () => {
    return(
        <>
        <header className="header">
        <section className="logo">
            <img src={gco} alt="Logo de la marca"/>
        </section>
        <nav>
           <ul className="nav-links">
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/informe">INFORMES</Link>
                </li>
           </ul>            
        </nav>
        <a className="btn" href="#"><button>Contact</button></a>
        </header>
        </>
    )
}

export default Header;