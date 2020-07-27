import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='main' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;