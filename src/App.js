import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Construtor from './components/Construtor/Construtor';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Construtor/>} />
                 
      </Routes>
    </Router>
  )
}

export default App;