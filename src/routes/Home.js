import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import HomeCard from "../Components/Home/homeCard";
import SecondCard from "../Components/Home/secondCard";
import ThirdCard from "../Components/Home/thirdCard";
import FourthCard from "../Components/Home/fourthCard";
import FifthCard from "../Components/Home/fifthCard";
import SixthCard from "../Components/Home/sixthCard";
import SeventhCard from "../Components/Home/seventhCard";

function Home() {
  const [cardIndex, setCardIndex] = useState(0);
  const maxCardIndex = 6;
  const prevCard = () => {
    if(cardIndex > 0) {
      setCardIndex(cardIndex-1)
    }
  }
  const nextCard = () => {
    if(cardIndex < maxCardIndex) {
      setCardIndex(cardIndex+1)
    }
  }
  return (
    <Container>
      {!cardIndex ? (<>
          <Title>코로나케어</Title>
          <SubTitle>Corona Care</SubTitle>
        </>) : (<></>) }
      {cardIndex === 0 ? 
        (<HomeCard />) :
        (cardIndex === 1 ? 
          (<SecondCard />) : 
          (cardIndex === 2 ? 
            (<ThirdCard />) : 
            (cardIndex === 3 ? 
              (<FourthCard />) :
              (cardIndex === 4 ? 
                (<FifthCard />) :
                (cardIndex === 5 ? 
                  (<SixthCard />) : (<SeventhCard />)
                )
              )
            )
          )
        ) 
      }
      <ButtonDiv>
        {cardIndex ? <Button onClick={() => prevCard()}  color="secondary">back</Button> : <Button />}
        {cardIndex ? <Button color="secondary">{cardIndex+1}/{maxCardIndex+1}</Button> : <Button />}
        {cardIndex === 6 ? <Button color="secondary"><StyledLink to="/diagnose">자가진단</StyledLink></Button> : <Button onClick={() => nextCard()} color="secondary" >next</Button>}
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
  min-height: 540px;
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
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`
export default Home;
