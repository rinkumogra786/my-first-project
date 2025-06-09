import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';

const teamMembers = [
  { name: 'Ravi Sharma', role: 'Founder & CEO', image: '' },
  { name: 'Neha Verma', role: 'CTO', image: '' },
  { name: 'Amit Singh', role: 'Lead Developer', image: '' }
];

const AboutUs = () => {
  var result=localStorage.getItem("name");
  console.log(result);
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>

      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        We are a passionate team dedicated to building user-centric web solutions. Since our inception, we have been committed to innovation, quality, and customer satisfaction.
      </Typography>

      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" color="text.secondary">
          To deliver high-quality digital products that improve the way people work and live. We aim to empower businesses through innovative technologies and customer-first thinking.
        </Typography>
      </Box>

      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ textAlign: 'center', py: 3 }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;
