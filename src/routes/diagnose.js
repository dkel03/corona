import React from "react";
import {useState} from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import HomeCard from "../Components/Home/homeCard";
import SecondCard from "../Components/Home/secondCard";

function Diagnose() {
  const [cardIndex, setCardIndex] = useState(0);
  const prevCard = () => {
    if(cardIndex > 0) {
      setCardIndex(cardIndex-1)
    }
  }
  const nextCard = () => {
    if(cardIndex < 1) {
      setCardIndex(cardIndex+1)
    }
  }
  return (
    <Container>
      <Title>자가진단</Title>
      <SubTitle>Self Diagnose</SubTitle>
      {cardIndex ? (<SecondCard />) : (<HomeCard />)}
      <ButtonDiv>
        {cardIndex ? <Button onClick={() => prevCard()}  color="secondary">back</Button> : <div />}
        <Button onClick={() => nextCard()} color="secondary" >next</Button>
      </ButtonDiv>
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
`;
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
const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export default Diagnose;
