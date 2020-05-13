import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import MenuText from "./MenuText";

import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';

const Menu = (props) => {
  return (
    <StyledLink to={"/" + props.to}>
      <Button>
        <Content>
          {props.icon === "1" ? <StyledLiveHelpIcon /> :
            props.icon === "2" ? <StyledAssignmentIcon /> :
              props.icon === "3" ? <StyledSearchIcon /> : <StyledLocalHospitalIcon />
          }
          <MenuText text={props.name} />
        </Content>
      </Button>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 10px;
  background-color: white;
  text-decoration: none;
  text-transform: none;
  margin: 10px;
`
const Content = styled.div`
  height: 120px;
  width: 120px;
`

const StyledLiveHelpIcon = styled(LiveHelpOutlinedIcon)`
  margin-top: 5px;
  width: 70px;
  height: 70px;
  color: #bcaaa4;
`
const StyledAssignmentIcon = styled(AssignmentOutlinedIcon)`
  margin-top: 5px;
  width: 70px;
  height: 70px;
  color: #bcaaa4;
`
const StyledLocalHospitalIcon = styled(LocalHospitalOutlinedIcon)`
  margin-top: 5px;
  width: 70px;
  height: 70px;
  color: #bcaaa4;
`
const StyledSearchIcon = styled(SearchOutlinedIcon)`
  margin-top: 5px;
  width: 70px;
  height: 70px;
  color: #bcaaa4;
`

export default Menu;