import React from "react";
import styled from "styled-components";
import { Typography } from '@material-ui/core';

const CardTitle = (props) => {
  return <StyledTitle>{props.title}</StyledTitle>
}

const StyledTitle = styled(Typography).attrs({
  variant: "h5",
})`
  padding: 10px;
`

export default CardTitle;