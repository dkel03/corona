import React from "react";

// Material UI
import Button from "@material-ui/core/Button";

// Styles
import "../diagnose.css"

// Components
import QuestionTitle from "../Components/QuestionTitle";
import QuestionText from "../Components/QuestionText";

const Zero = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDiv">
          <QuestionTitle title="질문 0." />
        </div>
        <div className="questionTextDiv">
          <QuestionText text="접촉자이고, 자가격리 통보를 받으셨나요?" />
        </div>
        <div className="buttonDiv">
          <Button size="small" color="secondary" variant="contained" onClick={() => setCardIndex(1)}>Yes</Button>
          <Button size="small" color="secondary" variant="contained" onClick={() => setCardIndex(4)}>No</Button>
        </div>
      </div>
    </div>
  );
}

export default Zero;