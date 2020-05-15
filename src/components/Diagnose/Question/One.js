import React from "react";
// Material UI
import Button from "@material-ui/core/Button";
// Styles
import "../diagnose.css"

// Components
import QuestionTitle from "../Components/QuestionTitle";
import QuestionText from "../Components/QuestionText";

const One = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDiv">
          <QuestionTitle title="질문 1." />
        </div>
        <div className="questionTextDiv">
          <QuestionText text="증상이 있으신가요?" />
        </div>
        <div className="buttonDiv">
          <Button size="small" color="secondary" variant="contained" onClick={() => setCardIndex(2)}>Yes</Button>
          <Button size="small" color="secondary" variant="contained" onClick={() => setCardIndex(3)}>No</Button>
        </div>
      </div>
    </div>
  );
}

export default One;