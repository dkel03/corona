import React from "react";
import styled from "styled-components";

// Material UI
import { Typography } from "@material-ui/core";

// Styles
import "../Diagnose/diagnose.css"

const CardTitle = (props) => {
  return (
    <div className="questionTitle">
      <StyledTypo variant="h5">{props.title}</StyledTypo>
    </div>
  );
}

const StyledTypo = styled(Typography)`
  margin-left: 5px;
  display: inline;
`

export default CardTitle;