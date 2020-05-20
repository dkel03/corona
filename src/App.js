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
  shadows: ["none"],
  typography: {
    fontFamily: 'BBTreeGR',
  },
  palette: {
    primary: {
      main: '#f8e6e6',
      contrastText: '#232323',
    },
    secondary: {
      main: '#625b5b',
      contrastText: 'white',
    },
  },
});


export default App;
