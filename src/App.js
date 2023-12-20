import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Sign from "./Pages/Sign";
import Error from "./Pages/Error";
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

function App() {  

  const token = useSelector((state) => state.auth.token);

  return (   
      <Router>  
        <Nav />  
        <Routes>
          <Route path='/' element={<Home />} />              
          <Route path='/user' element={token ? <Users /> : <Error />} />        
          <Route path='/sign' element={<Sign />} />
          <Route path='/*' element={<Error />} />
        </Routes> 
        <Footer />           
      </Router>    
  );
}

export default App;
