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

const Two = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDivAnswer">
          <AnswerTitle title="의사환자의 접촉자" />
        </div>
        <div className="questionTextDivAnswer">
          <QuestionText text="접촉하신 분께서 의사환자 입니다." />
          <QuestionText text="최대한 외출자제 하시고, " />
          <br />
          <QuestionText text="관할 보건소에 검사 가능한지 문의하세요!" />
          <div className="answerTextColor">
            <AnswerText text="(보건소 번호는 1339에서 안내)" />
          </div>
          <br />
          <QuestionText text="접촉하신 분께서 확진판정을 받으시면," />
          <QuestionText text="본인도 접촉자로 분류됩니다." />
          <QuestionText text="미리 선별진료소를 검색해 놓으세요!" />
        </div>
        <div className="buttonDivAnswer">
          <HospitalButton />
          <Button size="medium" color="secondary" variant="outlined" onClick={() => setCardIndex(0)}>다시 진단하기</Button>
        </div>
      </div>
    </div>
  );
}

export default Two;