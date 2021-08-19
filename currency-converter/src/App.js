import React, { useEffect } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=d91344f8fca1d3a56c7c4b27e7efc297' 

function App() {
  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);

  return (
    <>
      <h1> ReactJS - Currency Converter </h1>  
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
