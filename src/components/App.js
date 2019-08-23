import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { fetchCompanyInfo, fetchStockInfo } from '../services/FetchData'
import { Container } from './styles'

const App = () => {
  const [query, setQuery] = useState()
  const [symbol, setSymbol] = useState()
  const [price, setPrice] = useState()
  const [companyDescription, setCompanyDescription] = useState()
  const [companyName, setCompanyName] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    setSymbol(query)
  }

  useEffect(() => {
    const fetchInfo = async () => {
      const companyResponse = await axios.get(
        fetchCompanyInfo(symbol),
      );

      const stockResponse = await axios.get(
        fetchStockInfo(symbol),
      );

      setPrice(stockResponse.data.latestPrice)
      setCompanyName(companyResponse.data.companyName)
      setCompanyDescription(companyResponse.data.description)
    };

    fetchInfo();
  }, [symbol])

  return (
    <Container>
      <h1>Stocks info</h1>
      <form onSubmit={handleSubmit}>
        <label>Stock price lookup: </label>
        <input
          type="text"
          value={query}
          placeholder="e.g.: AAP"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button>Search</button>
      </form>
      <div>
        Price: <span>{price}</span><br />
        Company name: <span>{companyName}</span><br />
        Company description: <span>{companyDescription}</span>
      </div>
    </Container>
  )
}

export default App;
