import React,{useState} from 'react';
import {
  Container, Box, Typography, Button, Grid, Card, CardContent, Avatar,
  TextField
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import SupportIcon from '@mui/icons-material/Support';

 
const services = [
  {
    title: 'Custom Software',
    icon: <CodeIcon fontSize="large" />,
    description: 'Tailored solutions for business needs with modern technologies.'
  },
  {
    title: 'IT Consulting',
    icon: <BusinessIcon fontSize="large" />,
    description: 'Expert guidance to accelerate your digital transformation.'
  },
  {
    title: 'Ongoing Support',
    icon: <SupportIcon fontSize="large" />,
    description: '24/7 support services for seamless business continuity.'
  }
];



const HomePage = () => {
  const [name, setName] = useState();
  localStorage.setItem(name,"Rinku");
  const [nameData, setNameData] = useState({first_name:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNameData((prev) => ({
      ...prev,
      [name]: value,
    }));
    localStorage.setItem(name, value);
  };
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', nameData);
    setNameData({first_name:''});
  };
  return (
    <Box component="form" onSubmit={handleSubmit}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 10,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h3" gutterBottom>
            Transforming Ideas into Digital Reality
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            We craft software solutions to drive innovation and boost growth.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ textAlign: 'center', py: 3, px: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: 'secondary.main',
                    width: 56,
                    height: 56,
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  {service.icon}
                </Avatar>
                <CardContent>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ bgcolor: '#f9f9f9', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <img
                src="https://via.placeholder.com/500x350"
                alt="Why Choose Us"
                width="100%"
                style={{ borderRadius: '12px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Why Choose Us?
              </Typography>
              <Typography variant="body1" gutterBottom>
                We bring a unique blend of innovation, experience, and technical
                expertise to every project. Our commitment to quality and
                customer satisfaction makes us the perfect tech partner.
              </Typography>
              <ul>
                <li>15+ Years of Experience</li>
                <li>Dedicated Support Team</li>
                <li>Agile & Scalable Solutions</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          About Our Company
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We are a leading software development company, delivering web and
          mobile solutions globally. Our mission is to empower businesses with
          digital solutions that drive success.
        </Typography>
      </Container>
 <TextField
          label="First Name"
          name="first_name"
          value={nameData.first_name}
          onChange={handleChange}
          fullWidth
          required
        />
      {/* Footer */}
       <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
    </Box>
  );
};

export default HomePage;
