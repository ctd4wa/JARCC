import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Footer = props => (
  <Paper>
    <Tabs indicatorColor="primary" textColor="primary" centered>
      <Tab label="Dashboard" />
      <Tab label="Log In" />
      <Tab label="School" />
    </Tabs>
  </Paper>
);
export default Footer;
