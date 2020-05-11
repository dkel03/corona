import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutContainer>
      <AboutText>
        “코로나가 불안할때”
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
  height: 100px;
  margin-top: 10px;
  font-weight: 300;
`

const AboutText = styled.span`
  font-size: 15px;
`

export default About;