import React from "react";
import statics from "../../resources/pinterest-statistics-02.png";

function GraphicHomeUsers () {
    return (
        <main>
            <section>
                <figure>
                    <h2 className="subtitle_page">Actividad mensual de los usuarios</h2>
                    <img src={statics}/>
                    <span>Fuente: https://blog.hootsuite.com/</span>
                </figure>
            </section>
        </main>
    )
};

export {GraphicHomeUsers};