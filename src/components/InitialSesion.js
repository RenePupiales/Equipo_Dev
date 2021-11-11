import React, {Fragment} from "react";
import { GoogleLogin } from 'react-google-login';
import { Redirect, useHistory } from "react-router-dom";

function InitialSesion () {

    const responsableGoogle = (respuesta) => {
        console.log(respuesta);
        return <Redirect to="/MenuPrincipal"/>
    }

    const responsableFailGoogle = () => {
        alert("Conexión fallida");
    }

    const urlHome = "http://localhost:3000/MenuPrincipal";

    return (
        <Fragment>
            <main> 
                <br/><br/>
                <GoogleLogin
                    clientId="226758660992-r71q0orgat1gprk427sq8s9585bjgtv6.apps.googleusercontent.com"
                    buttonText="Iniciar sesión con Google Account"
                    onSucess={responsableGoogle}
                    onFailure={responsableFailGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    uxMode="redirect"
                    redirectUri="http://localhost:3000/MenuPrincipal"
                    className="g-signin"
                />
            </main>

            {/* <main>
                <section>
                    <h2 className="subtitle_page">Inicio de sesión</h2>
                    <p>Ingrese sus datos para iniciar sesión en el módulo de gestión de usuarios:</p>

                    <form action="/MenuPrincipal" onsubmit="return()">
                        <label for="usuarioLabel">
                            <span>Usuario:</span>
                            <input type="text" id ="usuario" placeholder="Escribe tu nombre de usuario" autoComplete="username" required/>
                        </label>
                        <label for="passwordLabel">
                            <span>Contraseña:</span>
                            <input type="password" id ="password" placeholder="Escribe tu password" autoComplete="current-password" required/>
                        </label>
                            <input class="submitButton" type="submit" value="Ingresar"/>
                    </form>
                </section>
            </main> */}

        </Fragment>

    )
};

export {InitialSesion};