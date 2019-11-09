import React from 'react';
import Players from './Components/Players.js'
import './App.css'
import NavBar from './Components/NavBar.js'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>
        <Players />
      </section>
    </>
  );
}

export default App;
