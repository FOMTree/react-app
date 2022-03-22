import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../styles/setup.css';
import '../styles/index.css'
import Navigation from './Navigation';
import Header from './Header';
import MainWrapper from './MainWrapper';


function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <MainWrapper />
    </div>
  );
}

export default App;




