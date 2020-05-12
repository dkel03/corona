import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

function About() {
  return (
    <AboutContainer>
      <Title>정보</Title>
      <SubTitle>About & Info</SubTitle>
      <BrownCard>
        <BrownCardTitle>Data 출처 & License</BrownCardTitle>
        <BrownCardText>
          <Impact>- </Impact>건강보험심사평가원 코로나-19 병원 정보<br /> 
          <Impact>- </Impact>배민 주아체
        </BrownCardText>
        <BrownCardTitle>개발 스택</BrownCardTitle>
        <BrownCardText>
          <Impact>- </Impact> NodeJs + Express <Impact>(REST API)</Impact><br /> 
          <Impact>- </Impact> React + Material UI <Impact>(FrontEnd)</Impact>
        </BrownCardText>
        <BrownCardTitle>Info</BrownCardTitle>
        <BrownCardText>
          <Impact>- </Impact> 김장영 (Jay Kim) <br />
          <Impact>- </Impact> dkel03@korea.ac.kr <br />
          <Impact>- </Impact> facebook.com/jangyoung0108
        </BrownCardText>
      </BrownCard>
    </AboutContainer>
  );
}


const AboutContainer = styled.div`
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  margin: 0 auto;
  font-size: 13px;
  margin-top: 20px;
  max-width: 1000px;
`
const Title = styled(Typography).attrs({
  variant: "h3",
  color: "secondary"
})`
  margin-top: -10px;
  padding: 10px;
`;
const SubTitle = styled(Typography).attrs({
  varient: "subtitle",
  color: "primary"
})`
  padding: 10px;
  margin-top: -20px;
  margin-left: 2px;
`
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
  margin-top: -15px;
  padding: 10px;
  line-height: 25px;
`
const Impact = styled.span`
  font-size: 17px;
  margin-right: 2px;
  color: #616161;
`

export default About;