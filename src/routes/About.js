import React from "react";

// Page 관련
import "../Components/Page/page.css";

// Card 관련
import "../Components/Card/card.css"
import AboutTitle from "../Components/Card/AboutTitle"
import CardText from "../Components/Card/CardText"
import Halfbr from "../Components/Card/Halfbr"
import Quarterbr from "../Components/Card/Quarterbr"

function About() {
  return (
    <div className="container">
      <div className="brownCard">
        <br />
        <AboutTitle title="정보 출처 & API" />
        <Quarterbr />
        <div className="brownCardTextBox">
          <CardText text="- 코로나바이러스감염증19 정부 홈페이지" /><br />
          <CardText text="- 건강보험심사평가원 코로나19 병원정보 api" /><br />
          <CardText text="- Kakao-Map api" />
        </div>
        <br /> 
        <AboutTitle title="개발 스택" />
        <Quarterbr />
        <div className="brownCardTextBox">
          <CardText text="- NodeJs + Express (Backend)" /><br />
          <CardText text="- React + Material UI (Frontend)" />
        </div>
        <br />
        <AboutTitle title="Info" />
        <Quarterbr />
        <div className="brownCardTextBox">
          <CardText text="- 김장영 (Jay Kim)" /><br />
          <CardText text="- dkel03@korea.ac.kr" /><br />
          <CardText text="- facebook.com/jangyoung0108" /><br />
          <Halfbr />
          <CardText text="부정확한 정보에 대한 피드백 부탁드립니다!" /><br />
          <CardText text="또한 코로나의 빠른 종식을 기원합니다..." />
        </div>
      </div>
    </div>
  );
}

export default About;