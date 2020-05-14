import React from "react";
import {HashRouter, Route} from "react-router-dom";
import NavigationBar from "./Components/Navigation/navigationBar";

// Routes
import Home from "./Routes/home";
import Coronacare from "./Routes/coronacare";
import Diagnose from "./Routes/diagnose";
import HospitalSearch from "./Routes/hospitalsearch";
import SafeHospitalSearch from "./Routes/safehospitalsearch"
import About from "./Routes/about";

// Styles
import "./App.css"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <NavigationBar />
        <Route path="/" exact={true} component={Home}  />
        <Route path="/coronacare" component={Coronacare} />
        <Route path="/diagnose" component={Diagnose} />
        <Route path="/hospitalsearch" component={HospitalSearch} />
        <Route path="/safehospitalsearch" component={SafeHospitalSearch} />
        <Route path="/about" component={About} />
      </HashRouter>
    </MuiThemeProvider>
  );
}

const theme = createMuiTheme({
  typography: {
    fontFamily: 'BMJUA',
  },
  palette: {
    primary: {
      light: '#ffc1e3',
      main: '#f48fb1',
      dark: '#bf5f82',
      contrastText: '#fafafa',
    },
    secondary: {
      light: '#efdcd5',
      main: '#bcaaa4',
      dark: '#8c7b75',
      contrastText: '#fafafa',
    },
  },
});


export default App;
