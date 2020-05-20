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
          <QuestionTitle title="질문 11." />
        </div>
        <div className="questionTextDiv">
          <QuestionText text="본인은 증상이 있으신가요?" />
        </div>
        <div className="buttonDiv">
          <Button size="small" variant="outlined" onClick={() => setCardIndex(12)}>Yes</Button>
          <Button size="small" variant="outlined" onClick={() => setCardIndex(13)}>No</Button>
        </div>
      </div>
    </div>
  );
}

export default Four;