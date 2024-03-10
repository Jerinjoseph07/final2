import { AppBar, Box, Button, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const WorkerReg = () => {
  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    job: '',
    experience: '',
    location: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const saveData = () => {
    const formData = new FormData();
    formData.append('name', inputs.name);
    formData.append('phone', inputs.phone);
    formData.append('job', inputs.job);
    formData.append('experience', inputs.experience);
    formData.append('location', inputs.location);
    formData.append('image1', selectedImage);

    fetch('http://localhost:3005/new', {
      method: 'post',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Record saved');
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  return (
    <div style={{ backgroundColor: '#c7ddcc', height: 'auto'  }}>
      <div align='center'>
    <AppBar position="static" style={{ height: '80px', backgroundColor: '#abd699' }}>
      <Toolbar>
        <Typography variant="h5">
          Worker Connect
        </Typography>
      </Toolbar>
    </AppBar>  
    <br/>
      <form >
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' ,
        backgroundColor: '#f0f0f0',boxShadow: '0px 2px 5px -1px rgba(50, 50, 93, 0.25)',
      alignItems: 'center',
      padding: '4px', borderRadius: '10px' }}>
          <br />
          <Typography variant="h5">
        Worker Registration
      </Typography><br />

      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: 'none' }}
        onChange={handleImage}
      />
       {selectedImage && (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Profile"
          style={{ borderRadius: '50%', marginTop: '10px', width: '100px', height: '100px' }}
        />
      )}
     
      <label htmlFor="icon-button-file">
        <AddAPhotoIcon fontSize="large" />
      </label>
     
          <br />
          <TextField
            label="Full Name"
            name="name"
            variant="outlined"
            value={inputs.name}
            onChange={inputHandler}
            style={{ width: '300px' }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Phone number"
            name="phone"
            variant="outlined"
            value={inputs.phone}
            onChange={inputHandler}
            style={{ width: '300px' }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Applying for Position"
            name="job"
            variant="outlined"
            value={inputs.job}
            onChange={inputHandler}
            style={{ width: '300px' }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Experience"
            name="experience"
            variant="outlined"
            value={inputs.experience}
            onChange={inputHandler}
            style={{ width: '300px' }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Location"
            name="location"
            variant="outlined"
            value={inputs.location}
            onChange={inputHandler}
            style={{ width: '300px' }}
          />
          <br />
          

          <br />
          <Button component={Link} to="/cland"
            onClick={saveData}
               variant="contained"
               style={{ width: '230px', marginTop: '4px', marginBottom: '25px', backgroundColor: 'green' }}>
            Save
          </Button>
          
        </Box>
      </form>
    </div>
    </div>
  );
};

export default WorkerReg;
