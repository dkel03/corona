import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./navigation.css"

// material-ui core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// material-ui core/List
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Quarterbr from "../Card/Quarterbr";

// material-ui icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

const useStyles = makeStyles({
  paper: {
    background: 'white',
    color: "#232323"
  }
});

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);
  const styles = useStyles();

  return (
    <Root>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <div className="toolbarDiv">
            <div className="toolbarTitleDiv">
              <Title variant="h6">
                <StyledLinkHome to="/">코로나케어</StyledLinkHome>
              </Title>
            </div>
            <div className="toolbarButtonDiv">
              <MenuButton size="small" color="inherit" onClick={() => setToggle(!toggle)}>
                <MenuIcon/>
              </MenuButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer classes={{ paper: styles.paper }} anchor="right" open={toggle} onClose={() => setToggle(!toggle)} onOpen={() => setToggle(!toggle)}>
        <Typography>
          <List>
            <ListItem>
              <NavTitle variant="h6">I HATE COVID-19 </NavTitle>
            </ListItem>
            <ListItem button onClick={() => setToggle(!toggle)}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <StyledLink to="/">홈</StyledLink>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => setToggle(!toggle)}>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <StyledLink to="/coronacare">코로나 케어란?</StyledLink>
            </ListItem>
            <ListItem button onClick={() => setToggle(!toggle)}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <StyledLink to="/diagnose">자가진단</StyledLink>
            </ListItem>
            <Quarterbr />
            <Divider />
            <Quarterbr />
            <ListItem button onClick={() => setToggle(!toggle)} >
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <StyledLink to="/hospitalsearch">선별진료소 검색</StyledLink>
            </ListItem>
            <ListItem button onClick={() => setToggle(!toggle)}>
              <ListItemIcon>
                <LocalHospitalIcon />
              </ListItemIcon>
              <StyledLink to="/safehospitalsearch">안심병원 검색</StyledLink>
            </ListItem>
            <Divider />
            <ListItem button onClick={() => setToggle(!toggle)}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <StyledLink to="/about">About</StyledLink>
            </ListItem>
          </List>
        </Typography>
      </SwipeableDrawer>
    </Root>
  );
}

const Root = styled.div`
  flexGrow: 1
`
const Title = styled(Typography).attrs({

})`
`
const MenuButton = styled(IconButton)`
  margin-right: 10px;
`
const NavTitle = styled(Typography)`
  margin-left: 12px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #232323;
  font-size: 16px;
  font-weight: 700;
  width: 130px;
  padding: 5px;
`
const StyledLinkHome = styled(Link)`
  letter-spacing: 3px;
  text-decoration: none;
  color: #232323;
  font-size: 17px;
  font-weight: bold;
  text-decoration: underline;
`

export default NavigationBar;