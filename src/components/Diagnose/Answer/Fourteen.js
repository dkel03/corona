import React from "react";

// Material UI
import Button from "@material-ui/core/Button";

// Styles
import "../diagnose.css"

// Components
import AnswerTitle from "../Components/AnswerTitle";
import QuestionText from "../Components/QuestionText";
import SafeHospitalButton from "../Components/SafeHospitalButton";

const Twelve = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDivAnswer">
          <AnswerTitle title="비접촉자" />
        </div>
        <div className="questionTextDivAnswer">
          <QuestionText text="직접적인 감염 가능성은 없습니다." />
          <br />
          <QuestionText text="하지만 코로나의 위험은 언제나 있기 때문에" />
          <QuestionText text="코로나 관련 생활수칙 잘 지켜주시고," />
          <QuestionText text="사람이 많은 곳은 최대한 피하시는 게 좋아요!" />
          <br />
          <QuestionText text="무증상 감염자들도 있기 때문에," />
          <QuestionText text="절대 안심해서는 안됩니다.." />
          <br />
          <QuestionText text="진료가 필요하시다면 국가에서 지정한" />
          <QuestionText text="코로나 안심병원을 검색해보세요!" />
        </div>
        <div className="buttonDivAnswer">
          <SafeHospitalButton />
          <Button size="medium" color="secondary" variant="outlined" onClick={() => setCardIndex(0)}>다시 진단하기</Button>
        </div>
      </div>
    </div>
  );
}

export default Twelve;