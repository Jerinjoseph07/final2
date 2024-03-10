import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardHeader, CardContent, Typography, Card, AppBar, Toolbar, Button, TextField } from '@mui/material';
import { Buffer } from 'buffer';
import { Link, useNavigate } from 'react-router-dom';

const Cland = () => {
  const [workers, setWorkers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3005/addworkview")
      .then(response => {
        setWorkers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleContact = (id) => {
    Navigate(`/workcon/${id}`);
  }

  

  const renderWorkers = () => {
    return workers.map((worker) => (
      <Card
        className="cards"
        key={worker._id}
        variant="outlined"
        style={{
          margin: '10px',
          boxShadow: '0px 2px 5px -1px rgba(50, 50, 93, 0.25)',
          width: '280px',
          height: '300px', // Adjust the height as needed
          borderRadius: '3%',
          display: 'flex',
          flexDirection: 'column', // Vertical layout
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <img
          src={`data:image/jpeg;base64,${Buffer.from(worker.image1.data).toString('base64')}`}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            width: '100px',
            height: '100px',
            marginTop: '10px',
          }}
          alt="Worker"
        />
        <div style={{ marginTop: '10px' }}>
          <CardHeader title={worker.serivce} />
          <CardContent>
            <Typography variant="body1">Location: {worker.location}</Typography>
          </CardContent>
          <CardContent>
            <button className='contact' onClick={() => handleContact(worker._id)}>
              more info
            </button>
          </CardContent>
        </div>
      </Card>
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
  <br/>
  <Typography align='center' color='#3b566f' variant="h4"> Find The Jobs That Suits You:</Typography>
          <br />
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {renderWorkers()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cland;
