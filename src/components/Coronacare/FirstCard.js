import React from "react";

// Card 관련
import "../Card/card.css";
import CardTitle from "../Card/CardTitle";
import CardText from "../Card/CardText";
import CardImpact from "../Card/CardImpact";
import Halfbr from "../Card/Halfbr";
import Quarterbr from "../Card/Quarterbr";

const FirstCard = () => {
  return (
    <div className="homeBrownCard">
      <CardTitle title="나도 검사를 받아야 할까?"></CardTitle>
      <CardTitle title="나도 자가격리를 해야 하는걸까?"></CardTitle>
      <div className="brownCardTextBox">
        <Halfbr />
        <CardText text="매일매일 폰이 울립니다." /><br />
        <CardImpact text="... " /><CardText text="를 방문한 사람은 외출을 자제하라네요." /><br />
        <Halfbr />
        <CardText text="잠잠해진 것 같았던 코로나가 다시 무서워지고" /><br />
        <CardImpact text="나도 " /><CardText text="혹시 감염된 것은 아닌가 걱정됩니다." /><br />
        <Halfbr />
        <CardText text="난 안걸리겠지란 생각을 하던 평범한 대학생이" /> <br />
        <CardText text="코로나 검사를 받고, " /><CardImpact text="음성판정" /><CardText text="을 받기까지." /><br />
      </div>
      <Quarterbr />
      <div className="rightAlignDiv">
        <CardTitle title="무슨 일이 있었을까요?"/>
      </div>
    </div>
  );
}

export default FirstCard;