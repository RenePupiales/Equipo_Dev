import  React from 'react'
import Navbars from '../Components/Navbars'

const PublicLayout = ({children}) =>{
    return(
        <div>
            <Navbars />
            PublicLayout
            {children}
        </div>
    )
}

export default PublicLayout