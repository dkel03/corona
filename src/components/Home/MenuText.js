import React from "react";
import styled from "styled-components";
import { Typography } from '@material-ui/core';

const MenuText = (props) => { // 기본적으로 span임 !!
  return <StyledText>{props.text}</StyledText>
}

const StyledText = styled(Typography).attrs({
})`
  font-size: 14px;
  font-weight: bold;
  color: #232323;
`

export default MenuText;