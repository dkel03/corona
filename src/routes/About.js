import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

function About() {
  return (
    <AboutContainer>
      <Title>정보</Title>
      <SubTitle>About & Info</SubTitle>
      <BrownCard>
        <BrownCardTitle>정보 출처</BrownCardTitle>
        <BrownCardText>
          <Impact>- </Impact>건강보험심사평가원 코로나-19 병원 정보 api<br /> 
          <Impact>- </Impact>코로나바이러스감염증-19 정부 홈페이지<br />
          <Impact>- </Impact>코로나19지침 검색 어플리케이션<br />
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
          <Impact>- </Impact> facebook.com/jangyoung0108<br />
        </BrownCardText>
        <BrownCardText>
          <br />
          <Impact>부정확한 정보에 대한 피드백 부탁드립니다!</Impact><br />
          <Impact>또한 코로나의 빠른 종식을 기원합니다...</Impact>
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