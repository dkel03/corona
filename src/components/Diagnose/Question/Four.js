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
          <QuestionTitle title="질문 4." />
        </div>
        <div className="questionTextDiv">
          <QuestionText text="확진자와 동선이 겹치셨나요?" />
        </div>
        <div className="buttonDiv">
          <Button size="small" variant="outlined" onClick={() => setCardIndex(5)}>Yes</Button>
          <Button size="small" variant="outlined" onClick={() => setCardIndex(8)}>No</Button>
        </div>
      </div>
    </div>
  );
}

export default Four;