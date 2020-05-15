import React from "react";
import styled from "styled-components";

// Material UI
import { Typography } from "@material-ui/core";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

// Styles
import "../diagnose.css"

const QuestionTitle = (props) => {
  return (
    <div className="questionTitle">
      <QuestionAnswerIcon />
      <StyledTypo variant="h5">{props.title}</StyledTypo>
    </div>
  );
}

const StyledTypo = styled(Typography)`
  margin-left: 10px;
  display: inline;
`

export default QuestionTitle;