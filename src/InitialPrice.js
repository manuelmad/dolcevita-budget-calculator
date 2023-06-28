import React from "react";
import { ListItem } from "./ListItem";

const products = [
    {
        "ID": 1,
        "Nombre": "MINI BROWNIE",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 0.5399999999999999,
        "Adicional": "false"
    },
    {
        "ID": 2,
        "Nombre": "ENRROLLADOS DE VAINILLA",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 0.81,
        "Adicional": "false"
    },
    {
        "ID": 3,
        "Nombre": "ALFAJORES",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 0.81,
        "Adicional": "false"
    },
    {
        "ID": 4,
        "Nombre": "MINI PONQUESITOS DE VAINILLA C/MERENGUE",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 0.463,
        "Adicional": "false"
    },
    {
        "ID": 5,
        "Nombre": "TRUFAS C/ CHISPAS",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 0.648,
        "Adicional": "false"
    },
    {
        "ID": 6,
        "Nombre": "MINI QUESILLOS",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 0.81,
        "Adicional": "false"
    },
    {
        "ID": 7,
        "Nombre": "PONQUESITOS DE VAINILLA",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 0.648,
        "Adicional": "false"
    },
    {
        "ID": 8,
        "Nombre": "PONQUESITOS DE VAINILLA C/ MERENGUE",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 1.0799999999999998,
        "Adicional": "false"
    },
    {
        "ID": 9,
        "Nombre": "PONQUESITOS DE VAINILLA C/ AREQUIPE",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 1.62,
        "Adicional": "false"
    },
    {
        "ID": 10,
        "Nombre": "PONQUESITOS VAINILLA C/ MERENGUE + RELLENO CHOCOLATE",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 1.62,
        "Adicional": "false"
    },
    {
        "ID": 11,
        "Nombre": "PONQUESITOS DE CHOCOLATE",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 0.81,
        "Adicional": "false"
    },
    {
        "ID": 12,
        "Nombre": "PONQUESITOS CHOCOLATE C/ MERENGUE",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 1.0799999999999998,
        "Adicional": "false"
    },
    {
        "ID": 13,
        "Nombre": "MINI PIE DE LIMON",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 1.0799999999999998,
        "Adicional": "false"
    },
    {
        "ID": 14,
        "Nombre": "MINI PIE DE PARCHITA",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 1.0799999999999998,
        "Adicional": "false"
    },
    {
        "ID": 15,
        "Nombre": "DOLCE CUP VASOS 1,5OZ",
        "Categoria": "MINI DULCES",
        "Precio Unitario Bs": 1.0799999999999998,
        "Adicional": "false"
    },
    {
        "ID": 16,
        "Nombre": "BROWNIE 9 PORCIONES",
        "Categoria": "PORCIONES",
        "Precio Unitario Bs": 3.6,
        "Adicional": "false"
    },
    {
        "ID": 17,
        "Nombre": "QUESILLO 747",
        "Categoria": "PORCIONES",
        "Precio Unitario Bs": 8.03,
        "Adicional": "false"
    },
    {
        "ID": 18,
        "Nombre": "PIE DE LIMON PORCION",
        "Categoria": "PORCIONES",
        "Precio Unitario Bs": 14.2,
        "Adicional": "false"
    },
    {
        "ID": 19,
        "Nombre": "PIE DE PARCHITA PORCION",
        "Categoria": "PORCIONES",
        "Precio Unitario Bs": 16.63,
        "Adicional": "false"
    },
    {
        "ID": 20,
        "Nombre": "TORTA 3 LECHES C/ MERENGUE",
        "Categoria": "PORCIONES",
        "Precio Unitario Bs": 5.62,
        "Adicional": "false"
    },
    {
        "ID": 21,
        "Nombre": "TORTA 3 LECHES C/ CHANTILLY",
        "Categoria": "PORCIONES",
        "Precio Unitario Bs": 7.26,
        "Adicional": "false"
    },
    {
        "ID": 22,
        "Nombre": "TORTA IMPOSIBLE",
        "Categoria": "PORCIONES",
        "Precio Unitario Bs": 7.36,
        "Adicional": "false"
    },
    {
        "ID": 23,
        "Nombre": "TORTA HUMEDA DE CHOCOLATE C/CHOC",
        "Categoria": "PORCIONES",
        "Precio Unitario Bs": 4.23,
        "Adicional": "false"
    },
    {
        "ID": 24,
        "Nombre": "RED VELVET C/ MERENGUE Y CHOC",
        "Categoria": "PORCIONES",
        "Precio Unitario Bs": 4.29,
        "Adicional": "false"
    },
    {
        "ID": 25,
        "Nombre": "TORTA DE ZANAHORIA",
        "Categoria": "PORCIONES",
        "Precio Unitario Bs": 2.96,
        "Adicional": "false"
    },
    {
        "ID": 26,
        "Nombre": "QUESILLO COMPLETO",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 25.54,
        "Adicional": "false"
    },
    {
        "ID": 27,
        "Nombre": "PIE DE LIMON",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 43.56,
        "Adicional": "false"
    },
    {
        "ID": 28,
        "Nombre": "PIE DE PARCHITA",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 45.18,
        "Adicional": "false"
    },
    {
        "ID": 29,
        "Nombre": "BROWNIE",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 37.09,
        "Adicional": "false"
    },
    {
        "ID": 30,
        "Nombre": "TORTA 3 LECHES +",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 65.09,
        "Adicional": "false"
    },
    {
        "ID": 31,
        "Nombre": "TORTA 3 LECHES 1KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 59.16,
        "Adicional": "false"
    },
    {
        "ID": 32,
        "Nombre": "TORTA 3 LECHES 1/2KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 32.19,
        "Adicional": "false"
    },
    {
        "ID": 33,
        "Nombre": "TORTA 3 LECHES 1/4KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 17.39,
        "Adicional": "false"
    },
    {
        "ID": 34,
        "Nombre": "TORTA IMPOSIBLE 1/2KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 44.5,
        "Adicional": "false"
    },
    {
        "ID": 35,
        "Nombre": "TORTA IMPOSIBLE 1/4KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 24.08,
        "Adicional": "false"
    },
    {
        "ID": 36,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1/2 (CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 50.01,
        "Adicional": "true"
    },
    {
        "ID": 37,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1/2 (RELLENA CHOCOLATE Y CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 56.74,
        "Adicional": "true"
    },
    {
        "ID": 38,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1/2 (CUBIERTA CHOCOLATE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 64.33,
        "Adicional": "true"
    },
    {
        "ID": 39,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1/2 RELLENA Y CUBIERTA CON CHOCOLATE",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 71.46,
        "Adicional": "true"
    },
    {
        "ID": 40,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1/4 (CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 29.06,
        "Adicional": "false"
    },
    {
        "ID": 41,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1/4 (CUBIERTA MERENGUE Y RELLENA CHOCOLATE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 32.63,
        "Adicional": "false"
    },
    {
        "ID": 42,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1/4 (CUBIERTA CHOCOLATE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 38.08,
        "Adicional": "false"
    },
    {
        "ID": 43,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1/4 RELLENA Y CUBIERTA CHOCOLATE",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 41.65,
        "Adicional": "false"
    },
    {
        "ID": 44,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1/8 (RELLENA Y CUBIERTA CHOCOLATE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 21.56,
        "Adicional": "false"
    },
    {
        "ID": 45,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1/8 (CUBIERTA CHOCOLATE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 19.78,
        "Adicional": "false"
    },
    {
        "ID": 46,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1/8 (CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 17.03,
        "Adicional": "false"
    },
    {
        "ID": 47,
        "Nombre": "TORTA HUMEDA CHOCOLATE 1KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 131.6,
        "Adicional": "false"
    },
    {
        "ID": 48,
        "Nombre": "TORTA PIÑA C/ CEREZAS 1/4 KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 34.9,
        "Adicional": "false"
    },
    {
        "ID": 49,
        "Nombre": "TORTA PIÑA C/ CEREZAS 1/2 KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 55.96,
        "Adicional": "false"
    },
    {
        "ID": 50,
        "Nombre": "RED VELVET 1/4 KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 32.28,
        "Adicional": "false"
    },
    {
        "ID": 51,
        "Nombre": "RED VELVET 1/2 KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 54.26,
        "Adicional": "true"
    },
    {
        "ID": 52,
        "Nombre": "TORTA ZANAHORIA 1/4 KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 27.93,
        "Adicional": "false"
    },
    {
        "ID": 53,
        "Nombre": "TORTA ZANAHORIA 1/2 KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 47.65,
        "Adicional": "true"
    },
    {
        "ID": 54,
        "Nombre": "TORTA ZANAHORIA 1 KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 84.8,
        "Adicional": "false"
    },
    {
        "ID": 55,
        "Nombre": "ROSCA DE ZANAHORIA 1/4KG",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 17.1,
        "Adicional": "false"
    },
    {
        "ID": 56,
        "Nombre": "ROSCA DE VAINILLA",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 11.68,
        "Adicional": "false"
    },
    {
        "ID": 57,
        "Nombre": "ROSCA MARMOLEADO",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 12.77,
        "Adicional": "false"
    },
    {
        "ID": 58,
        "Nombre": "ROSCA LIMON",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 19.99,
        "Adicional": "false"
    },
    {
        "ID": 59,
        "Nombre": "ROSCA CHOCOLATE HUMEDA",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 17.66,
        "Adicional": "false"
    },
    {
        "ID": 60,
        "Nombre": "TORTA VAINILLA 1/4 KG (CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 22.19,
        "Adicional": "false"
    },
    {
        "ID": 61,
        "Nombre": "TORTA VAINILLA 1/4 KG (CUBIERTA CHOCOLATE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 29.74,
        "Adicional": "false"
    },
    {
        "ID": 62,
        "Nombre": "TORTA VAINILLA 1/4 KG (RELLENA CHOCO Y CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 25.75,
        "Adicional": "false"
    },
    {
        "ID": 63,
        "Nombre": "TORTA VAINILLA 1/4 KG (RELLENA Y CUBIERTA CHOCO-AREQUIPE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 33.3,
        "Adicional": "false"
    },
    {
        "ID": 64,
        "Nombre": "TORTA VAINILLA 1 KG (CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 74.81,
        "Adicional": "false"
    },
    {
        "ID": 65,
        "Nombre": "TORTA MARMOLEADA 1/4 KG (CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 23.32,
        "Adicional": "false"
    },
    {
        "ID": 66,
        "Nombre": "TORTA MARMOLEADA 1/4 KG (CUBIERTA CHOCOLATE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 30.87,
        "Adicional": "false"
    },
    {
        "ID": 67,
        "Nombre": "TORTA MARMOLEADA 1/4 KG (RELLENA CHOCO Y CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 26.88,
        "Adicional": "false"
    },
    {
        "ID": 68,
        "Nombre": "TORTA MARMOLEADA 1/4 KG (RELLENA Y CUBIERTA CHOCO-AREQUIPE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 34.44,
        "Adicional": "false"
    },
    {
        "ID": 69,
        "Nombre": "TORTA FRIA DURAZNO 1/4 KG (22 CM)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 44.4,
        "Adicional": "true"
    },
    {
        "ID": 70,
        "Nombre": "TORTA FRIA DURAZNO 1/2 KG (26 CM)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 79.73,
        "Adicional": "true"
    },
    {
        "ID": 71,
        "Nombre": "TORTA FRIA C/ GANACHE DE CHOCOLATE 1/4 KG (18 CM)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 74.49,
        "Adicional": "true"
    },
    {
        "ID": 72,
        "Nombre": "TORTA FRIA C/ GANACHE DE CHOCOLATE 1/2 KG (22 CM)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 119.05,
        "Adicional": "true"
    },
    {
        "ID": 73,
        "Nombre": "TORTA VAINILLA 3/8 KG (RELLENA CHOCO Y CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 35.15,
        "Adicional": "true"
    },
    {
        "ID": 74,
        "Nombre": "TORTA VAINILLA 1/2 KG (CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 37.99,
        "Adicional": "true"
    },
    {
        "ID": 75,
        "Nombre": "TORTA VAINILLA 1/2 KG (CUBIERTA CHOCOLATE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 50.44,
        "Adicional": "true"
    },
    {
        "ID": 76,
        "Nombre": "TORTA VAINILLA 1/2 KG (RELLENA CHOCO Y CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 45.12,
        "Adicional": "true"
    },
    {
        "ID": 77,
        "Nombre": "TORTA VAINILLA 1/2 KG (RELLENA Y CUBIERTA CHOCOLATE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 57.57,
        "Adicional": "true"
    },
    {
        "ID": 78,
        "Nombre": "TORTA MARMOLEADO 1/2 KG (CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 40.83,
        "Adicional": "true"
    },
    {
        "ID": 79,
        "Nombre": "TORTA MARMOLEADO 1/2 KG (CUBIERTA CHOCOLATE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 53.27,
        "Adicional": "true"
    },
    {
        "ID": 80,
        "Nombre": "TORTA MARMOLEADO 1/2 KG (RELLENA CHOCO Y CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 47.95,
        "Adicional": "true"
    },
    {
        "ID": 81,
        "Nombre": "TORTA MARMOLEADO 1/2 KG (RELLENA Y CUBIERTA CHOCOLATE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 60.4,
        "Adicional": "true"
    },
    {
        "ID": 82,
        "Nombre": "TORTA DE LIMON 1/4 KG (RELLENA CREMA Y CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 31.39,
        "Adicional": "false"
    },
    {
        "ID": 83,
        "Nombre": "TORTA DE LIMON 1/2 KG (RELLENA CREMA Y CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 49.61,
        "Adicional": "true"
    },
    {
        "ID": 84,
        "Nombre": "TORTA DE LIMON 1 KG (RELLENA CREMA Y CUBIERTA MERENGUE)",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 90.43,
        "Adicional": "false"
    },
    {
        "ID": 85,
        "Nombre": "TORTA NEGRA 1/4 COMPLETA",
        "Categoria": "POSTRES COMPLETOS",
        "Precio Unitario Bs": 47.88,
        "Adicional": "false"
    },
    {
        "ID": 86,
        "Nombre": "TEQUEÑOS 5*1,5 FRITOS",
        "Categoria": "PASAPALOS",
        "Precio Unitario Bs": 0.78,
        "Adicional": "false"
    },
    {
        "ID": 87,
        "Nombre": "TEQUEÑOS 7*1,5 FRITOS",
        "Categoria": "PASAPALOS",
        "Precio Unitario Bs": 1.3,
        "Adicional": "false"
    },
    {
        "ID": 88,
        "Nombre": "SERPENTINA",
        "Categoria": "PASAPALOS",
        "Precio Unitario Bs": 0.4,
        "Adicional": "false"
    }
];

function InitialPrice() {
    return(
        <section className="calculos">
        <h2>Producto Base</h2>
        <div>
            <p>Tasa de cambio (Bs. / USD):<br/>
                <input type="number" id="tasa-cambio" />
            </p>
            <p>Elija el producto</p>
            <input list="productos" id="input_lista" />
            <datalist id="productos">
                {products.map(item => (
                        <ListItem key={item["Nombre"]} value={item["Nombre"]} text={item["Nombre"]}></ListItem>
                    ))
                }
            </datalist>
            <p>Costo Unitario:<br />
                <span id="costo-unitario-Bs">0.00</span> Bs. / Unidad.<br />
                <span id="costo-unitario-USD">0.00</span> USD / Unidad.
            </p>
            <p>Cantidad:<br />
                <input type="number" id="cantidad" />
            </p>
            <p>Porcentaje de Ganancia (%):<br />
                <input type="number" id="porcentaje-ganancia" />
            </p>
            <p className="parrafo-boton">
                <button id="calcular-precio-total">Calcular Precio Inicial</button>
            </p>
            <p>Costo Total:<br />
                <span id="costo-total-Bs">0.00</span> Bs.<br />
                <span id="costo-total-USD">0.00</span> USD.
            </p>
        </div>
    </section>
    );
}

export { InitialPrice, products };