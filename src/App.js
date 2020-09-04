import React from 'react';
import './App.css';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/popper.js'
import Dashboard from '../src/components/dashboard';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
              <div>
                <Dashboard/>
              </div>
      </BrowserRouter>      
  );
}

export default App;
