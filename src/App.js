import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Header from "./component/header/header.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
