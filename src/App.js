import { Navbar }           from "./components/Navbar/Navbar";
import {ItemListContainer}  from "./components/ItemListContainer/ItemListContainer";
import { CartWidget }       from "./components/CartWidget/CartWidget";
import { Contador }         from "./components/Contador/Contador";
import {ItemCount }         from "./components/ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button }           from 'react-bootstrap';
import { useState } from "react";
import chapita              from "./components/ItemListContainer/chapita.jpg"
function App() {

  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }

  const [showSumador, setShowSumador] = useState(false)
  const handleShowSumador = () => {
    setShowSumador(!showSumador)
  }

  return (
    <div>

      <Navbar />
      {/* ------------------------------------------------------------- */}

      <ItemListContainer />
      {/* ------------------------------------------------------------- */}  
      
      <Button onClick={handleShow} className="btn btn-danger"> {show ? "Ocultar " : "Mostrar "}   Contadores 
      </Button>
      <br />
      { show ? <Contador /> : null }
      <br />
      {/* ------------------------------------------------------------- */}

      <Button onClick={handleShowSumador} className="btn btn-secundary"> {showSumador ? "Ocultar " : "Mostrar "} 
      Sumador 
      </Button>
      <br />
      { showSumador ? <ItemCount stock={10} articulo="Chapita de Identificación Canina" imagen={chapita} /> : null}
      <br />
      {/* ------------------------------------------------------------- */}

      <div className="container">
        <Button variant="danger" size="sm"> <CartWidget /> </Button>
      </div>
      {/* ------------------------------------------------------------- */}

    </div>
  );
}
export default App;