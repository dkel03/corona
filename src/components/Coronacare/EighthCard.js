import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const EighthCard = () => {
  return (
    <BrownCard>
      <BrownCardText>
        <ImpactLarge>코로나케어</ImpactLarge> 에서는 다양한 기능을 제공해요<br />
        <Halfbr /><Halfbr /><Halfbr />
        <QACard>
          <QACardTitle>
            자가진단
          </QACardTitle>
          <Indent /><Impact>접촉자</Impact>인지를 손쉽게 진단해 볼 수 있어요!<br /><Halfbr />
        </QACard>
        <Halfbr />
        <Halfbr />
        <QACard>
          <QACardTitle>선별진료소 검색</QACardTitle>
          <Indent />거주지의 <Impact>선별진료소</Impact>를 검색해 볼수 있어요<br /><Halfbr />
          <Indent />접촉자가 아니지만 불안한 경우를 위해,<br />
          <Indent />보건소를 제외하고 검색하는 기능이 있어요!<br />
        </QACard>
        <Halfbr />
        <Halfbr />
        <QACard>
          <QACardTitle>안심병원 검색</QACardTitle>
          <Indent /><Impact>안심병원</Impact>은 국가에서 지정하여,<br />
          <Indent />코로나로부터 안심할 수 있는 병원이에요.<br /><Halfbr />
          <Indent />거주지의 <Impact>안심병원</Impact>을 검색해 볼 수 있어요!<br /><Halfbr />
        </QACard>
        <Right>
          <BrownCardTitle>자가진단부터 할까요?</BrownCardTitle>
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
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 6px -6px rgba(0, 0, 0, 0.025);
  padding: 8px;
  background-color: white;
  border-radius: 8px;
  color: black;
  max-width: 500px;
`
const QACardTitle = styled.div`
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  width: 150px;
  margin-left: 5px;
  margin-top: -20px;
  margin-bottom: 15px;
  background-color: #f48fb1;
  border-radius: 8px;
  padding: 10px;
  font-size: 20px;
  color: white;
  text-align: center;
`
const Impact = styled.span`
  font-size: 20px;
  color: #616161;
`
const ImpactLarge = styled.span`
  font-size: 23px;
  color: #616161;
`
const Halfbr = styled.div`
  height: 7px;
`
const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
const Indent = styled.span`
  margin-left: 10px;
`

export default EighthCard;