// src/App.js

import './App.css';
import MultiFilter from './MultiFilter';


import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Multi Filter App</h1>
        <MultiFilter />
      </header>
    </div>
  );
}



export default App;
