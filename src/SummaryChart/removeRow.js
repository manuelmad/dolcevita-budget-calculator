import { sumarTotales, celda_usd_total, celda_Bs_total, cuerpo_tabla, filas_tbody  } from "./addRow";

// Accedo al botón de eliminar fila y le asigno el evento de activar la función
// const eliminar_fila = document.getElementById("eliminar_fila");
// eliminar_fila.addEventListener("click", eliminarFila);
let penultima_fila;
let ultima_fila_presupuesto;
let filas_tbody_prespuesto;
// let cuerpo_tabla;
// let filas_tbody;

function eliminarFila()
{
	filas_tbody = document.getElementById("cuerpo_tabla_resumen");
	let a = filas_tbody.getElementsByTagName("tr").length;
	console.log("Entrada " + a);

	// Condicional para que el botón eliminar no funcione cuando solo queda la fila del total
	if(a > 1) {
		penultima_fila = cuerpo_tabla.children[a-2];
		cuerpo_tabla.removeChild(penultima_fila);
		a = a - 1;
	}
	console.log("Salida " + a);

	sumarTotales();

	// Condicional para que al quedar solamente la fila de totales, la celda de suma total sea 0.00
	if(a == 1) {
		celda_usd_total.innerHTML = "0.00";
		celda_Bs_total.innerHTML = "0.00";
	}

	// CÓDIGO PARA ELIMINAR LAS FILAS DE LA TABLA DE PRESUPUESTO
	filas_tbody_prespuesto = document.getElementById("cuerpo_tabla_prespuesto");
	let b = filas_tbody_prespuesto.getElementsByTagName("tr").length;
	ultima_fila_presupuesto = filas_tbody_prespuesto.lastElementChild;
	if(b > 0) {
		filas_tbody_prespuesto.removeChild(ultima_fila_presupuesto);
	}
}

export { eliminarFila };