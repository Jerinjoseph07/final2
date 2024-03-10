import { AppBar, Box, Button,TextField, Toolbar, Typography } from '@mui/material'
// import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const ClientReg = () => {

        var [inputs,setInputs]=useState({
          "name":'',
          "phone":'',
          "location":'',
        });
        var [selectedimage,setSelectedimage] = useState(null);
const handleimage =(event)=>{
const file = event.target.files[0];
setSelectedimage(file)
inputs.image1=file;
}

      
  const inputHandler =(event) =>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
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
 
    formdata.append('location',inputs.location);
    formdata.append('image1',selectedimage)
    fetch('http://localhost:3005/cnew',
    {method:'post',body:formdata,})
    .then((response)=>response.json())
    .then((data)=>{
    alert("record saved")
    })
    .catch((err)=>{
    console.log("error")
    })
    }
    
  return (
    <div style={{ backgroundColor: '#c7ddcc', height: '100vh'  }}>
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
      
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' ,
        backgroundColor: '#f0f0f0',boxShadow: '0px 2px 5px -1px rgba(50, 50, 93, 0.25)',
      alignItems: 'center',
      padding: '4px', borderRadius: '10px' }}>
          <br />
          <Typography variant="h5">
        Client Registration
      </Typography><br />

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
label=" Full Name" 
name="name"
 variant="outlined" 
 value={inputs.name}
  onChange={inputHandler}
  style={{ width: '300px' }} /> <br />
<TextField
id="outlined-basic"
label="Phone number" 
name="phone" 
variant="outlined" 
value={inputs.phone} 
onChange={inputHandler}
style={{ width: '300px' }} /><br />
<TextField 
id="outlined-basic"
label="location"
name="location"
variant="outlined"
value={inputs.location}
 onChange={inputHandler}
 style={{ width: '300px' }}/><br />
 <Button component={Link} to="/wland"
           color="primary"
            onClick={savedata}
               variant="contained"
               style={{ width: '230px', marginTop: '4px', marginBottom: '25px', backgroundColor: 'green' }}>
                
            SAVE
          </Button>
          
  
  
  
  </Box>
  </form>
    </div>
    </div>
      )
}

export default ClientReg