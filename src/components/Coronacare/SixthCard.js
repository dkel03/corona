import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const SixthCard = () => {
  return (
    <BrownCard>
      <BrownCardText>
        <Impact>접촉자</Impact> 이더라도, <br />
        역학조사를 통해 특정되지 않을 수도 있답니다..<br />
        그럴땐 본인이 <Impact>신고</Impact>하는 것이 바람직해요!<br />
        신고해야 정부의 관리를 받을 수 있답니다.<br />
        <Halfbr /><Halfbr />
        <QACard>
          <ImpactPink>접촉자 여부를 확인하는 방법 1</ImpactPink><br />
          확진자와 접촉했다고 생각되는 지역의 지자체에 연락하여 역학조사팀과 연결, 접촉여부를 판단합니다.<br /><Halfbr />
          <Impact>ex)</Impact> 신촌 다모토리5에 다녀온 경우<br />
          <Indent /><Indent /><Indent />--> 서대문구청에 연락!
        </QACard>
        <QACard>
          <ImpactPink>접촉자 여부를 확인하는 방법 2</ImpactPink><br />
          본인 거주지의 보건소에 연락,<br />
          접촉자 여부를 판정받습니다.
        </QACard>

        <Right>
          <BrownCardTitle>판정결과에 따라서는요?</BrownCardTitle>
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
  padding: 13px;
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
const Indent = styled.span`
  margin-left: 10px;
`

export default SixthCard;