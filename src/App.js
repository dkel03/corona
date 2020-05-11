import React from "react";
import {HashRouter, Route} from "react-router-dom";
import NavigationBar from "./Components/Navigation/navigationBar";
import Home from "./routes/home";
import About from "./routes/about";
import "./App.css"

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
