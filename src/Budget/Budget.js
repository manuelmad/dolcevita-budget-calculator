import React from "react";
import './Budget.css';

function Budget({
    cantidadProductos,
    itemSelected,
    cantidad,
    displayComment,
    setDisplayComment
}) {
    const addRow = ()=> {
		// Condicional para que no agregue filas al abrir la aplicación
		if(cantidadProductos === 0) {
			return;
		}

		// Cuento las filas de la tabla y creo un índice
		let tabla = document.getElementById("tabla_presupuesto");
		let filas_cuerpotabla = tabla.getElementsByTagName("tr").length - 1; // "-1" para ignorar la fila de la cabecera

		// Accedo al body de la tabla
		let cuerpo_tabla = document.getElementById("cuerpo_tabla_prespuesto");
		
		//Creo una nueva fila siempre en la penúltima posición
		let nueva_fila = cuerpo_tabla.insertRow(filas_cuerpotabla);

		// Agrego las 6 columnas a la nueva fila para formar celdas
		let nueva_columna = nueva_fila.insertCell(0);
		let nueva_columna2 = nueva_fila.insertCell(1);
	
		// Muestro valores en cada celda
		nueva_columna.innerHTML = itemSelected;
		nueva_columna2.innerHTML = cantidad;
	};

    // Función para mostrar/ocultar el contenedor de comentario
    const showComment = ()=> {
        if(displayComment.display === "none") {
            setDisplayComment({display:"grid"});
        } else if(displayComment.display === "grid") {
            setDisplayComment({display:"none"});
        }
    }

	// Función para que renderice una nueva fila cada vez que el valor de cantidadProductos cambie
	React.useEffect(()=> {
		addRow();
	},[cantidadProductos]);

    return (
        <section className="presupuesto">
			<div class="logo-presupuesto"></div>
			<h2>Presupuesto</h2>
			<div className="container-presupuesto">
				<table className="tabla-prespuesto" id="tabla_presupuesto">
					<thead>
						<tr className="fila-cabecera-prespuesto">
							<th>Producto</th>
							<th>Cant.</th>
						</tr>
					</thead>
					<tbody id="cuerpo_tabla_prespuesto">

					</tbody>
				</table>
				<p className="parrafo-boton-comentario">
					<button id="desplegar_comentario" onClick={showComment}></button>
				</p>
				<p className="parrafo-comentario" id="parrafo_comentario" style={displayComment}>Comentario:<br/>
					<textarea name="textarea" className="area-texto-comentario" rows="5" id="comentario"></textarea>
				</p>
				<p className="parrafo-precio-manual">
					Precio Total (USD):<br/>
					<input type="number" id="precio_final_manual"/>
				</p>
				<p className="parrafo-fecha">
					Fecha de entrega:<br/>
					<input type="number" id="dia"/>/<input type="number" id="mes"/>/<input type="number" id="ano"/>
				</p>
				<p className="parrafo-hora">
					Hora de entrega:<br/>
					<input type="number" id="hora"/>:<input type="number" id="minuto"/>
					<select name="" id="am_pm">
						<option value=""></option>
						<option value="">a.m.</option>
						<option value="">p.m.</option>
					</select>
				</p>
			</div>
		</section>
    );
}

export { Budget };