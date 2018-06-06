import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton />  // This shit is for an Icon button on the Right Top side of Header */}

        <Typography variant="display1" color='inherit'>Header</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
