import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const PrivateRoutes = ({children}) => {
    const {isAuthenticated}= useAuth0();
    return isAuthenticated ?(
        <div>
            {children} 
        </div>
    ):
    <div>
        <h1>No tiene permisos</h1>
    </div>
}

export default PrivateRoutes
