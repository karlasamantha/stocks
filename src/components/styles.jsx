import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: left;
  padding: 0 10px;
`;

const ResultsContainer = styled.div`
  align-items: left;
  margin: 10px 0;
`;

const InfoContainer = styled.div`
  margin: 10px 0;
`;

export { Container, ResultsContainer, InfoContainer };