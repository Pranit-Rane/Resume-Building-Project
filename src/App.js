import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
