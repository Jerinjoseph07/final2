import React from 'react';
import { AppBar, Box, Container, Link, Toolbar, Typography } from '@mui/material';


function App() {
  return (
    <div style={{ backgroundColor: '#c7ddcc', height: '100vh' }}>
    <AppBar position="static" style={{ height: '80px', backgroundColor: '#abd699' }}>
      <Toolbar>
        <Typography variant="h5">
          Worker Connect
        </Typography>
      </Toolbar>
    </AppBar>  
    <br/>
   <Typography align='center' color='#3b566f' variant="h4"> Please select your role:</Typography>
      <Container> 
        <br />
        <Box display="flex" justifyContent="space-between">
          <Link href="/wreg" style={{ textDecoration: 'none' }}>
            <Box
              component="div"
              width="45%"
              height="200px"
              bgcolor="primary.main"
              color="white"
              p={11}
              textAlign="center"
              
              
            >
                
              <Typography variant="h5">Worker</Typography>
            </Box>
          </Link>
          <Link href="/creg" style={{ textDecoration: 'none' }}>
            <Box
              component="div"
              width="45%"
              height="200px"
              bgcolor="secondary.main"
              color="white"
              p={11}
              textAlign="center"
            
            >
              <Typography variant="h5">Client</Typography>
            </Box>
          </Link>
        </Box>
      </Container>
      </div>
  
  );
}

export default App;
