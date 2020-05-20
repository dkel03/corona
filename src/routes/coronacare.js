import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

// Coronacare 관련 
import "../Components/Coronacare/coronacare.css"
import FirstCard from "../Components/Coronacare/FirstCard";
import SecondCard from "../Components/Coronacare/SecondCard";
// import ThirdCard from "../Components/Coronacare/ThirdCard";
import FourthCard from "../Components/Coronacare/FourthCard";
import FifthCard from "../Components/Coronacare/FifthCard";
import SixthCard from "../Components/Coronacare/SixthCard";
import SeventhCard from "../Components/Coronacare/SeventhCard";
import EighthCard from "../Components/Coronacare/EighthCard";

// Page 관련
import "../Components/Page/page.css";

function Coronacare() {
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
    <div className="container">
      {cardIndex === 0 ? 
        (<FirstCard setCardIndex={setCardIndex}/>) :
        (cardIndex === 1 ? 
          (<SecondCard />) : 
          (cardIndex === 2 ? 
            (<FourthCard />) : 
            (cardIndex === 3 ? 
              (<FifthCard />) :
              (cardIndex === 4 ? 
                (<SixthCard />) :
                (cardIndex === 5 ? 
                  (<SeventhCard />) :
                  (cardIndex === 6 ? 
                    (<EighthCard />) : (<EighthCard />)
                  )
                )
              )
            )
          )
        ) 
      }
      <div className="buttonDiv">
        {cardIndex && cardIndex !== 1 ? <Button onClick={() => prevCard()}>back</Button> : <Button />}
        {cardIndex ? <Button>{cardIndex}/{maxCardIndex}</Button> : <Button />}
        {cardIndex === maxCardIndex ? <Button><StyledLink to="/diagnose">자가진단</StyledLink></Button> : cardIndex ? <Button onClick={() => nextCard()}>next</Button> : <></>}
      </div>
    </div>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #232323;
`
export default Coronacare;
