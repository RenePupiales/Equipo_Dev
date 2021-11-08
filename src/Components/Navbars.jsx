import React, { useState, useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Navbars = () => {
    const { loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently } = useAuth0();
    const [textButton, setTextButton] = useState('Entrar')
    const [Name, setName] = useState('')
    useEffect(() => {
        if (isAuthenticated) {
            setTextButton('Salir')
            setName(user.name)
        } else {
            setTextButton('Entrar')
            setName('')

        }

    }, [isAuthenticated])

    useEffect(() => {
        const getToken = async () => {
            const accessToken = await getAccessTokenSilently();
            localStorage.setItem('token', accessToken)
        }
        if (isAuthenticated) {
            getToken();
        }

    }, [isAuthenticated, getAccessTokenSilently])


    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Navbar.Brand ><img className="Logo" src="https://w1.pngwing.com/pngs/270/571/png-transparent-circle-design-enel-logo-endesa-enel-distribuzione-spa-energy-logos-diens-thumbnail.png" alt="Logo" /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link ><Link to='/features' >Features</Link></Nav.Link>
                    {
                        isAuthenticated ?
                            <NavDropdown title={Name} id="navbarScrollingDropdown">
                                <NavDropdown.Item ><Link to='/dash' >Dashboard</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to='/ventas' >Ventas</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to='/productos' >Productos</Link></NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item >
                                    <Link to='/roles' >Roles</Link>
                                </NavDropdown.Item>
                            </NavDropdown> :
                            null
                    }

                </Nav>
            </Container>
            {
                isAuthenticated ?
                    <button
                        onClick={() => logout({ returnTo: window.location.origin })}
                        className="btn btn-primary"> {textButton} </button> :
                    <button
                        onClick={() => loginWithRedirect()}
                        className="btn btn-primary"> {textButton} </button>
            }
        </Navbar>
    )
}

export default Navbars
