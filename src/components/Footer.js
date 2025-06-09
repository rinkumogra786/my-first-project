import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2, textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
