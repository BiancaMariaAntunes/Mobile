import { useEffect, useState } from 'react';
import './App.css'
import Items from './components/Items';

function App() {

  const [valor, setValor] = useState(0);
  const [initialCurrency, setInitialCurrency] = useState("");
  const [finalCurrency, setFinalCurrency] = useState("");
  const [listCurrencies, setListCurrencies] = useState([])
  const [conversionResult, setConversionResult] = useState(null);

  useEffect(() => {

    fetch('https://api.currencylayer.com/list')
              .then(res=>res.json())
              .then(json=>setListCurrencies(json.symbols));
            
  }, [])

  useEffect(() => {
    const convertCurrency = async () => {
      try {
        const value = valor ? `${valor}` : '';
        const from = initialCurrency ? `${initialCurrency}` : '';
        const to = finalCurrency ? `${finalCurrency}` : '';

        const response = await fetch(
          `https://api.currencylayer.com/convert?access_key=0866620e8e2c120aa9e077b0cb0f0404&from=${from}&to=${to}&amount=${value}`
        );
        const json = await response.json();

        setConversionResult(json.result);
      } catch (error) {
        setConversionResult('Erro ao converter');
      }
    };
    convertCurrency();
  }, [valor, initialCurrency, finalCurrency]);

  return (
    <>
      <header>
        <div>
          <p>Selecione a unidade inicial da moeda: </p>
          <select onChange={(event) => setInitialCurrency(event.target.value) }>
            <option value="" defaultValue>Nenhum</option>
            <option value="BRL">Real</option>
            <option value="USD">Dólar Americano</option>
            <option value="AED">Dirham dos Emirados Árabes Unidos</option>
            <option value="CAD">Dólar Canadense</option>
          </select>
        </div>
        <div>
          <p>Selecione a unidade final da moeda: </p>
          <select onChange={(event) => setFinalCurrency(event.target.value) }>
            <option value="" defaultValue>Nenhum</option>
            <option value="BRL">Real</option>
            <option value="USD">Dólar Americano</option>
            <option value="AED">Dirham dos Emirados Árabes Unidos</option>
            <option value="CAD">Dólar Canadense</option>
          </select>
        </div>
        <p>Digite o valor que deseja converter: </p>
        <input type="number" value={valor} onChange={(event) => setValor(event.target.value) }/>



      </header>

      <div>
        <p>{conversionResult}</p>
      </div>


    </>
  )
}

export default App