import React from 'react';
import OfficeList from './OfficeList';

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>
         Office Space Rental Portal
      </h1>
      <OfficeList />
    </div>
  );
}

export default App;
