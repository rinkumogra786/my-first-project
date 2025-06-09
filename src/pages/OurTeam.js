import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";

const teamMembers = [
  {
    name: "Rinku Mogra",
    role: "Team Lead",
    image: "https://via.placeholder.com/150",
    linkedin: "https://www.linkedin.com/in/rinkumogra",
  },
  {
    name: "Deepak Sharma",
    role: "Full Stack Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "https://www.linkedin.com/in/deepaksharma",
  },
  {
    name: "Namrita Verma",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    linkedin: "https://www.linkedin.com/in/namritaverma",
  },
  {
    name: "Shashank Patel",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "https://www.linkedin.com/in/shashankpatel",
  },
];

const OurTeam = () => {
  return (
    <Box bgcolor="#f3f4f6" minHeight="100vh" py={5}>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          fontWeight="bold"
          color="text.primary"
        >
          Meet Our Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={4}
                sx={{
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" component="h3">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                  <Box mt={2}>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      color="primary"
                    >
                      LinkedIn
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurTeam;
