import React from "react";

// Card 관련
import "../Card/card.css"
import CardTitle from "../Card/CardTitle"
import CardText from "../Card/CardText"
import CardImpact from "../Card/CardImpact"
import Halfbr from "../Card/Halfbr";
import Quarterbr from "../Card/Quarterbr";


const FifthCard = () => {
  return (
    <div className="brownCard">
        <div className="brownCardTextDiv">
        <Halfbr />
        <CardImpact text="접촉자 " /><CardText text="에 대한 사례 정의는 다음과 같아요."/>
        <Quarterbr />
        <div className="whiteCard">
          <CardImpact text="1. " /><CardText text="확진환자 유증상기에 2m 이내 접촉한 사람" /><br />
          <CardImpact text="2. " /><CardText text="확진환자가 폐쇄 공간에서 마스크를 쓰지" /><br />
          <span className="indent" /><CardText text=" 않고 기침을 했을 당시 같이 있던 사람" />
        </div>
        <Halfbr />
        <CardText text="지자체는 역학조사를 실시하여 접촉자를" /><br />
        <CardText text="특정한 뒤, " /> <CardImpact text="자가격리 대상자" /><CardText text="로 분류합니다." /><br />
        <CardText text="어기면 벌금내야 하는, 강력한 조치죠..." /><br />
        <br />
        <CardText text="언론에 보도되는 곳들에 내가 다녀왔는데," /><br />
        <CardText text="나에게 연락이 한통도 오지 않았다면? " /><br />
        <CardText text="나는 " /> <CardImpact text="접촉자" /><CardText text="가 아닌걸까요?" /><br />
        <br />
        <div className="rightAlignDiv">
          <CardTitle title="그렇지 않아요!!"></CardTitle>
        </div>
      </div>
    </div>
  );
}

export default FifthCard;