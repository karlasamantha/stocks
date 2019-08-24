import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { fetchCompanyInfo, fetchStockInfo } from '../services/FetchData'
import { Container, ResultsContainer, InfoContainer } from './styles'

const App = () => {
  const [query, setQuery] = useState('')
  const [symbol, setSymbol] = useState('')
  const [price, setPrice] = useState()
  const [companyDescription, setCompanyDescription] = useState()
  const [companyName, setCompanyName] = useState()

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const companyResponse = await axios.get(fetchCompanyInfo(symbol))
        const stockResponse = await axios.get(fetchStockInfo(symbol))

        setPrice(stockResponse.data.latestPrice)
        setCompanyName(companyResponse.data.companyName)
        setCompanyDescription(companyResponse.data.description)
      } catch (error) {
        setPrice('')
        setCompanyName('')
        setCompanyDescription('')
      }
    };

    fetchInfo()
  }, [symbol])

  return (
    <Container>
      <h1>Stocks info</h1>
      <form 
        onSubmit={event => {
          setSymbol(query)
          event.preventDefault()
        }}>
        <label>Stock price lookup: </label>
        <input
          type="text"
          value={query}
          placeholder="e.g.: AAP"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button>Search</button>
      </form>

      <ResultsContainer>
        <InfoContainer>
          <label>Price: </label>
          <span>{price}</span>
        </InfoContainer>
        <InfoContainer>
          <label>Company name: </label>
          <span>{companyName}</span>
        </InfoContainer>
        <InfoContainer>
          <label>Company description: </label>
          <span>{companyDescription}</span>
        </InfoContainer>
      </ResultsContainer>
    </Container>
  )
}

export default App;
