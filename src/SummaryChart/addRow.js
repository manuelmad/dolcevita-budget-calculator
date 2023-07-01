
let nueva_fila;
let nueva_columna;
let nueva_columna2;
let nueva_columna3;
let nueva_columna4;
let nueva_columna5;
let nueva_columna6;

let tabla;
let cuerpo_tabla;
let filas_cuerpotabla;

let filas_tbody;

// FUNCIÓN PARA AGREGAR FILAS CON LOS PRODUCTOS SELECCIONADOS
function agregarFila()
{
	// Cuento las filas de la tabla y creo un índice
	tabla = document.getElementById("tabla_resumen");
	filas_cuerpotabla = tabla.getElementsByTagName("tr").length -2; // "-2" para ignorar las 2 filas de la cabecera

	// Accedo al body de la tabla
	cuerpo_tabla = document.getElementById("cuerpo_tabla_resumen");
	
	//Creo una nueva fila siempre en la penúltima posición
	nueva_fila = cuerpo_tabla.insertRow(filas_cuerpotabla-1);

	// Agrego las 6 columnas a la nueva fila para formar celdas
	nueva_columna = nueva_fila.insertCell(0);
	nueva_columna2 = nueva_fila.insertCell(1);
	nueva_columna3 = nueva_fila.insertCell(2);
	nueva_columna4 = nueva_fila.insertCell(3);
	nueva_columna5 = nueva_fila.insertCell(4);
	nueva_columna6 = nueva_fila.insertCell(5);

	// Muestro valores en cada celda
	//nueva_columna.innerHTML = lista_productos_texto;
    let texto = document.getElementById("input_lista").value;
	nueva_columna.innerHTML = texto;
    let cantidad = document.getElementById("cantidad").value;
	nueva_columna2.innerHTML = cantidad;
	nueva_columna3.innerHTML =  Number(document.getElementById("costo-unitario-Bs").innerText).toFixed(2);
	nueva_columna4.innerHTML =  Number(document.getElementById("costo-unitario-USD").innerText).toFixed(2);
	nueva_columna5.innerHTML = Number(document.getElementById("costo-total-Bs").innerText).toFixed(2);
	nueva_columna6.innerHTML = Number(document.getElementById("costo-total-USD").innerText).toFixed(2);
}

let celda_usd_total;
let celda_Bs_total;

// FUNCIÓN PARA SUMAR LOS COSTOS TOTALES DE LA TABLA
function sumarTotales() {

    celda_usd_total = document.getElementById("celda_suma_usd");
    celda_Bs_total = document.getElementById("celda_suma_Bs");

	filas_tbody = document.getElementById("cuerpo_tabla_resumen");
	let b = filas_tbody.getElementsByTagName("tr").length;

	let suma_usd = 0;
	let suma_Bs = 0;

	let index;
	for(index= 0; index < b-1; index++) {
		let celda_usd = filas_tbody.children[index];
		let usd_total = Number(celda_usd.lastElementChild.innerHTML);

		suma_usd = suma_usd + usd_total;
		celda_usd_total.innerHTML = suma_usd.toFixed(2);

		let celda_Bs = filas_tbody.children[index];
		let BS_total = Number(celda_Bs.children[4].innerHTML);

		suma_Bs = suma_Bs + BS_total;
		celda_Bs_total.innerHTML = suma_Bs.toFixed(2);
	}
}

export { agregarFila, sumarTotales, celda_usd_total, celda_Bs_total, cuerpo_tabla, filas_tbody };