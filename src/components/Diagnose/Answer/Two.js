import React from "react";

// Material UI
import Button from "@material-ui/core/Button";

// Styles
import "../diagnose.css"

// Components
import AnswerTitle from "../Components/AnswerTitle";
import QuestionText from "../Components/QuestionText";
import HospitalButton from "../Components/HospitalButton";

const Two = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDivAnswer">
          <AnswerTitle title="의사환자" />
        </div>
        <div className="questionTextDivAnswer">
          <QuestionText text="현재 의사환자 입니다." />
          <QuestionText text="마스크를 꼭 착용하신 후," />
          <br />
          <QuestionText text="본인 거주지 근처의 선별진료소에 방문," />
          <QuestionText text="검사를 받으셔야 합니다!" />
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