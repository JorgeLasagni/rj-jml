import "./Navbar.scss"
import { Link }       from "react-router-dom"
import logods         from "./logods.jpg"
import { CartWidget } from "../CartWidget/CartWidget"
import Alert          from 'react-bootstrap/Alert'
export const Navbar = () => {
  return (
    <header className="header">
        <div className="header_container justify-content-center">
          <nav className="navbar">
            <Link to="/"            className="header_logo"> <img src={logods} alt="DoggyStyle"/> </Link>
            <Link to="/Productos"               className="navbar_link"> Inicio         </Link>
            <Link to="/Productos/Accesorio"     className="navbar_link"> Accesorios     </Link>
            <Link to="/Productos/DoggyStyle"    className="navbar_link"> DoggyStyle     </Link>
            <Link to="/Productos/Ropa"          className="navbar_link"> Ropa           </Link>
            <Link to="/Productos/Personalizado" className="navbar_link"> Personalizado  </Link>
            <Link to="/Carrito"                 className="navbar_link"> <CartWidget /> </Link>
          </nav>
        </div>
        <hr />
        <div className="header_container justify-content-center">
          <nav className="navbar">
            <Link to="/Noticias" className="navbar_link"> Noticias </Link>
            <Link to="/Contacto" className="navbar_link"> Contacto </Link>
            <Link to="/Nosotros" className="navbar_link"> 
              <Alert key="primary" variant="primary">
                <b>DOGGY STYLE</b> quiere ser el Sistema Integral para el bienestar de tu MASCOTA. (ClickMe, please!)
              </Alert>  
            </Link>
          </nav>            
        </div>
    </header>   
  )
}



