import React, { useState, useEffect } from 'react';

const App = () => {
  const [initialCurrency, setInitialCurrency] = useState('USD')
  const [finalCurrency, setFinalCurrency] = useState('EUR')
  const [result, setResult] = useState('')

  useEffect(() => {
    const handleConverter = async () => {
      try {
        const response = await fetch(
          `https://api.currencylayer.com/live?access_key=cc1742cd6768db7eaef688a67a55e286&currencies=${initialCurrency}&source=${finalCurrency}&format=1`
        );

        if (response.ok) {
          const data = await response.json()
          if (data.success) {
            const rates = data.quotes
            const result = Object.entries(rates).map(([moeda, taxa]) => ({ moeda, taxa }))
            setResult(result)
          }
        } 
      } catch (error) {
        console.error('Erro na solicitação:', error.message)
      }
    }

    if (initialCurrency && finalCurrency) {
      handleConverter()
    }
  }, [initialCurrency, finalCurrency])


  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>Moeda Base:</label>
        <input type="text" value={initialCurrency} onChange={(e) => setInitialCurrency(e.target.value)} />
      </div>
      <div>
        <label>Moedas Finais (separadas por vírgula):</label>
        <input type="text" value={finalCurrency} onChange={(e) => setFinalCurrency(e.target.value)} />
      </div>

      {result && (
        <div>
          <h2>Resultados:</h2>
          {result.map(({ moeda, taxa }) => (
            <div key={moeda}>
              <p>
                {moeda}: {taxa}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App;