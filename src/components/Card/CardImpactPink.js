import React from "react";
import styled from "styled-components";
import { Typography } from '@material-ui/core';

const CardImpactPink = (props) => { // 기본적으로 span임 !!
  return <StyledImpact>{props.text}</StyledImpact>
}

const StyledImpact = styled(Typography).attrs({
  variant: "body1"
})`
  display: inline;
  font-size: 20px;
  color: #f48fb1;
`

export default CardImpactPink;