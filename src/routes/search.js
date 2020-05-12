import React from "react";
import styled from "styled-components";
import {Typography} from '@material-ui/core';
import HospitalContainer from "../Components/Hospital/hospitalContainer"

const Search = () => {
  return (
    <Container>
      <Title>선별진료소 검색</Title>
      <SubTitle>Triage Room Searching</SubTitle>
      <HospitalContainer />
    </Container>
  );
}

const Container = styled.div`
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  margin: 0 auto;
  font-size: 13px;
  margin-top: 20px;
  max-width: 1000px;
` 
const Title = styled(Typography).attrs({
  variant: "h3",
  color: "secondary"
})`
  margin-top: -10px;
  padding: 10px;
`;
const SubTitle = styled(Typography).attrs({
  varient: "subtitle",
  color: "primary"
})`
  padding: 10px;
  margin-top: -20px;
  margin-left: 2px;
`


export default Search;
