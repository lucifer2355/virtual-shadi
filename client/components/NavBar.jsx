import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

const NavBar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar className='flex justify-between'>
          <Typography variant='h6' className='text-2xl'>
            Virtual Shadi
          </Typography>
          <Button color='inherit'>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
