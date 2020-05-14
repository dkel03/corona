import React from "react";

// Card 관련
import "../Card/card.css"
import CardTitle from "../Card/CardTitle"
import CardText from "../Card/CardText"
import CardImpact from "../Card/CardImpact"
import CardImpactPink from "../Card/CardImpactPink"
import Halfbr from "../Card/Halfbr";
import Quarterbr from "../Card/Quarterbr";


const FourthCard = () => {
  return (
    <div className="brownCard">
      <div className="brownCardTextBox">
        <Quarterbr />
        <CardText text="우선 " /><CardImpact text="정부" /><CardText text="는 크게 4가지의 분류를 하고 있어요." /><br />
        <Quarterbr />
        <div className="whiteCard">
          <CardText text="검사에서 양성판정을 받은 " /><CardImpactPink text="확진환자" />
        </div>
        <div className="whiteCard">
          <CardText text="의심되나, 아직 확진되지 않은 " /><CardImpactPink text="의사환자" />
        </div>
        <div className="whiteCard">
          <CardText text="확진자와 접촉했다고 판단되는 " /><CardImpactPink text="접촉자" />
        </div>
        <div className="whiteCard">
          <CardText text="보건소에서 2주간 확인하는 " /><CardImpactPink text="능동감시대상자" />
        </div>
        <Quarterbr />
        <CardText text="이 중, 코로나케어가 집중하는 것은 " /><br />
        <CardImpact text="접촉자 " /><CardText text="에요." /><br />
        <CardText text="집단감염을 통해 우리 모두가 접촉자일 " /> <br />
        <CardText text="가능성이 생겼거든요... " /><br />
        <Halfbr />
        <div className="rightAlignDiv">
          <CardTitle title="접촉자에 대해 알아봐요!"></CardTitle>
        </div>
      </div>
    </div>
  );
}

export default FourthCard;