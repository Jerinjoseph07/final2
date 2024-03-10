import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './landing.css';
import { Card, CardHeader, CardContent, Typography, AppBar, Toolbar, Button, TextField } from '@mui/material';
import { Buffer } from 'buffer';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [workers, setWorkers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3005/view")
      .then(response => {
        setWorkers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleContact = (worker) => {
    console.log(`Contact ${worker.name}`);
    // Implement your logic for handling contact here
  };

  const renderWorkers = () => {
    const filteredWorkers = workers.filter(worker =>
      worker.job.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filteredWorkers.map((worker) => (
      <div className='page-color'>
        <Card className="cards" key={worker._id} variant="outlined" style={{ marginTop: '10px', marginBottom: '10px',
        boxShadow: '0px 2px 5px -1px rgba(50, 50, 93, 0.25)', width: '280px',height: '390px', marginLeft: '10px', 
        borderRadius: '3%' }}>
        <img
          src={`data:image/jpeg;base64,${Buffer.from(worker.image1.data).toString('base64')}`}
          style={{ borderRadius: '50%', objectFit: 'cover', width: '100px', height: '100px', marginTop: '10px', marginLeft: '10px' }}
          alt="Worker"
        />
        <CardHeader
          title={worker.name}
          subheader={worker.job}
        />
        <CardContent>
          <Typography variant="body1">
            Phone: {worker.phone}
          </Typography>
          <Typography variant="body1">
            Experience: {worker.experience}
          </Typography>
          <Typography variant="body1">
            Location: {worker.location}
          </Typography>
        </CardContent>
        <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='contact' onClick={() => handleContact(worker)}>Contact</button>
        </CardContent>
      </Card>
      </div>
    ));
  };

  return (
    <>
      <div style={{ backgroundColor: '#c7ddcc', height: 'auto'  }}>
    <div align="center">
    <AppBar position="static" style={{ height: '80px', backgroundColor: '#abd699' }}>
    <Toolbar>
      <Typography variant="h6">
      Worker Connect
      </Typography>

     <TextField
  label="Search"
  variant="outlined"
  size="small"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    marginLeft: '700px', // Change left margin
    marginRight: '20px', // Change right margin
    borderRadius: '20px', // Change roundness
    width: '250px', // Change width
  }}
/>

      <div style={{ marginLeft: 'auto' }}>
         
          <Button component={Link} to="/nexttype" color="inherit">
            Back
          </Button>
          <Button component={Link} to="/addwork" color="inherit">
            Add work
          </Button>
          </div>
    </Toolbar>
  </AppBar>
  <br></br>
  <Typography align='center' color='#3b566f' variant="h4"> Daily Experts For Your All Needs:</Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {renderWorkers()}
      </div>
      </div>
      </div>
    </>
  );
};

export default Landing;
