import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        hi
        <Button variant="contained" color='secondary'>Default</Button>
         <img src={logo} className="App-logo" alt="logo" />
       
        
      </header>
    </div>
  );
}

export default App;