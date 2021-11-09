import React from "react";
import {NavLink} from "react-router-dom";

function HomeUsersModule () {

    const menuP = () => {
        return window.location="/MenuPrincipal"
    }

    const home = () => {
        return window.location="/"
    }


    return (
        <main>
            <section>
                <nav>
                    <ul>
                        <li><button className="buttonMenu" onClick={menuP}> Inicio </button></li>
                        <li><NavLink exact to="/Usuarios/NuevosUsuarios">► Nuevos usuarios</NavLink></li>
                        <li><NavLink exact to="/Usuarios/UsuariosRegistrados">► Usuarios registrados</NavLink></li>
                        <li><NavLink exact to="/Usuarios/NuevosRoles">► Nuevos roles</NavLink></li>
                        <li><NavLink exact to="/Usuarios/RolesRegistrados">► Roles registrados</NavLink></li>
                        <li><button className="buttonMenu" onClick={home}> Salida </button></li>

                    </ul>
                </nav>
            </section>
        </main>
    )
};

export {HomeUsersModule};