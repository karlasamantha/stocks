import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: left;
  padding: 0 20px;
`;

const ResultsContainer = styled.div`
  align-items: left;
  margin: 10px 0;
`;

const InfoContainer = styled.div`
  margin: 10px 0;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  border: 1px solid black;
  padding: 8px;
  margin: 0 0 10px 0;
`;

const Button = styled.button`
  padding: 8px;
  margin: 0 3px;
  border-radius: 3px;
  border: 1px solid black;
`;

export { Container, ResultsContainer, InfoContainer, Label, Input, Button };