import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const HomeCard = () => {
  return (
    <BrownCard>
      <BrownCardTitle>"나는 검사를 받아야 하는가?"</BrownCardTitle>
      <BrownCardTitle>"나는 자가격리를 해야 하는가?"</BrownCardTitle>
      <BrownCardText>
        매일매일 폰이 울립니다.<br />
        <Impact>... </Impact>를 방문한 사람은 외출을 자제하라네요.
        <br /><br />
        잠잠해 진것 같았던 코로나가 다시 무서워지고<br />
        <Impact>나도</Impact> 혹시 감염된 것은 아닌가 걱정됩니다.
        <br /><br />
        1339에 전화하기 전에 먼저,<br />
        우리 <ImpactLarge>코로나케어</ ImpactLarge> 해요
      </BrownCardText>
      <Right>
        <BrownCardTitle>좀만 더 읽어주실래요? <span role="img">👉</span></BrownCardTitle>
      </Right>
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
  max-height: 450px;
`
const BrownCardTitle = styled(Typography).attrs({
  variant: "h5",
})`
  padding: 10px;
`
const BrownCardText = styled(Typography).attrs({
  variant: "body1"
})`
  padding: 10px;
  line-height: 25px;
`
const Impact = styled.span`
  font-size: 20px;
  color: #616161;
`
const ImpactLarge = styled.span`
  font-size: 23px;
  color: #616161;
`
const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export default HomeCard;