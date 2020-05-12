import React from "react";
import {useState} from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import HomeCard from "../Components/Home/homeCard";

function Home() {
  const [cardIndex, setCardIndex] = useState(0);
  return (
    <HomeContainer>
      <HomeTitle>코로나케어</HomeTitle>
      <HomeSubTitle>Corona Care</HomeSubTitle>
      <HomeCard />
      <ButtonDiv>
        {cardIndex ? <Button onClick={() => setCardIndex(cardIndex-1)}  color="secondary">back</Button> : <div />}
        <Button color="secondary" onClick={() => setCardIndex(cardIndex+1)}>next</Button>
      </ButtonDiv>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  margin: 0 auto;
  font-size: 13px;
  margin-top: 30px;
  max-width: 800px;
`;
const HomeTitle = styled(Typography).attrs({
  variant: "h3",
  color: "secondary"
})`
  padding: 10px;
`;
const HomeSubTitle = styled(Typography).attrs({
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

export default Home;
