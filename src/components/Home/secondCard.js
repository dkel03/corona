import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const SecondCard = () => {
  return (
    <BrownCard>
      <BrownCardText>
        이태원 클럽 등의 <Impact>집단감염</Impact> 으로 인해,<br />
        산발적인 N차 감염의 가능성이 높아지고 있죠...
        <br /><br />
        정부에서도 최선을 다하고 있으나,<br />
        <Impact>불특정 다수</Impact>를 모두 관리하기엔<br />
        벅찬 것이 사실인 듯 해요.
        <br /><br />
        <QACard>
          Q. 접촉하진 않았는데 검사를 받을수 있을까요?<Halfbr />
          A. 공식적인 <ImpactPink>접촉자</ImpactPink>로 분류가 되지 않으면 보건소 외의 선별진료소에서 <ImpactPink>유료검사</ImpactPink>를 받아야합니다.<br />
          <Halfbr />
          (이태원, 논현동 방문자는 예외)
        </QACard>
        <br />
        <Right>
          <BrownCardTitle>이런 것 궁금하지 않아요? 👉</BrownCardTitle>
        </Right>
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
const QACard = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  padding: 8px;
  background-color: white;
  border-radius: 8px;
  color: black;
`
const Impact = styled.span`
  font-size: 20px;
  color: #616161;
`
const ImpactPink = styled.span`
  font-size: 20px;
  color: #f48fb1;
`
const Halfbr = styled.div`
  height: 7px;
`
const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export default SecondCard;