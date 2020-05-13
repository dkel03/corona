import React from "react";
import styled from "styled-components";
import { Typography } from '@material-ui/core';

const PageSubtitle = (props) => {
  return <StyledSubTitle>{props.subtitle}</StyledSubTitle>
}

const StyledSubTitle = styled(Typography).attrs({
  varient: "subtitle",
  color: "primary"
})`
  padding: 10px;
  margin-top: -20px;
  margin-left: 2px;
`
export default PageSubtitle;