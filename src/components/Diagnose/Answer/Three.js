import React from "react";

// Material UI
import Button from "@material-ui/core/Button";

// Styles
import "../diagnose.css"

// Components
import AnswerTitle from "../Components/AnswerTitle";
import QuestionText from "../Components/QuestionText";
import HospitalButton from "../Components/HospitalButton";
import FreeCheckUp from "../Components/FreeCheckUp";

const Two = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDiv">
          <AnswerTitle title="접촉자" />
        </div>
        <div className="questionTextDiv">
          <FreeCheckUp type="free" />
          <QuestionText text="현재 접촉자이자, 자가격리 상태입니다." />
          <QuestionText text="무증상이더라도 자가격리 유지하셔야 하고," /><br />
          <QuestionText text="증상이 없더라도 검사가 가능하니" />
          <QuestionText text="본인 거주지의 선별진료소를 방문해주세요!" />
        </div>
        <div className="buttonDivAnswer">
          <HospitalButton />
          <Button size="medium" variant="outlined" onClick={() => setCardIndex(0)}>다시 진단하기</Button>
        </div>
      </div>
    </div>
  );
}

export default Two;