import React from "react";
import statics from "../../resources/ropa.png";

function Products () {
    return (
        <main>
            <section>
                <figure>
                    <h2 className="subtitle_page"></h2>
                    <img className="contenedorImagen imagenPequeña" src={statics}/>                    
                </figure>
            </section>
        </main>
    )
};

export {Products};