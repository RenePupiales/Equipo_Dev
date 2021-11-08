import React from "react"
import PrivateRoutes from "../Components/PrivateRoutes"
const PrivateLayout = ({children}) =>{
    return(
        <PrivateRoutes>
            <div>
                PrivateRoute
                {children}
            </div>
        </PrivateRoutes>
                    
    )
}

export default PrivateLayout