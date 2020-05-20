import React from "react";
import styled from "styled-components";
import { Typography } from '@material-ui/core';

const PageTitle = (props) => { //나중에 prop types 적용하기! title 있을때만 가능!
  return <StyledTitle>{props.title}</StyledTitle>;
}
const StyledTitle = styled(Typography).attrs({
})`
  font-size: 26px;
  font-weight: 900;
  margin-top: -10px;
  padding: 10px;
  color: #232323
`;

export default PageTitle;