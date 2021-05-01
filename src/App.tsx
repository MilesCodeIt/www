import React from 'react';
import './components/navbar';
import Navbar from './components/navbar';
import Content from './components/content';
import Cursor from "./components/cursor";

/*<Cursor />*/

function App() {
  return (
    <div className="App">  
       <Navbar />
       <Content />       
    </div>
  );
}

export default App;

