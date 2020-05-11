import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

// material-ui core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';

// material-ui core/List
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

// material-ui icons
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
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
          <Title>Corona Care</Title>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer anchor="left" open={toggle} onClose={() => setToggle(!toggle)} onOpen={() => setToggle(!toggle)}>
        <List>
          <ListItem>
            <NavTitle>Corona Care</NavTitle>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => setToggle(!toggle)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <StyledLink to="/">홈</StyledLink>
          </ListItem>
          <ListItem button onClick={() => setToggle(!toggle)} >
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <StyledLink to="/search">선별진료소 검색</StyledLink>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => setToggle(!toggle)}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <StyledLink to="/about">정보</StyledLink>
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
  margin-left: 10px;
  font-size: 20px;
  font-weight: 300;
`
const MenuButton = styled(IconButton)`
  margin-right: 10px;
`
const NavTitle = styled.h1`
  font-size: 18px;
  font-weight: 200;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2f2f2f;
  font-size: 15px;
  font-weight: 300;
  width: 130px;
  padding: 8px;
`

export default NavigationBar;