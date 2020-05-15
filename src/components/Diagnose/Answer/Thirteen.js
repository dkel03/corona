import React from "react";

// Material UI
import Button from "@material-ui/core/Button";

// Styles
import "../diagnose.css"

// Components
import AnswerTitle from "../Components/AnswerTitle";
import Quarterbr from "../Components/Quarterbr";
import QuestionText from "../Components/QuestionText";
import HospitalButton from "../Components/HospitalButton";

const Twelve = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDivAnswer">
          <AnswerTitle title="모니터링 대상" />
        </div>
        <div className="questionTextDivAnswer">
          <QuestionText text="현재 접촉자의 접촉자 입니다." />
          <QuestionText text="접촉자분께서 무증상 감염자일 수 있지만," />
          <Quarterbr />
          <QuestionText text="이 경우 선별진료소에서의" />
          <QuestionText text="무료검사는 현재까진 불가능합니다..." />
          <br />
          <QuestionText text="접촉자분께는 반드시 검사 권유하시고," />
          <QuestionText text="불안하시다면 보건소 외의 선별진료소에서" />
          <QuestionText text="본인부담의 검사가 가능합니다." />
          <br />
          <QuestionText text="보건소 외의 선별진료소를 검색해보세요!" />
        </div>
        <div className="buttonDivAnswer">
          <HospitalButton />
          <Button size="medium" color="secondary" variant="outlined" onClick={() => setCardIndex(0)}>다시 진단하기</Button>
        </div>
      </div>
    </div>
  );
}

export default Twelve;