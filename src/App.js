import React from 'react';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Routercomp from './component/Routercomp';


function App() {
  return (
    <div >

    <Routercomp></Routercomp>
    
<Routes> 

<Route path='/' element={<Home />}></Route>
<Route path='aboutus' element={<Aboutus />}></Route>
<Route path='contactus' element={<Contactus />}></Route>


</Routes>

    
   
   
    </div>
  );
}

export default App;
