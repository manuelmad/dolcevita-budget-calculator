//import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { InitialPrice } from './InitialPrice';

function App(props) {
  return (
    <React.Fragment>
      <h1>Calculadora de Presupuestos</h1>
      <InitialPrice />
      {/*<SummaryChart />*/}
      {/*<AdditionalPrice />*/}
      {/*<Budget />*/}
      {/*<ClearAll />*/}
    </React.Fragment>
  );
}

export default App;