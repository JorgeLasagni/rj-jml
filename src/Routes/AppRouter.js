import { BrowserRouter }    from "react-router-dom";
import { LoginContext }     from './../context/LoginContext';
import { useContext }       from "react";
import { PrivateRoutes }    from "./PrivateRoutes"
import { PublicRoutes }     from "./PublicRoutes"

export const AppRouter = () => {

    const { user } = useContext(LoginContext)

    return (
        <BrowserRouter>
        {
            user.logged 
            ?   <PrivateRoutes />
            :  
                <PublicRoutes />
            }
        </BrowserRouter>
    )
}