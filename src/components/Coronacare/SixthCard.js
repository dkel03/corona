import React from "react";

// Card 관련
import "../Card/card.css"
import CardTitle from "../Card/CardTitle"
import CardText from "../Card/CardText"
import CardImpact from "../Card/CardImpact"
import CardImpactPink from "../Card/CardImpactPink"
import Quarterbr from "../Card/Quarterbr";

const SixthCard = () => {
  return (
    <div className="brownCard">
      <div className="brownCardTextBox">
        <Quarterbr />
        <CardImpact text="접촉자 " /><CardText text="이더라도, "/><br />
        <CardText text="역학조사를 통해 특정되지 않을 수도 있답니다.."/><br />
        <CardText text="그럴땐 본인이 "/><CardImpact text="신고" /><CardText text="하는 것이 바람직해요!"/><br />
        <Quarterbr />
        <div className="whiteCard">
          <CardImpactPink text="접촉자 여부를 확인하는 방법 1" /><br />
          <CardText text="확진자와 접촉했다고 생각되는 지역의 지자체에 연락하여 역학조사팀과 연결, 접촉여부를 판단합니다."/><br />
          <Quarterbr />
          <CardImpact text="ex)" /><CardText text="신촌 다모토리5에 다녀온 경우"/><br />
          <CardText text="--> 서대문구청에 연락!"/>
        </div>
        <div className="whiteCard">
          <CardImpactPink text="접촉자 여부를 확인하는 방법 2" /><br />
          <CardText text="본인 거주지의 보건소에 연락, 접촉자 여부를 판정받습니다."/><br />
          <CardText text=""/>
        </div>

        <div className="rightAlignDiv">
          <CardTitle title="판정결과에 따라서는요?"></CardTitle>
        </div>
      </div>
    </div>
  );
}

export default SixthCard;