import React from "react";
import './SummaryChart.css';
// import { eliminarFila } from "./removeRow";


function SummaryChart({
	itemSelected,
	cantidad,
	precioUnitarioBs,
	precioUnitarioUSD,
	precioTotalBs,
	precioTotalUSD,
	cantidadProductos,
	setCantidadProductos,
	sumaInicialBs,
	setSumaInicialBs,
	sumaInicialUSD,
	setSumaInicialUSD
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
		nueva_columna3.innerHTML = precioUnitarioBs.toFixed(2);
		nueva_columna4.innerHTML = precioUnitarioUSD.toFixed(2);
		nueva_columna5.innerHTML = precioTotalBs;
		nueva_columna6.innerHTML = precioTotalUSD;
	};

	// Función para que renderice una nueva fila cada vez que el valor de cantidadProductos cambie
	React.useEffect(()=> {
		addRow();
	},[cantidadProductos]);

	const removeRow = () => {
		let filas_tbody = document.getElementById("cuerpo_tabla_resumen");
		let a = filas_tbody.getElementsByTagName("tr").length;
		console.log(a);

		// Condicional para que no elimine filas cuando solo quede la del total
		if(a <= 1) {
			return;
		}

		// Restar el último precio al total
		// Actualizar el total de todos los productos en Bs
		let newInicialBs = sumaInicialBs-precioTotalBs;
		setSumaInicialBs(newInicialBs);

		// Actualizar el total de todos los productos en BUSD
		let newInicialUSD = sumaInicialUSD-precioTotalUSD;
		setSumaInicialUSD(newInicialUSD);

		// Eliminar penúltima fila
		let penultima_fila = filas_tbody.children[a-2];
		console.log(penultima_fila);
		filas_tbody.removeChild(penultima_fila);
	};

    return(
        <section>
			<h2>Tabla Resumen</h2>
			<p className="parrafo-boton-eliminar-fila">
				<button id="eliminar_fila" onClick={removeRow}>Eliminar fila</button>
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
						<td id="celda_suma_Bs">{sumaInicialBs.toFixed(2)}</td>
						<td id="celda_suma_usd">{sumaInicialUSD.toFixed(2)}</td>
					</tr>
				</tbody>
			</table>
		</section>
    );
}

export { SummaryChart };