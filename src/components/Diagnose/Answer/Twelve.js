import React from "react";

// Material UI
import Button from "@material-ui/core/Button";

// Styles
import "../diagnose.css"

// Components
import AnswerTitle from "../Components/AnswerTitle";
import AnswerText from "../Components/AnswerText";
import QuestionText from "../Components/QuestionText";
import HospitalButton from "../Components/HospitalButton";
import FreeCheckUp from "../Components/FreeCheckUp";

const Twelve = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDiv">
          <AnswerTitle title="접촉자의 접촉자" />
        </div>
        <div className="questionTextDiv">
          <FreeCheckUp />
          <QuestionText text="현재 접촉자의 접촉자 입니다." />
          <QuestionText text="최대한 외출자제 하시고, " />
          <br />
          <QuestionText text="관할 보건소에 무료검사 가능한지 문의하세요!" />
          <div className="answerTextColor">
            <AnswerText text="(보건소 번호는 1339에서 안내)" />
          </div>
          <br />
          <QuestionText text="접촉하신 분께서 무증상 감염자일 수 있습니다." />
          <QuestionText text="접촉자분께도 검사 권유하시고," />
          <QuestionText text="선별진료소를 검색해 놓으세요!" />
        </div>
        <div className="buttonDivAnswer">
          <HospitalButton />
          <Button size="medium" variant="outlined" onClick={() => setCardIndex(0)}>다시 진단하기</Button>
        </div>
      </div>
    </div>
  );
}

export default Twelve;