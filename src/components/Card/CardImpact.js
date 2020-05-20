import React from "react";
import styled from "styled-components";
import { Typography } from '@material-ui/core';

const CardImpact = (props) => { // 기본적으로 span임 !!
  return <StyledImpact>{props.text}</StyledImpact>
}

const StyledImpact = styled(Typography).attrs({
  variant: "h6"
})`
  color: black;
  display: inline;
`

export default CardImpact;