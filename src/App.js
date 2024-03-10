
import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './frontend/signup/Login';
import Signup from './frontend/signup/Signup';
import Type from './frontend/component/Type';
import WorkerReg from './frontend/registration/WorkerReg';
import ClientReg from './frontend/registration/ClientReg';
import Landing from './frontend/landingpage/Landing';
import Addwork from './frontend/component/Addwork';
import Cland from './frontend/landingpage/Cland';
import Nexttype from './frontend/component/Nexttype';
import Workcon from './frontend/component/Workcon';



function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
   <Route path='/' element={<Login method='post' />}></Route>
   <Route path='/login' element={<Login method='post' />}></Route>
   <Route path='/signup' element={<Signup method='post' />}></Route>
   <Route path='/type' element={<Type method='post' />}></Route>
   <Route path='/wreg' element={<WorkerReg method='post' />}></Route>
   <Route path='/creg' element={<ClientReg method='post' />}></Route>
   <Route path='/wland' element={<Landing method='post' />}></Route>
   <Route path='/cland' element={<Cland method='get' />}></Route> 
   <Route path='/addwork' element={<Addwork method='post' />}></Route>
   <Route path='/nexttype' element={<Nexttype method='post' />}></Route>
   <Route path="/workcon/:id" element={<Workcon method='get'/>} />
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
