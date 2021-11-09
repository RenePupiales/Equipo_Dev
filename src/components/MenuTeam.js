import React from "react";
import {NavLink} from "react-router-dom";
import "../style.css";
import salesIcon from "../resources/salesIcon_OK.png";
import productIcon from "../resources/productIcon_OK.png";
import usersIcon from "../resources/usersIcon_OK.png";

function MenuTeam () {

    return (
        <main>
            <section>
                <h1>Seleccione el módulo al cuál desea acceder.</h1>
                <nav>
                    <ul className="ulHome">
                            <li>
                                <NavLink className="ulMain" exact to="/Ventas">
                                    Ventas
                                    <img src={salesIcon} alt=""/>
                                </NavLink>
                            </li>                    
                            <li>
                                <NavLink className="ulMain" exact to="/Productos">
                                    Productos
                                    <img src={productIcon} alt="image"/>
                                </NavLink>                     
                            </li>
                            <li>
                                <NavLink className="ulMain" exact to="/Usuarios">
                                    Usuarios
                                    <img src={usersIcon} alt="image"/>
                                </NavLink>
                            </li>
                    </ul>
                </nav>
            </section>
        </main>
    );  
}

export { MenuTeam };