import React from "react";
import { useState } from "react";

// Styles
import "../Components/Diagnose/diagnose.css";

// Page 관련
import "../Components/Page/page.css";
import PageTitleComponent from "../Components/Page/PageTitleComponent";

// Question 관련
import Zero from "../Components/Diagnose/Question/Zero";
import One from "../Components/Diagnose/Question/One";
import Two from "../Components/Diagnose/Answer/Two";
import Three from "../Components/Diagnose/Answer/Three";
import Four from "../Components/Diagnose/Question/Four";
import Five from "../Components/Diagnose/Question/Five";
import Six from "../Components/Diagnose/Answer/Six";
import Seven from "../Components/Diagnose/Answer/Seven";
import Eight from "../Components/Diagnose/Question/Eight";
import Nine from "../Components/Diagnose/Question/Nine";
import Ten from "../Components/Diagnose/Answer/Ten";
import Eleven from "../Components/Diagnose/Question/Eleven";
import Twelve from "../Components/Diagnose/Answer/Twelve";
import Thirteen from "../Components/Diagnose/Answer/Thirteen";
import Fourteen from "../Components/Diagnose/Answer/Fourteen";
import CoronaMap from "../Components/Diagnose/Components/CoronaMap";

function Diagnose() {
  const [cardIndex, setCardIndex] = useState(0);
  return (
    <div className="container">
      {(cardIndex === 0) ? <PageTitleComponent title="자가진단 해보기" subtitle="나는 무료검사가 가능할까?" page="diagnose" />:<></>}
      <div className="questionCard">
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
        {cardIndex === 4 ? <CoronaMap /> : <></>}
      </div>
    </div>
  );
}

export default Diagnose;
