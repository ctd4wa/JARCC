import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import School from "./components/School";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <School />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
