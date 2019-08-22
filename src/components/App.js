import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [symbol, setSymbol] = useState()
  const [price, setPrice] = useState({ price: {} })

  const handleSubmit = event => {
    event.preventDefault();
    alert(symbol)
  }

  useEffect(() => {
    const fetchPrice = async () => {
      const response = await axios(
        `https://api.iextrading.com/1.0/deep/official-price?symbols=${symbol}`,
      );

      setPrice(response.data);
    };

    fetchPrice();
  }, {price})

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Stock price lookup: </label>
        <input
          type="text"
          value={symbol}
          placeholder="e.g.: AAP"
          onChange={(event) => setSymbol(event.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default App;
