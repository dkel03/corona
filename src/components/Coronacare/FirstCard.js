import React from "react";

// Card 관련
import "../Card/card.css";
import CardTitle from "../Card/CardTitle";
import CardText from "../Card/CardText";
import CardImpact from "../Card/CardImpact";
import Halfbr from "../Card/Halfbr";
import Quarterbr from "../Card/Quarterbr";
import CardButton from "../Card/CardButton";

import FreeCheckUp from "../Diagnose/Components/FreeCheckUp";

const FirstCard = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="brownCard">
      <div className="brownCardTitleDiv">
        <CardTitle title="코로나케어란?"></CardTitle>
      </div>
      <div className="brownCardTextDiv">
        <Halfbr />
        <CardText text="코로나케어는" /><br />
        <CardImpact text="무료검사대상 진단서비스 " /><CardText text="입니다." />
        <Halfbr />
        <CardText text="자가진단을 통해 정부의 분류기준에 따른 무료검사 여부를 진단하는 것이 코로나 케어의 핵심입니다. 진단을 마치면, 분류기준과 함께 아래와 같은 세가지 결과 중 본인에게 해당되는 한가지를 얻을 수 있습니다." />
        <Quarterbr />
        <div className="freeCheckUpDiv">
          <FreeCheckUp type="free" /><FreeCheckUp /><FreeCheckUp type="notfree" />
        </div>
        <Quarterbr />
        <CardText text="또한 부가적으로 일별 확진자수 정보와 선별진료소 및 안심병원 검색 서비스를 제공하고 있습니다. " /><br/>
        <Halfbr />
        <CardButton text="코로나케어를 왜 개발했냐구요? (※TMI 주의)" cardIndex={1} setCardIndex={setCardIndex}/>
        <Halfbr />
      </div>
    </div>
  );
}

export default FirstCard;