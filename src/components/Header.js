import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          MyLogo
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/aboutus">About Us</Button>
          <Button color="inherit" component={Link} to="/ourteam">Our Team</Button>
          <Button color="inherit" component={Link} to="/contactus">Contact Us</Button>
          <Button color="inherit" component={Link} to="/careers">Careers</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
