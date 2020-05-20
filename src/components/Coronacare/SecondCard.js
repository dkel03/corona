import React from "react";

// Card 관련
import "../Card/card.css"
import CardTitle from "../Card/CardTitle"
import CardText from "../Card/CardText"
import CardImpact from "../Card/CardImpact"
import CardImpactPink from "../Card/CardImpactPink"
import Quarterbr from "../Card/Quarterbr";

const SecondCard = () => {
  return (
    <div className="brownCard">
      <div className="brownCardTextDiv">
        <Quarterbr />
        <CardText text="안일하게 이곳저곳 안심하고 돌아다닌 것이," /><br />
        <CardText text="저를 "/><CardImpact text="코로나 검사" /><CardText text="까지 하게 만들었어요."/><br />
        <Quarterbr />
        <CardText text="막상 " /><CardImpact text="나의 일" /><CardText text="이 되니까, " /><CardImpact text="무증상" /><CardText text="이었지만"/><br />
        <CardText text="무섭기도 하고, 만났던 주위사람들한테 미안하고," /><br />
        <CardText text="무엇보다, 너무 " /><CardImpact text="막막하더라구요.." /><br />
        <Quarterbr />
        <div className="whiteCard">
          <CardText text="Q. 접촉하진 않았는데 검사를 받을수 있을까요?" /><br />
          <CardText text="A. 공식적인 " /><CardImpactPink text="접촉자" /><CardText text="로 분류가 되지 않으면 " /><br />
          <span className="indent" /><CardText text="보건소 외의 선별진료소에서 " /><CardImpactPink text="유료검사" /><CardText text="를" /><br />
          <span className="indent" /><CardText text="받아야합니다." /><br />
          <Quarterbr />
          <CardText text="(이태원, 논현동 방문자는 예외)" />
        </div>
        <Quarterbr />
        <CardText text="이건 실제로 제가 직접 " /><CardImpact text="1339" /><CardText text="에 전화해서," /><br />
        <CardText text="물어보고, 얻은 답변이에요." />
        <br />
        <div className="rightAlignDiv">
          <CardTitle title="이런 것 궁금하지 않아요?"></CardTitle>
        </div>
      </div>
    </div>
  );
}

export default SecondCard;