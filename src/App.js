import  'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Cart }                 from "./components/Cart/Cart";
import { CartProvider }         from "./context/CartContext"
import { Contacto }             from "./components/Contacto/Contacto";
import { ItemDetailContainer }  from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer }    from "./components/ItemListContainer/ItemListContainer";
import { Navbar }               from "./components/Navbar/Navbar";
import { Nosotros }             from "./components/Nosotros/Nosotros";
import { Noticias }             from "./components/Noticias/Noticias";

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"                       element= { <ItemListContainer   /> } />
          <Route path="/productos/:categoriaId" element= { <ItemListContainer   /> } />
          <Route path="/detail/:itemId"         element= { <ItemDetailContainer /> } />
          <Route path="/cart"                   element= { <Cart                /> } />
          <Route path="/Nosotros"               element= { <Nosotros            /> } />
          <Route path="/Noticias"               element= { <Noticias            /> } />
          <Route path="/Contacto"               element= { <Contacto            /> } />
          <Route path="*"                       element= { <Navigate to="/"     /> } />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
export default App;