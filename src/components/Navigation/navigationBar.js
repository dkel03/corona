import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

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

// material-ui icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const useStyles = makeStyles({
  paper: {
    background: 'white'
  }
});

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);
  const styles = useStyles();

  return (
    <Root>
      <AppBar position="static" color="primary">
        <Toolbar>
          <MenuButton color="inherit" onClick={() => setToggle(!toggle)}>
            <MenuIcon/>
          </MenuButton>
          <Title variant="h5">코로나케어</Title>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer classes={{ paper: styles.paper }} anchor="left" open={toggle} onClose={() => setToggle(!toggle)} onOpen={() => setToggle(!toggle)}>
        <List>
          <ListItem>
            <NavTitle variant="h6">I HATE COVID-19 </NavTitle>
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem button onClick={() => setToggle(!toggle)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <StyledLink to="/"><Typography varient="body1">코로나 케어란</Typography></StyledLink>
          </ListItem>
                   
          <ListItem button onClick={() => setToggle(!toggle)}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <StyledLink to="/diagnose"><Typography varient="body1">자가진단</Typography></StyledLink>
          </ListItem>

          <Divider />

          <ListItem button onClick={() => setToggle(!toggle)} >
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <StyledLink to="/search"><Typography varient="body1">선별진료소 검색</Typography></StyledLink>
          </ListItem>

          <ListItem button onClick={() => setToggle(!toggle)}>
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <StyledLink to="/safehospital"><Typography varient="body1">안심병원 검색</Typography></StyledLink>
          </ListItem>

          <Divider />
          <ListItem button onClick={() => setToggle(!toggle)}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <StyledLink to="/about"><Typography varient="body1">정보</Typography></StyledLink>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </Root>
  );
}

const Root = styled.div`
  flexGrow: 1
`
const Title = styled(Typography)`
  margin-top: 1px;
`
const MenuButton = styled(IconButton)`
  margin-right: 10px;
`
const NavTitle = styled(Typography)`
  margin-left: 12px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2f2f2f;
  font-size: 15px;
  font-weight: 400;
  width: 130px;
  padding: 8px;
`

export default NavigationBar;