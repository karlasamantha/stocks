import React, { useState, useEffect } from 'react'
import axios from 'axios'
import fetchCompanyInfo from '../services/FetchData'
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
  /**
   * Fix onChange handler: is not letting update the input
   */

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await axios.get(
        fetchCompanyInfo(symbol),
      );

      setPrice(response.data.latestPrice)
      setCompanyName(response.data.companyName)
      setCompanyDescription(response.data.description)
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
          value={symbol}
          placeholder="e.g.: AAP"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button>Search</button>
      </form>
      <div>
        Symbol: <span>{symbol}</span><br />
        Price: <span>{price}</span><br />
        Company name: <span>{companyName}</span><br />
        Company description: <span>{companyDescription}</span>
      </div>
    </Container>
  )
}

export default App;
