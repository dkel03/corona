import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const FourthCard = () => {
  return (
    <BrownCard>
      <BrownCardText>
        <Impact>"접촉자"</Impact>에 대한 사례 정의는 다음과 같아요.
        <br /><Halfbr /><Halfbr />
        <QACard>
          <Impact>1. </Impact>확진환자 유증상기에 2m 이내 접촉한 사람<br />
          <Impact>2. </Impact>확진환자가 폐쇄 공간에서 마스크를 쓰지 않고 기침을 했을 당시 같이 있던 사람
        </QACard>
        <Halfbr /><Halfbr />
        지자체는 역학조사를 실시하여 접촉자를<br />
        특정한 뒤, <Impact>자가격리 대상자</Impact>로 분류합니다.<br />
        어기면 벌금내야 하는, 강력한 조치죠...
        <br /><br />
        언론에 보도되는 곳들에 내가 다녀왔는데, <br />
        나에게 연락이 한통도 오지 않았다면? <br />
        나는 <Impact>접촉자</Impact>가 아닌걸까요?
        <br /><br />
        <Right>
          <BrownCardTitle>그렇지 않아요!!! <span role="img">👉</span></BrownCardTitle>
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
  line-height: 30px;
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