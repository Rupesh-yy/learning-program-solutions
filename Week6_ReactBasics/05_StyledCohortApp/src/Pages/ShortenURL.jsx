import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Alert
} from '@mui/material';

const ShortenURL = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [validity, setValidity] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
      setError('Please enter a valid URL starting with http:// or https://');
      setShortUrl('');
      return;
    }

    setError('');

    // Mock shortened URL
    const randomCode = shortCode || Math.random().toString(36).substring(2, 8);
    const resultUrl = `http://short.ly/${randomCode}`;
    setShortUrl(resultUrl);

    // Clear form
    setOriginalUrl('');
    setShortCode('');
    setValidity('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom mt={4}>
        Shorten a New URL
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Enter Long URL"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Optional: Custom Shortcode"
              value={shortCode}
              onChange={(e) => setShortCode(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="number"
              label="Optional: Validity (in days)"
              value={validity}
              onChange={(e) => setValidity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>
              Shorten URL
            </Button>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )}
          {shortUrl && (
            <Grid item xs={12}>
              <Alert severity="success">
                Short URL: <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
              </Alert>
            </Grid>
          )}
        </Grid>
      </form>
    </Container>
  );
};

export default ShortenURL;
