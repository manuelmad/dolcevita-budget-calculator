//import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { InitialPrice } from './InitialPrice/InitialPrice';
import { SummaryChart } from './SummaryChart/SummaryChart';

function App() {
  const [item_selected, setitem_selected] = React.useState('');
  const [product, setproduct] = React.useState('');
  const [tasaCambio, setTasaCambio] = React.useState(0);
  const [precio_unitario_Bs, setprecio_unitario_Bs] = React.useState(0);
  const [precio_unitario_USD, setprecio_unitario_USD] = React.useState(0);

  return (
    <React.Fragment>
      <h1>Calculadora de Presupuestos</h1>
      <InitialPrice 
        item_selected={item_selected}
        setitem_selected={setitem_selected}
        product={product}
        setproduct={setproduct}
        tasaCambio={tasaCambio}
        setTasaCambio={setTasaCambio}
        precio_unitario_Bs={precio_unitario_Bs}
        setprecio_unitario_Bs={setprecio_unitario_Bs}
        precio_unitario_USD={precio_unitario_USD}
        setprecio_unitario_USD={setprecio_unitario_USD} />
      <SummaryChart />
      {/*<AdditionalPrice />*/}
      {/*<Budget />*/}
      {/*<ClearAll />*/}
    </React.Fragment>
  );
}

export default App;