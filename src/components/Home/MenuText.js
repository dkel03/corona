import React from "react";
import styled from "styled-components";
import { Typography } from '@material-ui/core';

const MenuText = (props) => { // 기본적으로 span임 !!
  return <StyledText>{props.text}</StyledText>
}

const StyledText = styled(Typography).attrs({
  variant: "body1"
})`
  color: #bcaaa4;
`

export default MenuText;