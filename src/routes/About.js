import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutContainer>
      <AboutTitle>About</AboutTitle>
      <AboutText>
        코로나가 불안할때<br />
        접촉자에 해당하는지를 판별하고, 선별진료소를 찾아보세요<br />
      </AboutText>
      <AboutText>
        Contact: dkel03@korea.ac.kr
      </AboutText>
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
  margin-top: 10px;
`
const AboutTitle = styled.h1`
  padding: 10px;
  font-weight: 400;
`
const AboutText = styled.p`
  padding: 10px;
  line-height: 30px;
  font-size: 15px;
  font-weight: 300;
`

export default About;