import React from "react";
import './SummaryChart.css';

function SummaryChart() {
    return(
        <section>
			<h2>Tabla Resumen</h2>
			<p className="parrafo-boton-eliminar-fila">
				<button id="eliminar_fila">Eliminar fila</button>
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