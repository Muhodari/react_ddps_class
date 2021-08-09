import React from 'react';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components 
import Header from './components/Header'; 
import Home from './components/Home';
// styles
import { GlobalStyle } from './GlobalStyle';



const App=() =>(

    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyle />
    </div>
  );


export default App;
