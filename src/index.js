import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css';
import Nav from "./components/Nav";
import Footer from './components/Footer';


// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <React.StrictMode>
      <Provider store={store}>   
        <Nav />      
        <App />    
        <Footer />    
      </Provider>  
    </React.StrictMode>    
  );
    
  



