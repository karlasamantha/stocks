export function fetchSymbolInfo(symbol) {
  return fetch(``)
    .then((res) => res.json());
}

export function fetchStockPricePerSymbol(symbol) {
  return fetch(`https://api.iextrading.com/1.0/deep/official-price?symbols=${symbol}`)
    .then((res) => res.json());
}