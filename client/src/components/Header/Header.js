import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" gutterBottom>
        Header
      </Typography>
    </Toolbar>
  </AppBar>
);
export default Header;
