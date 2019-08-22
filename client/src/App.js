import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import School from "./components/School";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homework from "./components/Homework/Homework";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={School} />
            <Route exact path="/homework" component={Homework} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
