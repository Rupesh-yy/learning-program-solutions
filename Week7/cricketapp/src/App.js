import React from 'react';
import './App.css';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const showIndian = true;

  return (
    <div className="App">
      <h1>🏏 Cricket Players</h1>
      {showIndian ? <IndianPlayers /> : <ListofPlayers />}
    </div>
  );
}

export default App;
