import React from "react";
import styled from "styled-components";

// Material UI
import { Typography } from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';

// Styles
import "../diagnose.css"

const CoronaMapTitle = (props) => {
  return (
    <div className="questionTitle">
      <RoomIcon />
      <StyledTypo variant="body1">{props.title}</StyledTypo>
    </div>
  );
}

const StyledTypo = styled(Typography)`
  margin-left: 10px;
  display: inline;
`

export default CoronaMapTitle;