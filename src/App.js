import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Header from "./component/header/header.component";
import Sidebar from "./component/sidebar/sidebar.component";
import Footer from "./component/footer/footer.component";
import "./App.scss";

function App() {
  const [visibility, setVisibility] = useState(false);
  const showSidebar = () => {
    setVisibility(true);
  };
  const hideSidebar = () => {
    setVisibility(false);
  };

  return (
    <div className="App">
      <Router basename="ericksixto-porftoliopage">
        <Header showSidebar={showSidebar} />
        <Sidebar visible={visibility} hideSidebar={hideSidebar} />
        <Switch>
          <Route basename="ericksixto-porftoliopage" exact path="/">
            <Home />
          </Route>

          <Route basename="ericksixto-porftoliopage" path="/about">
            <About />
          </Route>

          <Route basename="ericksixto-porftoliopage" path="/contact">
            <Contact />
          </Route>

          <Route basename="ericksixto-porftoliopage" path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
