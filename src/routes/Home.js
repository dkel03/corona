import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

function Home() {
  return (
    <HomeContainer>
      <HomeTitle>CoronaCare</HomeTitle>
      <HomeText>
        이태원 클럽 등의 집단감염으로 인해<br />
        2차감염 및 N차 감염의 가능성이 높아지고 있습니다.<br />
        <br />
        본인의 현재 상황을 판단하고,<br /> 
        적절한 대응 방법을 알려드립니다.<br />
      </HomeText>
      <Button variant="contained" color="secondary">
        Go!!
      </Button>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  margin: 0 auto;
  font-size: 13px;
  margin-top: 30px;
  max-width: 800px;
`
const HomeTitle = styled.h1`
  padding: 10px;
  font-weight: 400;
`
const HomeText = styled.p`
  padding: 10px;
  line-height: 30px;
  font-size: 15px;
  font-weight: 300;
`


export default Home;
