import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { fetchCompanyInfo, fetchStockInfo } from '../services/FetchData'
import { Container, ResultsContainer, InfoContainer, Label, Input, Button } from './styles'

const App = () => {
  const [query, setQuery] = useState('')
  const [symbol, setSymbol] = useState('')
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const companyResponse = await axios.get(fetchCompanyInfo(symbol))
        const stockResponse = await axios.get(fetchStockInfo(symbol))

        setPrice(stockResponse.data.latestPrice)
        setDescription(companyResponse.data.description)
      } catch (error) {
        setPrice('')
        setDescription('')
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
        <Input
          id='symbolInput'
          type='text'
          value={query}
          placeholder='e.g.: AAP'
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button>Search</Button>
      </form>

      <ResultsContainer>
        <InfoContainer>
          <Label htmlFor='symbol'>Symbol:</Label><br />
          <span id='symbol'>{symbol}</span>
        </InfoContainer>
        <InfoContainer>
          <Label htmlFor='price'>Price: </Label><br />
          <span id='price'>{price}</span>
        </InfoContainer>
        <InfoContainer>
          <Label htmlFor='description'>Description: </Label><br />
          <span id='description'>{description}</span>
        </InfoContainer>
      </ResultsContainer>
    </Container>
  )
}

export default App;
