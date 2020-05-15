import React from "react";
// Material UI
import Button from "@material-ui/core/Button";
// Styles
import "../diagnose.css"

// Components
import QuestionTitle from "../Components/QuestionTitle";
import QuestionText from "../Components/QuestionText";
import AnswerText from "../Components/AnswerText";

const Eight = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDiv">
          <QuestionTitle title="질문 8." />
        </div>
        <div className="questionTextDiv">
          <QuestionText text="최근 만난 사람 중, 접촉자가 있나요?" />
          <div className="answerTextGrey">
            <AnswerText text="※ 접촉자: 확진자와 접촉한 것이 공식적으로 확인" />
          </div>
        </div>
        <div className="buttonDiv">
          <Button size="small" color="secondary" variant="contained" onClick={() => setCardIndex(9)}>Yes</Button>
          <Button size="small" color="secondary" variant="contained" onClick={() => setCardIndex(14)}>No</Button>
        </div>
      </div>
    </div>
  );
}

export default Eight;