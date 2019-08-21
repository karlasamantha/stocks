import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stocks info</h1>
        <form>
          <label>Search for Symbols: </label>
          <input type="text" placeholder="e.g.: AAP" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default App;
