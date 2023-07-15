import React from "react";
import './ClearAll.css';

function ClearAll() {
    const refreshPage = () => {
        window.location.reload();
    }
    return(
        <section className="limpiar-campos">
        <p className="parrafo-boton-3">
            <button id="actualizar_pagina" onClick={refreshPage}>Limpiar todos los campos</button>
        </p>
        </section>
    );
}

export { ClearAll };