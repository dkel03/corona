import React from "react";

import "../Card/card.css"
import CardTitle from "../Card/CardTitle"
import CardText from "../Card/CardText"
import CardImpact from "../Card/CardImpact"
import CardImpactPink from "../Card/CardImpactPink"
import Quarterbr from "../Card/Quarterbr";


const EighthCard = () => {
  return (
    <div className="brownCard">
      <div className="brownCardTextDiv">
        <Quarterbr />
        <CardImpact text="코로나케어" /><CardText text="를 통해 전하고자 하는 핵심은," /><br />
        <CardText text="연쇄작용을 조기에 차단하자는 것이에요." /><br />
        <div className="whiteCard">
          <CardText text="친구가 이태원 클럽을 다녀왔다. (친구는 접촉자)" />
        </div>
        <div className="whiteCard">
          <CardText text="나는 그 친구를 만났다. " /><CardImpactPink text="접촉자의 접촉자" />
        </div>
        <div className="whiteCard">
          <CardText text="만약 친구가 확진이라면? " /><CardImpactPink text="나도 접촉자!" />
        </div>
        <CardImpact text="접촉자의 접촉자" /><CardText text="인 경우," /><br />
        <CardText text="현재로서는 보건소외의 선별진료소에서" /><br />
        <CardText text="본인부담의 검사를 하는 수 밖에 없습니다..." /><br />
        <Quarterbr />
        <CardText text="때문에 " /><CardImpact text="접촉자" /><CardText text="이신 분들은, 증상관계 없이" /><br />
        <CardImpact text="자가격리 " /><CardText text="및 " /><CardImpact text="외출자제" /><CardText text=" 철저히 지켜주시고," /><br />
        <CardText text="증상이 있다면 바로! 검사를 받으셔야 해요!!!" /><br />
        <div className="rightAlignDiv">
          <CardTitle title="일단 자가진단부터 해요!"></CardTitle>
        </div>
      </div>
    </div>
  );
}

export default EighthCard;