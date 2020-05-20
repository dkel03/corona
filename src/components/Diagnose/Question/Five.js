import React from "react";
// Material UI
import Button from "@material-ui/core/Button";
// Styles
import "../diagnose.css"

// Components
import QuestionTitle from "../Components/QuestionTitle";
import QuestionText from "../Components/QuestionText";

const Five = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDiv">
          <QuestionTitle title="질문 5." />
        </div>
        <div className="questionTextDiv">
          <QuestionText text="관할 보건소, 지자체 등에서 연락이 왔나요?" />
        </div>
        <div className="buttonDiv">
          <Button size="small" variant="outlined" onClick={() => setCardIndex(1)}>Yes</Button>
          <Button size="small" variant="outlined" onClick={() => setCardIndex(7)}>No</Button>
        </div>
      </div>
    </div>
  );
}

export default Five;