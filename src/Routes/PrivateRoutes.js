import { Cart }                         from "./../components/Cart/Cart";
import { Contacto }                     from "./../components/Contacto/Contacto";
import { Checkout }                     from "./../components/Checkout/Checkout";
import { ItemDetailContainer }          from "./../components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer }            from "./../components/ItemListContainer/ItemListContainer";
import { Navbar }                       from "./../components/Navbar/Navbar";
import { Navigate }                     from "react-router-dom";
import { Nosotros }                     from "./../components/Nosotros/Nosotros";
import { Noticias }                     from "./../components/Noticias/Noticias";
import { Routes, Route }                from "react-router-dom";


export const PrivateRoutes = () => {

    return (
        <>
        {/* Rutas Privadas */}
        <Navbar />
        <Routes>
            <Route path="/"                       element= { <ItemListContainer   /> } />
            <Route path="/productos/:categoriaId" element= { <ItemListContainer   /> } />
            <Route path="/detail/:itemId"         element= { <ItemDetailContainer /> } />
            <Route path="/cart"                   element= { <Cart                /> } />
            <Route path="/checkout"               element= { <Checkout            /> } />
            <Route path="/Nosotros"               element= { <Nosotros            /> } />
            <Route path="/Noticias"               element= { <Noticias            /> } />
            <Route path="/Contacto"               element= { <Contacto            /> } />
            <Route path="*"                       element= { <Navigate to="/"     /> } /> 
        </Routes>
    </>
    )
}