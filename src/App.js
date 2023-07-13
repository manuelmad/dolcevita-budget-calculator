//import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { InitialPrice } from './InitialPrice/InitialPrice';
import { SummaryChart } from './SummaryChart/SummaryChart';
import { AdditionalPrice } from './AditionalPrice/AditionalPrice';

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

  const [cantidadAdicional1, setCantidadAdicional1] = React.useState(0);
  const [usdAdicional1, setUsdAdicional1] = React.useState(0);
  const [displayAdicional1, setDisplayAdicional1] = React.useState({display:"none"});
  const [cantidadAdicional2, setCantidadAdicional2] = React.useState(0);
  const [usdAdicional2, setUsdAdicional2] = React.useState(0);
  const [displayAdicional2, setDisplayAdicional2] = React.useState({display:"none"});
  const [cantidadAdicional3, setCantidadAdicional3] = React.useState(0);
  const [usdAdicional3, setUsdAdicional3] = React.useState(0);
  const [displayAdicional3, setDisplayAdicional3] = React.useState({display:"none"});
  const [cantidadAdicional4, setCantidadAdicional4] = React.useState(0);
  const [usdAdicional4, setUsdAdicional4] = React.useState(0);
  const [displayAdicional4, setDisplayAdicional4] = React.useState({display:"none"});
  const [cantidadAdicional5, setCantidadAdicional5] = React.useState(0);
  const [usdAdicional5, setUsdAdicional5] = React.useState(0);
  const [displayAdicional5, setDisplayAdicional5] = React.useState({display:"none"});
  const [adicionalTotalBs, setAdicionalTotalBs] = React.useState(0);
  const [adicionalTotalUSD, setAdicionalTotalUSD] = React.useState(0);
  const [precioFinalBs, setPrecioFinalBs] = React.useState(0);
  const [precioFinalUSD, setPrecioFinalUSD] = React.useState(0);

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
        setSumaInicialBs={setSumaInicialBs}
        setSumaInicialUSD={setSumaInicialUSD}  />
      <SummaryChart
        itemSelected={itemSelected}
        cantidad={cantidad}
        precioUnitarioBs={precioUnitarioBs}
        precioUnitarioUSD={precioUnitarioUSD}
        precioTotalBs={precioTotalBs}
        precioTotalUSD={precioTotalUSD}
        cantidadProductos={cantidadProductos}
        sumaInicialBs={sumaInicialBs}
        setSumaInicialBs={setSumaInicialBs}
        sumaInicialUSD={sumaInicialUSD}
        setSumaInicialUSD={setSumaInicialUSD} />
      {<AdditionalPrice
        cantidadAdicional1={cantidadAdicional1}
        setCantidadAdicional1={setCantidadAdicional1}
        usdAdicional1={usdAdicional1}
        setUsdAdicional1={setUsdAdicional1}
        displayAdicional1={displayAdicional1}
        setDisplayAdicional1={setDisplayAdicional1}
        cantidadAdicional2={cantidadAdicional2}
        setCantidadAdicional2={setCantidadAdicional2}
        usdAdicional2={usdAdicional2}
        setUsdAdicional2={setUsdAdicional2}
        displayAdicional2={displayAdicional2}
        setDisplayAdicional2={setDisplayAdicional2}
        cantidadAdicional3={cantidadAdicional3}
        setCantidadAdicional3={setCantidadAdicional3}
        usdAdicional3={usdAdicional3}
        setUsdAdicional3={setUsdAdicional3}
        displayAdicional3={displayAdicional3}
        setDisplayAdicional3={setDisplayAdicional3}
        cantidadAdicional4={cantidadAdicional4}
        setCantidadAdicional4={setCantidadAdicional4}
        usdAdicional4={usdAdicional4}
        setUsdAdicional4={setUsdAdicional4}
        displayAdicional4={displayAdicional4}
        setDisplayAdicional4={setDisplayAdicional4}
        cantidadAdicional5={cantidadAdicional5}
        setCantidadAdicional5={setCantidadAdicional5}
        usdAdicional5={usdAdicional5}
        setUsdAdicional5={setUsdAdicional5}
        displayAdicional5={displayAdicional5}
        setDisplayAdicional5={setDisplayAdicional5}
        adicionalTotalBs={adicionalTotalBs}
        setAdicionalTotalBs={setAdicionalTotalBs}
        adicionalTotalUSD={adicionalTotalUSD}
        setAdicionalTotalUSD={setAdicionalTotalUSD}
        sumaInicialBs={sumaInicialBs}
        sumaInicialUSD={sumaInicialUSD}
        precioFinalBs={precioFinalBs}
        setPrecioFinalBs={setPrecioFinalBs}
        precioFinalUSD={precioFinalUSD}
        setPrecioFinalUSD={setPrecioFinalUSD}
        tasaCambio={tasaCambio} />}
      {/*<Budget />*/}
      {/*<ClearAll />*/}
    </React.Fragment>
  );
}

export default App;