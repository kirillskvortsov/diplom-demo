import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navigation/Navbar'
import Main from './components/MainElements/Main'

function App() {
  return (
    <Router>
      <Navbar />
      <Main />
    </Router>
  );
}

export default App;
