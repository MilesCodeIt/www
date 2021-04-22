import React from 'react';
import './App.css';
import './components/navbar';
import Navbar from './components/navbar';
import Content from './components/content';


function App() {
  return (
    <div className="App">       
       <Navbar />
       <Content />       
    </div>
  );
}

export default App;
