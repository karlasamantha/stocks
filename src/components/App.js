import React, { Component } from 'react';
import { fetchStockPricePerSymbol } from '../services/FetchData';

class App extends Component {
  state = {
    symbol: '',
    price: null
  }
  
  handleSbumit = (event) => {
    event.preventDefault();
    
    fetchStockPricePerSymbol(this.refs.symbol.value);
  }
  
  render() {
    const { symbol } = this.state
    return (
      <div>
        <h1>Stocks info</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Lookup stocks info: </label>
          <input 
            type="text"
            ref="symbol" 
            value={symbol}
            placeholder="e.g.: AAP" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default App;
