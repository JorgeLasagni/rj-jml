import "./Navbar.scss"
import { Link }       from "react-router-dom"
import logods         from "./logods.jpg"
import { CartWidget } from "../CartWidget/CartWidget"

export const Navbar = () => {
  return (
    <header className="header">
        <div className="header_container">
          <nav className="navbar">
            <Link to="/"            className="header_logo"> <img src={logods} alt="DoggyStyle"/> </Link>
            <Link to="/Productos"               className="navbar_link"> Inicio         </Link>
            <Link to="/Productos/Accesorio"     className="navbar_link"> Accesorios     </Link>
            <Link to="/Productos/DoggyStyle"    className="navbar_link"> DoggyStyle     </Link>
            <Link to="/Productos/Ropa"          className="navbar_link"> Ropa           </Link>
            <Link to="/Productos/Personalizado" className="navbar_link"> Personalizado  </Link>
            <Link to="/Nosotros" className="navbar_link"> Nosotros </Link>
            <Link to="/Noticias" className="navbar_link"> Noticias </Link>
            <Link to="/Contacto" className="navbar_link"> Contacto </Link>
            {/* <a href="######"  className="navbar_link"> 
              <Alert key="primary" variant="primary">
                <b>DOGGY STYLE</b> quiere ser el Sistema Integral para el bienestar de tu MASCOTA <b>Contacto</b>.
              </Alert>  
            </a> */}
          </nav>

          <CartWidget />
          
            
        </div>

    </header>
    
  )
}



