import { LoginScreen }                  from './../components/LoginScreen/LoginScreen';
import { RegisterScreen }               from './../components/RegisterScreen/RegisterScreen';
import { Navigate }                     from "react-router-dom";
import { Routes, Route }                from "react-router-dom";



export const PublicRoutes = () => {

    return (
        <>
        <Routes>
            {/* Rutas Públicas */}
            <Route path="/login"    element= { <LoginScreen />} />
            <Route path="/register" element= { <RegisterScreen />} />
            <Route path="*"         element= { <Navigate to="/login" />} />               
        </Routes>
        </>
    )
}