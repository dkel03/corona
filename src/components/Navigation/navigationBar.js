import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
// material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Root>
      <AppBar position="static" color="white">
        <Toolbar>
          <MenuButton color="black" onClick={() => setToggle(!toggle)}>
            <MenuIcon/>
          </MenuButton>
          <Title>코로나 걱정끝!</Title>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer anchor="left" open={toggle} onClose={() => setToggle(!toggle)} onOpen={() => setToggle(!toggle)}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <StyledLink onClick={() => setToggle(!toggle)} to="/">Home</StyledLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <StyledLink onClick={() => setToggle(!toggle)} to="/about">About</StyledLink>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </Root>
  );
}

const Root = styled.div`
  flexGrow: 1
`
const Title = styled.h1`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 300;
`
const MenuButton = styled(IconButton)`
  margin-right: 10px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2f2f2f;
  font-size: 15px;
  text-align: center;
  font-weight: 500;
  margin-right:100px;
`

export default NavigationBar;