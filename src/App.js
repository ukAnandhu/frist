import React from 'react'
import './css/main.css'
import HeaderBar from './components/Header'
 import Content from './components/Content'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
