import { Navbar }               from "./components/Navbar/Navbar";
import { ItemListContainer }    from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer }  from "./components/ItemDetailContainer/ItemDetailContainer";
import { Nosotros }             from "./components/Nosotros/Nosotros";
import { Noticias }             from "./components/Noticias/Noticias";
import { Contacto }             from "./components/Contacto/Contacto";
import { Carrito }              from "./components/Carrito/Carrito";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
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
  );
}
export default App;