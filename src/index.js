import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css';
import Nav from "./components/Nav";

// Redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import Footer from './components/Footer';
import { getPosts } from './actions/post.actions';

const store =configureStore({
  reducer: rootReducer,
  devTools: true,
})

store.dispatch(getPosts());

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


