import React from 'react';
import Pizza from './components/pizza';
import Menu from './components/menu';
import './index.css';
import Navbar from './components/navbar';

function App() {
  return(
    <div className="App">
        <Navbar/>
      <Pizza/>
      <Menu/>
    </div>
  );
}

export default App;
