import React from "react";

// Page 관련
import "../Components/Page/page.css";
import PageTitle from "../Components/Page/PageTitle";
import PageSubtitle from "../Components/Page/PageSubtitle";

// Card 관련
import "../Components/Card/card.css"
import CardTitle from "../Components/Card/CardTitle"
import CardText from "../Components/Card/CardText"
import CardImpact from "../Components/Card/CardImpact"
import Quarterbr from "../Components/Card/Quarterbr"
import Space from "../Components/Card/Space";

function About() {
  return (
    <div className="containerCard">
      <PageTitle title="정보" />
      <PageSubtitle subtitle="About & Info" />
      <div className="aboutBrownCard">
        <CardTitle title="정보 출처" />
        <div className="brownCardTextBox">
          <CardImpact text="-" /><Space /><CardText text="건강보험심사평가원 코로나-19 병원 정보 api" /><br /> 
          <CardImpact text="-" /><Space /><CardText text="코로나바이러스감염증-19 정부 홈페이지" /><br />
        </div>
        <CardTitle title="개발 스택" />
        <div className="brownCardTextBox">
          <CardImpact text="-" /><Space /><CardText text="NodeJs + Express" /><Space /><CardImpact text="(REST API)" /><br />
          <CardImpact text="-" /><Space /><CardText text="React + Material UI" /><Space /><CardImpact text="(FrontEnd)" />
        </div>
        <CardTitle title="Info" />
        <div className="brownCardTextBox">
          <CardImpact text="-" /><Space /><CardText text="김장영 (Jay Kim)" /><br />
          <CardImpact text="-" /><Space /><CardText text="dkel03@korea.ac.kr" /><br />
          <CardImpact text="-" /><Space /><CardText text="facebook.com/jangyoung0108" /><br />
          <Quarterbr />
          <CardText text="부정확한 정보에 대한 피드백 부탁드립니다!" /><br />
          <CardText text="또한 코로나의 빠른 종식을 기원합니다..." />
        </div>
      </div>
    </div>
  );
}

export default About;