import { LoginScreen }                  from './../components/LoginScreen/LoginScreen';
import { Navigate }                     from "react-router-dom";
import { Routes, Route }                from "react-router-dom";


export const PublicRoutes = () => {

    return (
        <>
        <Routes>
            {/* Rutas Públicas */}
            <Route path="/login"  element= { <LoginScreen />} />
            <Route path="*"       element= { <Navigate to="/login" />} />               
        </Routes>
        </>
    )
}