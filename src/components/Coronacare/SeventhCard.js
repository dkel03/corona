import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const SeventhCard = () => {
  return (
    <BrownCard>
      <BrownCardText>
        접촉자로 분류 <Impact>된다면</Impact><br />
        <QACard>
          <Impact>- </Impact>확진자와 접촉한 날로부터 2주간<br />
          <Halfbr />
          <Indent /><Indent /><Impact>자가격리대상</Impact><br />
          <Halfbr />
          <Impact>- </Impact>증상 있을시 선별진료소에서 무료로 검사가능
        </QACard>
        만약 접촉자로 분류 <Impact>되지 않는다면</Impact><br />
        <QACard>  
        <Impact>- </Impact>능동감시대상자 혹은 외출자제 권고<br />
        <Impact>- </Impact>이 경우, 만약 불안하면 본인부담 검사<br />
        <Indent />(양성 판정 시, 환불가능)<br />
        <Impact>- </Impact>검사를 받고 싶다면 선별진료소를 찾되,<br />
        <Impact>- </Impact>보건소가 아닌 선별진료소를 찾아야함<br />
        <Indent />(보건소는 유료검사가 안됨)
        </QACard>
        ※ 최근 이태원, 논현동 방문자의 경우에는<br />
        <Indent />예외입니다
        <br />
        <Right>
          <BrownCardTitle>어느정도 감이 잡히시나요?</BrownCardTitle>
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

export default SeventhCard;