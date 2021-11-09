import React from "react";
import {NavLink} from "react-router-dom";

function HomeVentasModule () {

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
                        <li><NavLink exact to="/Ventas">► Nueva Venta</NavLink></li>
                        <li><NavLink exact to="/Ventas/Cuenta">► Ventas registradas</NavLink></li>
                        <li><button className="buttonMenu" onClick={home}> Salida </button></li>
                    </ul>
                </nav>
            </section>
        </main>
    )
};

export {HomeVentasModule};