import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const HomeCard = () => {
  return (
    <BrownCard>
      <BrownCardTitle>코로나 케어란?</BrownCardTitle>
      <BrownCardText>
        이태원 클럽 등의 집단감염으로 인해,<br />
        산발적인 N차 감염의 가능성이 높아지고 있습니다.
        <br /><br />
        정부에서도 최선을 다하고 있으나,<br />
        확진자와 접촉한 불특정 다수를 모두 관리하기엔<br />
        벅찬 것이 사실입니다.
        <br /><br />
        개인으로서의 대응에 관한 필수적인 정보,<br />
        상황에 따른 적절한 대응방법을 알려드립니다.
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

export default HomeCard;