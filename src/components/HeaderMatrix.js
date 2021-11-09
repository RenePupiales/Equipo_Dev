import React from "react";
import "../style.css";
import logo from "../resources/logo.png";

function HeaderMatrix () {
    return (
        <header>
            <figure>
              <img className="logo" src={ logo } alt="icon"/>
            </figure>
            <h1>Interfaz de Usuarios </h1>
        </header>
    );  
}

export { HeaderMatrix };