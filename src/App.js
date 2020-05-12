import React from "react";
import {HashRouter, Route} from "react-router-dom";
import NavigationBar from "./Components/Navigation/navigationBar";
import Home from "./routes/home";
import Search from "./routes/search";
import About from "./routes/about";
import "./App.css"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
      dark: '##8c7b75',
      contrastText: '#fafafa',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <NavigationBar />
        <Route path="/" exact={true} component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/about" component={About} />
      </HashRouter>
    </MuiThemeProvider>
  );
}

export default App;
