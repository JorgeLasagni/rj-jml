import "./Navbar.scss"
import Alert                          from 'react-bootstrap/Alert'
import { Link }                       from "react-router-dom"
import { LoginContext }               from "../../context/LoginContext"
import logods                         from "./logods.jpg"
import { CartWidget }                 from "../CartWidget/CartWidget"
import { useContext, useMemo }        from "react"
import React, { useState, useEffect } from 'react';

export const Navbar = () => {

  const { user, logout} = useContext(LoginContext)
  const fechaIngreso    = useMemo(() => new Date().toLocaleString(), [])
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const intervalID = setInterval(() => {
        setTime(new Date())
    }, 1000)
    return () => {
        clearInterval(intervalID)
    }
  }, []) 

  return (
    <header className="header">
        <div className="header_container justify-content-center">
        
          <nav className="navbar">
            <Link to="/"            
                  className="header_logo"> 
                  <img src={logods} alt="DoggyStyle"/> 
            </Link>
            <Link to="/Productos"               className="navbar_link"> Inicio         </Link>
            <Link to="/Productos/Accesorio"     className="navbar_link"> Accesorios     </Link>
            <Link to="/Productos/DoggyStyle"    className="navbar_link"> DoggyStyle     </Link>
            <Link to="/Productos/Ropa"          className="navbar_link"> Ropa           </Link>
            <Link to="/Productos/Personalizado" className="navbar_link"> Personalizado  </Link>
            <CartWidget />
          </nav>      
        </div>
        <div className="login-state container">
          <p>Bienvenido: {user.email} (Ingreso: {fechaIngreso}) <b>{time.toLocaleTimeString()}</b></p>
          <button className="btn btn-danger sm" onClick={logout}>Logout</button>
        </div>
        <hr />
        <div className="header_container justify-content-center">
          <nav className="navbar">
            <Link to="/Noticias"  className="navbar_link"> Noticias del U$S </Link>
            <Link to="/Ordenes"   className="navbar_link"> Órdenes </Link>
            <Link to="/Nosotros"  className="navbar_link"> 
              <Alert key="primary" variant="primary">
                <b>DOGGY STYLE</b> quiere ser el Sistema Integral para el bienestar de tu MASCOTA. (ClickMe, please!)
              </Alert>  
            </Link>
          </nav>
        </div>
    </header>   
  )
}