import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const SecondCard = () => {
  return (
    <BrownCard>
      <BrownCardTitle>Q&A</BrownCardTitle>
      <BrownCardText>
        본인은 밀접접촉자 이십니까?<br />
        <br /><br />
        본인은 일반접촉자 이십니까?<br />
        <br /><br />
      </BrownCardText>
    </BrownCard>
  );
}

const BrownCard = styled.div`
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  padding: 10px;
  background-color: #bcaaa4;
  border-radius: 8px;
  color: white;
`
const BrownCardTitle = styled(Typography).attrs({
  variant: "h4",
})`
  padding: 10px;
`
const BrownCardText = styled(Typography).attrs({
  variant: "body1"
})`
  padding: 10px;
  line-height: 25px;
`

export default SecondCard;