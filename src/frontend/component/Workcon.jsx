import React, { useEffect, useState } from 'react';
import { AppBar, Button, Card, CardContent, CardMedia, Container, Grid, Paper, TextField, Toolbar, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';


const Workcon = () => {
  const [professional, setProfessional] = useState(null);
  const { id } = useParams();
  const [inputs, setInputs] = useState({ "did":id,"name": '',"age":'',"phone":''});
  useEffect(() => {
    console.log("id:", id);
    axios.get(`http://localhost:3005/view/${id}`)
      .then(response => {
        setProfessional(response.data);
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  
  const savedata=()=>{
    // console.log("Clicked")
    console.log(inputs)
   axios.post("http://localhost:3005/booking",inputs) 
   .then((response) => {
    alert("Booked Successfully");
  })
  .catch(err => console.error("Error", err));
};




useEffect(() => {
  console.log("id:", id);
  axios.get(`http://localhost:3005/book/${id}`)
    .then(response => {
      
      console.log(response.data);
    })
    .catch(err => console.log(err));
}, [id]);


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

<Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Please Register</h2>
      <TextField label="Full Name" type="text" name="name" variant="outlined" value={inputs.fullname} onChange={inputHandler} fullWidth margin="normal" />
        <TextField label="Age" name='age' variant="outlined" type="number" value={inputs.age} onChange={inputHandler} fullWidth margin="normal" />
        <TextField label="Phone" name='phone' variant="outlined" type="text" value={inputs.phone} onChange={inputHandler} fullWidth margin="normal" />
        <Button variant="contained" color="primary" onClick={savedata} fullWidth style={{ marginTop: '20px' }}>Confirm Booking</Button>
        </Paper>
      </div>
    </>
  );
};

export default Workcon;
