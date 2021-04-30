import React from 'react';
import './App.css';
import './components/navbar';
import Navbar from './components/navbar';
import Content from './components/content';
import Cursor from "./components/cursor";


function App() {
  return (
    <div className="App">    
      <Cursor />   
       <Navbar />
       <Content />       
    </div>
  );
}

export default App;

