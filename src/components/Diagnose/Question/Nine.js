import React from "react";
// Material UI
import Button from "@material-ui/core/Button";
// Styles
import "../diagnose.css"

// Components
import QuestionTitle from "../Components/QuestionTitle";
import QuestionText from "../Components/QuestionText";

const Four = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDiv">
          <QuestionTitle title="질문 9." />
        </div>
        <div className="questionTextDiv">
          <QuestionText text="해당 접촉자분께서 증상이 있으셨나요?" />
        </div>
        <div className="buttonDiv">
          <Button size="small" variant="outlined" onClick={() => setCardIndex(10)}>Yes</Button>
          <Button size="small" variant="outlined" onClick={() => setCardIndex(11)}>No</Button>
        </div>
      </div>
    </div>
  );
}

export default Four;