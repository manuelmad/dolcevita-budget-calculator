import React from "react";
import './AditionalPrice.css';


function AdditionalPrice({
    cantidadAdicional1,
    setCantidadAdicional1,
    usdAdicional1,
    setUsdAdicional1,
    displayAdicional1,
    setDisplayAdicional1,
    cantidadAdicional2,
    setCantidadAdicional2,
    usdAdicional2,
    setUsdAdicional2,
    displayAdicional2,
    setDisplayAdicional2,
    cantidadAdicional3,
    setCantidadAdicional3,
    usdAdicional3,
    setUsdAdicional3,
    displayAdicional3,
    setDisplayAdicional3,
    cantidadAdicional4,
    setCantidadAdicional4,
    usdAdicional4,
    setUsdAdicional4,
    displayAdicional4,
    setDisplayAdicional4,
    cantidadAdicional5,
    setCantidadAdicional5,
    usdAdicional5,
    setUsdAdicional5,
    displayAdicional5,
    setDisplayAdicional5,
    adicionalTotalBs,
    setAdicionalTotalBs,
    adicionalTotalUSD,
    setAdicionalTotalUSD,
    sumaInicialBs,
    sumaInicialUSD,
    precioFinalBs,
    setPrecioFinalBs,
    precioFinalUSD,
    setPrecioFinalUSD,
    tasaCambio
}) {
    // Función onChange para actualizar la cantidadAdicional1
    const updateAditionalQt1 = (event)=> {
        setCantidadAdicional1(event.target.value);
    }
    // Función onChange para actualizar la usdAdicional1
    const updateAditionalUSD1 = (event)=> {
        setUsdAdicional1(event.target.value);
    }
    // Función para mostrar/ocultar el contenedor de costo adicional 1
    const showAditional1 = ()=> {
        if(displayAdicional1.display === "none") {
            setDisplayAdicional1({display:"grid"});
        } else if(displayAdicional1.display === "grid") {
            setDisplayAdicional1({display:"none"});
        }
    }

    // Función onChange para actualizar la cantidadAdicional2
    const updateAditionalQt2 = (event)=> {
        setCantidadAdicional2(event.target.value);
    }
    // Función onChange para actualizar la usdAdicional2
    const updateAditionalUSD2 = (event)=> {
        setUsdAdicional2(event.target.value);
    }
    // Función para mostrar/ocultar el contenedor de costo adicional 2
    const showAditional2 = ()=> {
        if(displayAdicional2.display === "none") {
            setDisplayAdicional2({display:"grid"});
        } else if(displayAdicional2.display === "grid") {
            setDisplayAdicional2({display:"none"});
        }
    }

    // Función onChange para actualizar la cantidadAdicional3
    const updateAditionalQt3 = (event)=> {
        setCantidadAdicional3(event.target.value);
    }
    // Función onChange para actualizar la usdAdicional3
    const updateAditionalUSD3 = (event)=> {
        setUsdAdicional3(event.target.value);
    }
    // Función para mostrar/ocultar el contenedor de costo adicional 3
    const showAditional3 = ()=> {
        if(displayAdicional3.display === "none") {
            setDisplayAdicional3({display:"grid"});
        } else if(displayAdicional3.display === "grid") {
            setDisplayAdicional3({display:"none"});
        }
    }

    // Función onChange para actualizar la cantidadAdicional4
    const updateAditionalQt4 = (event)=> {
        setCantidadAdicional4(event.target.value);
    }
    // Función onChange para actualizar la usdAdicional4
    const updateAditionalUSD4 = (event)=> {
        setUsdAdicional4(event.target.value);
    }
    // Función para mostrar/ocultar el contenedor de costo adicional 4
    const showAditional4 = ()=> {
        if(displayAdicional4.display === "none") {
            setDisplayAdicional4({display:"grid"});
        } else if(displayAdicional4.display === "grid") {
            setDisplayAdicional4({display:"none"});
        }
    }

    // Función onChange para actualizar la cantidadAdicional4
    const updateAditionalQt5 = (event)=> {
        setCantidadAdicional5(event.target.value);
    }
    // Función onChange para actualizar la usdAdicional4
    const updateAditionalUSD5 = (event)=> {
        setUsdAdicional5(event.target.value);
    }
    // Función para mostrar/ocultar el contenedor de costo adicional 5
    const showAditional5 = ()=> {
        if(displayAdicional5.display === "none") {
            setDisplayAdicional5({display:"grid"});
        } else if(displayAdicional5.display === "grid") {
            setDisplayAdicional5({display:"none"});
        }
    }

    // Función para calcular el total adicional
    const calculateTotalAditional = ()=> {
        let adicional_total_usd =  cantidadAdicional1*usdAdicional1 + cantidadAdicional2*usdAdicional2 + cantidadAdicional3*usdAdicional3 + cantidadAdicional4*usdAdicional4 + cantidadAdicional5*usdAdicional5;
        setAdicionalTotalUSD(adicional_total_usd);

        let adicional_total_bs = adicional_total_usd*tasaCambio;
        setAdicionalTotalBs(adicional_total_bs);
    }

    // Función par calcular el total final
    const calculateFinalPrice = ()=> {
        let precio_final_usd = sumaInicialUSD + adicionalTotalUSD;
        setPrecioFinalUSD(precio_final_usd);

        let precio_final_bs = sumaInicialBs + adicionalTotalBs;
        setPrecioFinalBs(precio_final_bs);
    }
    
    // Efecto para que ejecute las 2 funciones anteriores al final de la renderización de la app
    React.useEffect(()=>{
        calculateTotalAditional();
        calculateFinalPrice();
    } );


    return(
        <section className="productos-adicionales">
			<h2>
				Producto Adicional
				<span>
					<button id="boton_desplegar_1" className="boton-desplegar" onClick={showAditional1}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
						  </svg>
					</button>
				</span>
			</h2>
			<div style={displayAdicional1} className="producto-adicional-container" id="producto_adicional_container_1">
				<p>
					<span>Descripción:</span>
					<textarea name="textarea" className="area-texto" cols="33" rows="2" wrap="hard" id="descripcion_1"></textarea>
				</p>
				<p>
					<span>Cantidad:</span>
					<input type="number" id="cantidad_adicional_1" onChange={updateAditionalQt1} />
				</p>
				<p>
					<span>Precio unitario (USD/U.):</span>
					<input type="number" id="precio_adicional_1" onChange={updateAditionalUSD1} />
				</p>
			</div>
			<h2>
				Producto Adicional
				<span>
					<button id="boton_desplegar_2" className="boton-desplegar" onClick={showAditional2}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
						  </svg>
					</button>
				</span>
			</h2>
			<div style={displayAdicional2}className="producto-adicional-container"id="producto_adicional_container_2">
				<p>
					<span>Descripción:</span>
					<textarea name="textarea" className="area-texto" cols="33" rows="2" wrap="hard" id="descripcion_2"></textarea>
				</p>
				<p>
					<span>Cantidad:</span>
					<input type="number" id="cantidad_adicional_2" onChange={updateAditionalQt2} />
				</p>
				<p>
					<span>Precio unitario (USD/U.):</span>
					<input type="number" id="precio_adicional_2" onChange={updateAditionalUSD2}/>
				</p>
			</div>
			<h2>
				Producto Adicional
				<span>
					<button id="boton_desplegar_3" className="boton-desplegar" onClick={showAditional3}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
						  </svg>
					</button>
				</span>
			</h2>
			<div className="producto-adicional-container" style={displayAdicional3} id="producto_adicional_container_3">
				<p>
					<span>Descripción:</span>
					<textarea name="textarea" className="area-texto" rows="2" id="descripcion_3"></textarea>
				</p>
				<p>
					<span>Cantidad:</span>
					<input type="number" id="cantidad_adicional_3" onChange={updateAditionalQt3} />
				</p>
				<p>
					<span>Precio unitario (USD/U.):</span>
					<input type="number" id="precio_adicional_3" onChange={updateAditionalUSD3} />
				</p>
			</div>
			<h2>
				Producto Adicional
				<span>
					<button id="boton_desplegar_4" className="boton-desplegar" onClick={showAditional4}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
						  </svg>
					</button>
				</span>
			</h2>
			<div className="producto-adicional-container" style={displayAdicional4} id="producto_adicional_container_4">
				<p>
					<span>Descripción:</span>
					<textarea name="textarea" className="area-texto" rows="2" id="descripcion_4"></textarea>
				</p>
				<p>
					<span>Cantidad:</span>
					<input type="number" id="cantidad_adicional_4" onChange={updateAditionalQt4} />
				</p>
				<p>
					<span>Precio unitario (USD/U.):</span>
					<input type="number" id="precio_adicional_4" onChange={updateAditionalUSD4} />
				</p>
			</div>
			<h2>
				Producto Adicional
				<span>
					<button id="boton_desplegar_5" className="boton-desplegar" onClick={showAditional5}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
						  </svg>
					</button>
				</span>
			</h2>
			<div className="producto-adicional-container" style={displayAdicional5} id="producto_adicional_container_5">
				<p>
					<span>Descripción:</span>
					<textarea name="textarea" className="area-texto" rows="2" id="descripcion_5"></textarea>
				</p>
				<p>
					<span>Cantidad:</span>
					<input type="number" id="cantidad_adicional_5" onChange={updateAditionalQt5} />
				</p>
				<p>
					<span>Precio unitario (USD/U.):</span>
					<input type="number" id="precio_adicional_5" onChange={updateAditionalUSD5} />
				</p>
			</div>
			<div className="calculos-finales">
				<p>Costo Adicional:<br/>
					<span id="costo-adicional-Bs">{adicionalTotalBs.toFixed(2)}</span>Bs. adicionales<br/>
					<span id="costo-adicional-USD">{adicionalTotalUSD.toFixed(2)}</span>USD adicionales.
				</p>
				<h2>Precio Final</h2>
				<p>
					<span id="costo-final-Bs">{precioFinalBs}</span> Bs.<br/>
					<span id="costo-final-USD">{precioFinalUSD}</span> USD.
				</p>
			</div>
		</section>
    );
}

export { AdditionalPrice };