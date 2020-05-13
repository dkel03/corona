import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

// Coronacare 관련 
import "../Components/Coronacare/coronacare.css"
import FirstCard from "../Components/Coronacare/FirstCard";
import SecondCard from "../Components/Coronacare/SecondCard";
import ThirdCard from "../Components/Coronacare/ThirdCard";
import FourthCard from "../Components/Coronacare/FourthCard";
import FifthCard from "../Components/Coronacare/FifthCard";
import SixthCard from "../Components/Coronacare/SixthCard";
import SeventhCard from "../Components/Coronacare/SeventhCard";
import EighthCard from "../Components/Coronacare/EighthCard";

// Page 관련
import "../Components/Page/page.css";
import PageTitle from "../Components/Page/PageTitle";
import PageSubtitle from "../Components/Page/PageSubtitle";

function Coronacare() {
  const [cardIndex, setCardIndex] = useState(0);
  const maxCardIndex = 7;
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
    <div className="container">
      {!cardIndex ? (<>
          <PageTitle title="코로나케어란?"></PageTitle>
          <PageSubtitle subtitle="평범한 대학생이 음성판정을 받기 까지"></PageSubtitle>
        </>) : (<></>) }
      {cardIndex === 0 ? 
        (<FirstCard />) :
        (cardIndex === 1 ? 
          (<SecondCard />) : 
          (cardIndex === 2 ? 
            (<ThirdCard />) : 
            (cardIndex === 3 ? 
              (<FourthCard />) :
              (cardIndex === 4 ? 
                (<FifthCard />) :
                (cardIndex === 5 ? 
                  (<SixthCard />) :
                  (cardIndex === 6 ? 
                    (<SeventhCard />) : (<EighthCard />)
                  )
                )
              )
            )
          )
        ) 
      }
      <div className="buttonDiv">
        {cardIndex ? <Button onClick={() => prevCard()}  color="secondary">back</Button> : <Button />}
        {cardIndex ? <Button color="secondary">{cardIndex+1}/{maxCardIndex+1}</Button> : <Button />}
        {cardIndex === maxCardIndex ? <Button color="secondary"><StyledLink to="/diagnose">자가진단</StyledLink></Button> : <Button onClick={() => nextCard()} color="secondary" >next</Button>}
      </div>
    </div>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`
export default Coronacare;
