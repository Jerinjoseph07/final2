import { AppBar, Box, Button,TextField, Toolbar, Typography,} from '@mui/material'
// import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';



const Addwork = () => {

        var [inputs,setInputs]=useState({
          serivce:'',
          description:'',
          name:'',
          phone:'',
          location:'',
          
         
        });
        var [selectedimage,setSelectedimage] = useState(null);
const handleimage =(event)=>{
const file = event.target.files[0];
setSelectedimage(file)
inputs.image1=file;
}

      
  const inputHandler =(event) =>{
    const {name,value}=event.target
    setInputs((prevInputs)=>({...prevInputs,[name]:value}))
    
  }
  // const addHandler=() =>{
  //   axios.post("http://localhost:3005/new",inputs)
  //   .then((Response)=>{
  //     alert("record saved")
  //   })
  //     .catch(err=>console.log(err))
  //   }

  const savedata =()=>{
    const formdata = new FormData();
    formdata.append('name',inputs.name);
    formdata.append('phone',inputs.phone);
    formdata.append('serivce',inputs.serivce);
    formdata.append('description',inputs.description);
   
    formdata.append('location',inputs.location);
    formdata.append('image1',selectedimage)
    fetch('http://localhost:3005/addwork',{
    method: 'post',
      body: formdata,
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
      <div style={{ backgroundColor: '#c7ddcc', height: '140vh'  }}>
      <div align='center'>
    <AppBar position="static" style={{ height: '80px', backgroundColor: '#abd699' }}>
      <Toolbar>
        <Typography variant="h5">
          Worker Connect
        </Typography>
      </Toolbar>
    </AppBar>  
  <br></br>
      <form >
      
        <Box sx={{ display: 'flex', flexDirection: 'column',backgroundColor: '#f0f0f0',borderRadius: '5px',boxShadow: '4px 6px 6px rgba(0, 0, 0, 0.3)',
      alignItems: 'center',
      padding: '10px', 
      width:'350px'}}>
          <br />
          <Typography variant="h6">
        Add work
      </Typography><br />
    
      <br></br>
      
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: 'none' }}
        onChange={handleimage}
      />
       {selectedimage && (
        <img
          src={URL.createObjectURL(selectedimage)}
          alt="Profile"
          style={{ borderRadius: '50%', marginTop: '10px', width: '100px', height: '100px' }}
        />
      )}
     
      <label htmlFor="icon-button-file">
        <AddAPhotoIcon fontSize="large" />
      </label>
          <br />

    <TextField     
label=" serivce" 
name="serivce"
 variant="outlined" 
 value={inputs.serivce}
  onChange={inputHandler}
  style={{ width: '300px' }} /> <br />

<TextField 
id="outlined-multiline-static"
label="description"
name="description"
variant="outlined"
multiline
          rows={3}
          defaultValue="description"
value={inputs.description}
 onChange={inputHandler}
 style={{ width: '300px' }}/><br />


 <h4>Personal detials :</h4>
 
 <TextField
              label='Full Name'
              name='name'
              variant='outlined'
              value={inputs.name}
              onChange={inputHandler}
              style={{ width: '300px' }}
            />
            <br />
            <TextField
              id='outlined-basic'
              label='Phone number'
              name='phone'
              variant='outlined'
              value={inputs.phone}
              onChange={inputHandler}
              style={{ width: '300px' }}
            />
            <br />
            <TextField 
id="outlined-basic"
label="location"
name="location"
variant="outlined"
value={inputs.location}
 onChange={inputHandler}
 style={{ width: '300px' }}/><br />


  
  
  <Button variant="contained" onClick={savedata}
   style={{ width: '230px', marginTop: '4px', marginBottom: '25px', backgroundColor: 'green' }}>
    Upload</Button>
  </Box>
  </form>
    </div>
    </div>
  )
}
  

export default Addwork