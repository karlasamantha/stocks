import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fetchCompanyInfo from '../services/FetchData';
import { Container } from './styles'

const App = () => {
  const [symbol, setSymbol] = useState()
  const [price, setPrice] = useState({ price: {} })

  const handleSubmit = event => {
    event.preventDefault();
    console.log('this is the symbol: ', symbol)
    console.log('this is the company info: ', price)
  }

  // TODO: fix onChange handler

  useEffect(() => {
    const fetchPrice = async () => {
      const response = await axios.get(
        fetchCompanyInfo(symbol),
      );

      setPrice(response.data);
    };

    fetchPrice();
  }, [symbol])

  return (
    <Container>
      <h1>Stocks info</h1>
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
    </Container>
  )
}

export default App;
