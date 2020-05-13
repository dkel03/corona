import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const FourthCard = () => {
  return (
    <BrownCard>
      <BrownCardText>
        우선 <Impact>정부</Impact>는 크게 4가지의 분류를 하고 있어요.
        <br /><Halfbr /><Halfbr />
        <QACard>검사에서 양성판정을 받은 <ImpactPink>확진환자</ImpactPink></QACard>
        <QACard>의심되나, 아직 확진되지 않은 <ImpactPink>의사환자</ImpactPink></QACard>
        <QACard>확진자와 접촉했다고 판단되는 <ImpactPink>접촉자</ImpactPink></QACard>
        <QACard>보건소에서 2주간 확인하는 <ImpactPink>능동감시대상자</ImpactPink></QACard>
        <Halfbr /><Halfbr />
        이 중, 코로나케어가 집중하는 것은<br />
        <Impact>"접촉자"</Impact> 에요.<br />
        집단감염을 통해 우리 모두가 접촉자일 <br />
        가능성이 생겼거든요...<br /><br />
        <Right>
          <BrownCardTitle>접촉자에 대해 알아보아요!</BrownCardTitle>
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
  max-width: 500px;
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

export default FourthCard;