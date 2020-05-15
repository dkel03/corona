import React from "react";
import { useState } from "react";

// Page 관련
import "../Components/Page/page.css";
import PageTitle from "../Components/Page/PageTitle";
import PageSubtitle from "../Components/Page/PageSubtitle";

// Question 관련
import Zero from "../Components/Diagnose/Zero";
import One from "../Components/Diagnose/One";
import Two from "../Components/Diagnose/Two";
import Three from "../Components/Diagnose/Three";
import Four from "../Components/Diagnose/Four";
import Five from "../Components/Diagnose/Five";
import Six from "../Components/Diagnose/Six";
import Seven from "../Components/Diagnose/Seven";
import Eight from "../Components/Diagnose/Eight";
import Nine from "../Components/Diagnose/Nine";
import Ten from "../Components/Diagnose/Ten";
import Eleven from "../Components/Diagnose/Eleven";
import Twelve from "../Components/Diagnose/Twelve";
import Thirteen from "../Components/Diagnose/Thirteen";
import Fourteen from "../Components/Diagnose/Fourteen";

function Diagnose() {
  const [cardIndex, setCardIndex] = useState(0);
  return (
    <div className="container">
      <PageTitle title="자가진단"></PageTitle>
      <PageSubtitle subtitle="Self Diagnose"></PageSubtitle>
      {cardIndex === 0 ? 
        (<Zero setCardIndex={setCardIndex}/>) : 
        (cardIndex === 1 ? 
          (<One setCardIndex={setCardIndex}/>):
          (cardIndex === 2 ? 
            (<Two setCardIndex={setCardIndex}/>):
            (cardIndex === 3 ? 
              (<Three setCardIndex={setCardIndex}/>):
              (cardIndex === 4 ? 
                (<Four setCardIndex={setCardIndex}/>):
                (cardIndex === 5 ? 
                  (<Five setCardIndex={setCardIndex}/>):
                  (cardIndex === 6 ? 
                    (<Six setCardIndex={setCardIndex}/>):
                    (cardIndex === 7 ? 
                      (<Seven setCardIndex={setCardIndex}/>):
                      (cardIndex === 8 ? 
                        (<Eight setCardIndex={setCardIndex}/>):
                        (cardIndex === 9 ? 
                          (<Nine setCardIndex={setCardIndex}/>):
                          (cardIndex === 10 ? 
                            (<Ten setCardIndex={setCardIndex}/>):
                            (cardIndex === 11 ? 
                              (<Eleven setCardIndex={setCardIndex}/>):
                              (cardIndex === 12 ? 
                                (<Twelve setCardIndex={setCardIndex}/>):
                                (cardIndex === 13 ? 
                                  (<Thirteen setCardIndex={setCardIndex}/>):
                                  (cardIndex === 14 ? 
                                    (<Fourteen setCardIndex={setCardIndex}/>):
                                    <></>
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      }
    </div>
  );
}

export default Diagnose;
