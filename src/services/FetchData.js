export default function fetchCompanyInfo(symbol) {
  return `https://cloud.iexapis.com/stable/stock/${symbol}/company?token=pk_79b63c903d624b64b646c21ff2fa7f2a`;
}