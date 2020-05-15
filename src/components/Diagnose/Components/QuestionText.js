import React from "react";
import styled from "styled-components";

// Material UI
import { Typography } from "@material-ui/core";

// Styles
import "../diagnose.css"

const QuestionText = (props) => {
  return (
    <span>
      <StyledTypo variant="body1">{props.text}</StyledTypo>
    </span>
  );
}

const StyledTypo = styled(Typography)`
`
export default QuestionText;