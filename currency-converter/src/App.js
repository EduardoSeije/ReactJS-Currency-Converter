import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=d91344f8fca1d3a56c7c4b27e7efc297' 

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState([]);
  const [toCurrency, setToCurrency] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
    })
  }, []);

  return (
    <>
      <h1> ReactJS - Currency Converter </h1>  
      <CurrencyRow 
        currencyOptions={ currencyOptions }
        selectedCurrency={ fromCurrency }
        onChangeCurrency={ e => setToCurrency(e.target.value) }
      />
      <div className="equals">=</div>
      <CurrencyRow 
        currencyOptions={ currencyOptions }
        selectedCurrency={ toCurrency }
        onChangeCurrency={ e => setToCurrency(e.target.value) }
      />
    </>
  );
}

export default App;
