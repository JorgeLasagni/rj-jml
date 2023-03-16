import { Navbar }               from "./components/Navbar/Navbar";
import { ItemListContainer }    from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer }  from "./components/ItemDetailContainer/ItemDetailContainer";
import { Nosotros }             from "./components/Nosotros/Nosotros";
import { Noticias }             from "./components/Noticias/Noticias";
import { Contacto }             from "./components/Contacto/Contacto";
import { Carrito }              from "./components/Carrito/Carrito";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyContext }            from "./components/Context/MyContext";

function App() {

  const profesor  = "JML"
  const tutor     = "Es otra variable"
  
  return (
  
    <MyContext.Provider value = {{
      profesor,
      tutor
      }} >
  
      <BrowserRouter>
          <Navbar   />
          <Routes>
            <Route path="/"                       element= { <ItemListContainer   /> } />
            <Route path="/productos"              element= { <ItemListContainer   /> } />
            <Route path="/productos/:categoriaId" element= { <ItemListContainer   /> } />
            <Route path="/detail/:itemId"         element= { <ItemDetailContainer /> } />
            <Route path="/Nosotros"               element= { <Nosotros            /> } />
            <Route path="/Noticias"               element= { <Noticias            /> } />
            <Route path="/Contacto"               element= { <Contacto            /> } />
            <Route path="/Carrito"                element= { <Carrito             /> } />
            <Route path="*"                       element= { <Navigate to="/"     /> } />
          </Routes>
      </BrowserRouter>
    
    </MyContext.Provider>
  );
}
export default App;