import React from "react";
import styled from "styled-components";
import { Typography } from '@material-ui/core';

const PageTitle = (props) => { //나중에 prop types 적용하기! title 있을때만 가능!
  return <StyledTitle>{props.title}</StyledTitle>;
}
const StyledTitle = styled(Typography).attrs({
  variant: "h4",
  color: "secondary"
})`
  margin-top: -10px;
  padding: 10px;
`;

export default PageTitle;