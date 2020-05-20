import React from "react";

import "../Card/card.css"
import CardTitle from "../Card/CardTitle"
import CardText from "../Card/CardText"
import CardImpact from "../Card/CardImpact"
import Quarterbr from "../Card/Quarterbr";

const SeventhCard = () => {
  return (
    <div className="brownCard">
      <div className="brownCardTextDiv">
        <Quarterbr />
        <CardText text="접촉자로 분류 "/><CardImpact text="된다면" /><br />
        <div className="whiteCard">
          <CardText text="- 접촉한 날로부터 2주간 "/><CardImpact text="자가격리대상" /><br />
          <CardText text="- 증상 관계 X, 선별진료소에서 무료로 검사가능"/>
        </div>
        <CardText text="만약 접촉자로 분류 "/><CardImpact text="되지 않는다면" /><br />
        <div className="whiteCard">  
          <CardText text="- 능동감시대상자 혹은 외출자제 권고"/><br />
          <CardText text="- 이 경우, 만약 불안하면 본인부담 검사"/><br />
          <span className="indent" /><CardText text="(양성 판정 시, 환불가능)"/><br />
          <CardText text="- 검사를 받고 싶다면 선별진료소를 찾되,"/><br />
          <CardText text="- 보건소가 아닌 선별진료소를 찾아야함"/><br />
          <span className="indent" /><CardText text="(보건소는 유료검사가 안됨)"/><br />
        </div>
        <CardText text="※ 최근 이태원, 논현동 방문자의 경우에는"/><br />
        <span className="indent" /><CardText text="예외입니다"/><br />
        <div className="rightAlignDiv">
          <CardTitle title="어느정도 감이 잡히시나요?"></CardTitle>
        </div>
      </div>
    </div>
  );
}

export default SeventhCard;