import "./Navbar.scss"
import logods from "./logods.jpg"
import Alert from 'react-bootstrap/Alert';
export const Navbar = () => {
  return (
    <header className="header">
        <div className="header_container">
          <nav className="navbar">
            <a href="#"       className="header_logo" > <img src={logods} alt="logo DoggyStyle"/> </a>
            <a href="##"      className="navbar_link"> Tienda</a>
            <a href="###"     className="navbar_link"> Nosotros </a>
            <a href="####"    className="navbar_link"> Noticias </a>
            <a href="#####"   className="navbar_link"> Dudas    </a>
            <a href="######"  className="navbar_link"> 
              <Alert key="primary" variant="primary">
                <b>DOGGY STYLE</b> quiere ser el Sistema Integral para el bienestar de tu MASCOTA <b>Contacto</b>.
              </Alert>  
            </a>
          </nav>
          
            
        </div>

    </header>
    
  )
}



