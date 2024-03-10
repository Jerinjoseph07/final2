import React, { useEffect, useState } from 'react';
import { AppBar, Button, Card, CardContent, CardMedia, Container, Grid, Toolbar, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';

const Workcon = () => {
  const [professional, setProfessional] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("id:", id);
    axios.get(`http://localhost:3005/view/${id}`)
      .then(response => {
        setProfessional(response.data);
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSaveButtonClick = () => {
    // Add logic to save professional data
    // Example: axios.post('http://localhost:3005/save', professional);
    console.log('Saving professional data:', professional);
  };

  const renderProfessionalCard = () => (
    <Card style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)', display: 'flex', width:'1000px' }}>
      <CardMedia
        component="img"
        height="500"
        image={`data:image/jpeg;base64,${Buffer.from(professional.image1.data).toString('base64')}`}
        style={{ flex: 1 }}
      />
      <CardContent style={{ flex: 1, textAlign: 'left', fontSize:'30px'}}>
        <label>serivce:</label><b> {professional.serivce}</b> <br />
        <label>Description:</label><b> {professional.description}</b> <br />
        <label>Location:</label><b> {professional.location}</b> <br />
        <h5>Client info</h5>
        <label>Name:</label><b> {professional.name}</b> <br />
        <label>Phone No:</label><b> {professional.phone}</b> <br />
        <Button onClick={handleSaveButtonClick} color="primary">
                  Save
                </Button>
      </CardContent>
    
    </Card>
  );

  return (
    <>
      <div style={{ backgroundColor: '#c7ddcc', height: 'auto'  }}>
        <div align="center">
          <AppBar position="static" style={{ height: '80px', backgroundColor: '#abd699' }}>
            <Toolbar>
              <Typography variant="h6">
                Worker Connect
              </Typography>
              <div style={{ marginLeft: 'auto' }}>
                <Button component={Link} to="/nexttype" color="inherit">
                  Back
                </Button>
                
              </div>
            </Toolbar>
          </AppBar>
        </div>
        {professional && (
          <Grid container spacing={3} style={{ marginTop: '10px' }}>
            <Grid item xs={12} sm={6} md={4}>
              {renderProfessionalCard()}
            </Grid>
          </Grid>
        )}
      </div>
    </>
  );
};

export default Workcon;
