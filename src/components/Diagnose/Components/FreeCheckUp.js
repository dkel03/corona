import React from "react";
import styled from "styled-components";
import Typhography from "@material-ui/core/Typography"

const FreeCheckUp = (props) => {
return (
  <StyledDiv type={props.type}>
    <Typhography variant="body2">
      {props.type === "free" ? "무료검사가능" : 
        props.type === "notfree" ? "본인부담검사" : "관할보건소 문의"}
    </Typhography>
  </StyledDiv>
)}

const StyledDiv = styled.div`
  width: ${props => !props.type ? "90px" : "75px"};
  border-radius: 30px;
  background-color: ${props => props.type === "free" ? "#4caf50" : props.type === "notfree" ? "#f44336" : "#ff9800"};
  color: white;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`

export default FreeCheckUp;