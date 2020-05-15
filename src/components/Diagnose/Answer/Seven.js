import React from "react";

// Material UI
import Button from "@material-ui/core/Button";

// Styles
import "../diagnose.css"

// Components
import AnswerTitle from "../Components/AnswerTitle";
import QuestionText from "../Components/QuestionText";
import AnswerText from "../Components/AnswerText";
import HospitalButton from "../Components/HospitalButton";
import Quarterbr from "../Components/Quarterbr";

const Seven = (props) => {
  const { setCardIndex } = props;
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <div className="questionTitleDivAnswer">
          <AnswerTitle title="조사되지 않은 접촉자" />
        </div>
        <div className="questionTextDivAnswer">
          <QuestionText text="역학조사에 포함되지 않은 접촉자입니다." />
          <br/>
          <div className="answerTextColor">
            <AnswerText text="1. 확진자와 접촉한 지역의 지자체 (구청, 군청 등)에" />
            <AnswerText text="연락하여 역학조사팀에 접촉여부를 알립니다." />
          </div>
          <Quarterbr />
          <div className="answerTextColor">
            <AnswerText text="2. 관할보건소에 연락, 접촉여부를 알립니다." />
            <AnswerText text="(보건소 번호는 1339에서 안내)" />
          </div>
          <br />
          <QuestionText text="연락이 올 때까지 외출을 최대한 자제해주시고," />
          <QuestionText text="증상있으면 꼭 선별진료소 방문하세요!" />
        </div>
        <div className="buttonDivAnswer">
          <HospitalButton />
          <Button size="medium" color="secondary" variant="outlined" onClick={() => setCardIndex(0)}>다시 진단하기</Button>
        </div>
      </div>
    </div>
  );
}

export default Seven;