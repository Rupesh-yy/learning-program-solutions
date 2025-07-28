import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Container, Grid } from "@mui/material";

const Statistics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/urls")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Statistics
      </Typography>

      {data.length === 0 ? (
        <Typography>No data found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {data.map((item, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1">
                    <strong>Original URL:</strong> {item.originalUrl}
                  </Typography>
                  <Typography variant="subtitle2">
                    <strong>Short URL:</strong>{" "}
                    <a
                      href={`http://localhost:3000/${item.shortCode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.shortCode}
                    </a>
                  </Typography>
                  <Typography variant="body2">
                    <strong>Clicks:</strong> {item.clicks || 0}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Statistics;
