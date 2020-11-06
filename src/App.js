import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Services from "./pages/services";
import Header from "./component/header/header.component";
import Sidebar from "./component/sidebar/sidebar.component";
import Footer from "./component/footer/footer.component";
import ScrollToTop from "./component/scroll-to-top/scroll-to-top.component";
import "./App.scss";

function App() {
  const [visibility, setVisibility] = useState(false);
  const showSidebar = () => {
    setVisibility(true);
    document.body.style.overflowY = "hidden";
  };
  const hideSidebar = () => {
    setVisibility(false);
    document.body.style.overflowY = "scroll";
  };

  return (
    <div className="App">
      <Router basename="ericksixto-porftoliopage">
        <Header showSidebar={showSidebar} />
        <Sidebar visible={visibility} hideSidebar={hideSidebar} />

        <ScrollToTop>
          <Switch>
            <Route basename="/ericksixto-porftoliopage" exact path="/">
              <Home />
            </Route>

            <Route basename="/ericksixto-porftoliopage" path="/about">
              <About />
            </Route>

            <Route basename="/ericksixto-porftoliopage" path="/contact">
              <Contact />
            </Route>

            <Route basename="/ericksixto-porftoliopage" path="/projects">
              <Projects />
            </Route>
            <Route basename="/ericksixto-porftoliopage" path="/services">
              <Services />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
