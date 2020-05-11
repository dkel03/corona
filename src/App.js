import React from "react";
import styled from "styled-components";
import HospitalContainer from './components/Hospital/hospitalContainer'

function App() {
  return (
    <Container>
      <HospitalContainer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0px;
  padding 0px;
`

export default App;
