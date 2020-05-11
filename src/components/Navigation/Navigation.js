import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Title>코로나 선별진료소</Title>
      <Link to="/about">About</Link>
    </div>
  );
}

const Title = styled.span`
  text-decoration: none;
  color: #2f2f2f;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
`

export default Navigation;