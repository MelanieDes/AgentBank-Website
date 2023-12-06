import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Sign from "./Pages/Sign";
import Nav from "./components/Nav";
import Footer from './components/Footer';
// import Error from "./Pages/Error";

function App() {  
  return (   
      <Router>    
        <Routes>
          <Nav />
          <Route path='/' element={<Home />} />              
          <Route path='/users' element={<Users />} />        
          <Route path='/sign' element={<Sign />} />
          {/* <Route path='/*' element={<Error />} /> */}
          <Footer />
        </Routes>            
      </Router>    
  );
}

export default App;
