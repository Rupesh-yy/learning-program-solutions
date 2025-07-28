import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom mt={4}>
        Welcome to the URL Shortener
      </Typography>
      <Typography>
        Use this tool to shorten long URLs, track their statistics, and set expiration rules.
      </Typography>
    </Container>
  );
};

export default Home;
