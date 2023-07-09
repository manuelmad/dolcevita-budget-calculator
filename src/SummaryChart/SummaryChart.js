import React from "react";
import './SummaryChart.css';
import { eliminarFila } from "./removeRow";

// let cantidadProductos = 0;

function SummaryChart({
	itemSelected,
	cantidad,
	precioUnitarioBs,
	precioUnitarioUSD,
	precioTotalBs,
	precioTotalUSD,
	cantidadProductos
}) {
	const addRow = ()=> {
		// Condicional para que no agregue filas al abrir la aplicación
		if(cantidadProductos === 0) {
			return;
		}

		// Cuento las filas de la tabla y creo un índice
		let tabla = document.getElementById("tabla_resumen");
		let filas_cuerpotabla = tabla.getElementsByTagName("tr").length -2; // "-2" para ignorar las 2 filas de la cabecera

		// Accedo al body de la tabla
		let cuerpo_tabla = document.getElementById("cuerpo_tabla_resumen");
		
		//Creo una nueva fila siempre en la penúltima posición
		let nueva_fila = cuerpo_tabla.insertRow(filas_cuerpotabla-1);

		// Agrego las 6 columnas a la nueva fila para formar celdas
		let nueva_columna = nueva_fila.insertCell(0);
		let nueva_columna2 = nueva_fila.insertCell(1);
		let nueva_columna3 = nueva_fila.insertCell(2);
		let nueva_columna4 = nueva_fila.insertCell(3);
		let nueva_columna5 = nueva_fila.insertCell(4);
		let nueva_columna6 = nueva_fila.insertCell(5);

		// Muestro valores en cada celda
		// let texto = document.getElementById("input_lista").value;
		nueva_columna.innerHTML = itemSelected;
		// let cantidad = document.getElementById("cantidad").value;
		nueva_columna2.innerHTML = cantidad;
		nueva_columna3.innerHTML =  precioUnitarioBs.toFixed(2);
		nueva_columna4.innerHTML =  precioUnitarioUSD.toFixed(2);
		nueva_columna5.innerHTML = precioTotalBs.toFixed(2);
		nueva_columna6.innerHTML = precioTotalUSD.toFixed(2);
	}

	// Función para que renderice una nueva fila cada vez que el valor de cantidadProductos cambie
	React.useEffect(()=> {
		addRow();
	},[cantidadProductos]);

    return(
        <section>
			<h2>Tabla Resumen</h2>
			<p className="parrafo-boton-eliminar-fila">
				<button id="eliminar_fila" onClick={eliminarFila}>Eliminar fila</button>
			</p>
			<table id="tabla_resumen">
				<thead id="cabecera_tabla_resumen">
					<tr className="primera-fila-cabecera">
						<th></th>
						<th></th>
						<th colSpan="2">Precio Unit.</th>
						<th colSpan="2">Precio Total</th>
					</tr>
					<tr className="fila-referencia">
						<th>Producto</th>
						<th>Cant.</th>
						<th>Bs.</th>
						<th>USD</th>
						<th>Bs.</th>
						<th>USD</th>
					</tr>
				</thead>
				<tbody id="cuerpo_tabla_resumen">
					<tr className="fila-total">
						<td colSpan="4">Total</td>
						<td id="celda_suma_Bs">0.00</td>
						<td id="celda_suma_usd">0.00</td>
					</tr>
				</tbody>
			</table>
		</section>
    );
}

export { SummaryChart };