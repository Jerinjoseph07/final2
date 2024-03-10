import React from 'react';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import './type.css'

function Nexttype() {
  return (
    <div style={{ backgroundColor: '#c7ddcc', height: '100vh'  }}>
    <AppBar position="static" style={{ height: '80px', backgroundColor: '#abd699' }}>
      <Toolbar>
        <Typography variant="h5">
          Worker Connect
        </Typography>
      </Toolbar>
    </AppBar>  
    <br/>
    <br/>
    <Typography align='center' color='#3b566f' variant="h4"> Please select your role:</Typography>
    <br/>
    <div style={{ display: 'flex', flexDirection: 'row'  }}>
  <div className='card' style={{ marginBottom: '20px' , marginLeft: '345px', marginTop:'30px' }}>
  <h3>Do You Need Worker</h3>
  <Link href="/wland">
    <button className="button-34" role="button">Client</button>
    </Link> 
  </div>

  <div className='card' style={{ marginBottom: '20px', marginLeft: '30px', marginTop: '30px'}}>
    <h3>Are You Looking For Work</h3>
    <Link href="/cland">
    <button className="button-34" role="button">Worker</button>
    </Link>
  </div>
</div>


      
      </div>
  
  );
}

export default Nexttype;
