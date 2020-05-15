import React from "react";
import styled from "styled-components";

// Material UI
import { Typography } from "@material-ui/core";
import AnnouncementIcon from '@material-ui/icons/Announcement';

// Styles
import "../diagnose.css"

const AnswerTitle = (props) => {
  return (
    <div className="questionTitle">
      <AnnouncementIcon />
      <StyledTypo variant="h5">{props.title}</StyledTypo>
    </div>
  );
}

const StyledTypo = styled(Typography)`
  margin-left: 10px;
  display: inline;
`

export default AnswerTitle;