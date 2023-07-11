//import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { InitialPrice } from './InitialPrice/InitialPrice';
import { SummaryChart } from './SummaryChart/SummaryChart';

function App() {
  const [itemSelected, setItemSelected] = React.useState('');
  const [product, setProduct] = React.useState('');
  const [tasaCambio, setTasaCambio] = React.useState(0);
  const [precioUnitarioBs, setPrecioUnitarioBs] = React.useState(0);
  const [precioUnitarioUSD, setPrecioUnitarioUSD] = React.useState(0);
  const [cantidad, setCantidad] = React.useState(0);
  const [porcentajeGanancia, setPorcentajeGanancia] = React.useState(0);
  const [precioTotalBs, setPrecioTotalBs] = React.useState(0);
  const [precioTotalUSD, setPrecioTotalUSD] = React.useState(0);

  const [cantidadProductos, setCantidadProductos] = React.useState(0);
  const [sumaInicialBs, setSumaInicialBs] = React.useState(0);
  const [sumaInicialUSD, setSumaInicialUSD] = React.useState(0);

  return (
    <React.Fragment>
      <h1>Calculadora de Presupuestos</h1>
      <InitialPrice 
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
        product={product}
        setProduct={setProduct}
        tasaCambio={tasaCambio}
        setTasaCambio={setTasaCambio}
        precioUnitarioBs={precioUnitarioBs}
        setPrecioUnitarioBs={setPrecioUnitarioBs}
        precioUnitarioUSD={precioUnitarioUSD}
        setPrecioUnitarioUSD={setPrecioUnitarioUSD}
        cantidad={cantidad}
        setCantidad={setCantidad}
        porcentajeGanancia={porcentajeGanancia}
        setPorcentajeGanancia={setPorcentajeGanancia}
        precioTotalBs={precioTotalBs}
        setPrecioTotalBs={setPrecioTotalBs}
        precioTotalUSD={precioTotalUSD}
        setPrecioTotalUSD={setPrecioTotalUSD}
        cantidadProductos={cantidadProductos}
        setCantidadProductos={setCantidadProductos}
        sumaInicialBs={sumaInicialBs}
        setSumaInicialBs={setSumaInicialBs}
        sumaInicialUSD={sumaInicialUSD}
        setSumaInicialUSD={setSumaInicialUSD}  />
      <SummaryChart
        itemSelected={itemSelected}
        cantidad={cantidad}
        precioUnitarioBs={precioUnitarioBs}
        precioUnitarioUSD={precioUnitarioUSD}
        precioTotalBs={precioTotalBs}
        precioTotalUSD={precioTotalUSD}
        cantidadProductos={cantidadProductos}
        setCantidadProductos={setCantidadProductos}
        sumaInicialBs={sumaInicialBs}
        setSumaInicialBs={setSumaInicialBs}
        sumaInicialUSD={sumaInicialUSD}
        setSumaInicialUSD={setSumaInicialUSD} />
      {/*<AdditionalPrice />*/}
      {/*<Budget />*/}
      {/*<ClearAll />*/}
    </React.Fragment>
  );
}

export default App;