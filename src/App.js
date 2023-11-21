import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Sign from "./Pages/Sign";


function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path='/' element={<Home />} />              
        <Route path='/users' element={<Users />} />        
        <Route path='/sign' element={<Sign />} />
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>            
  </BrowserRouter>
  );
}

export default App;
