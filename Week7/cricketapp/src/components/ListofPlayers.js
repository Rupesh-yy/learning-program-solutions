import React from 'react';

const players = [
  { id: 1, name: 'Chris Gayle', country: 'West Indies' },
  { id: 2, name: 'AB de Villiers', country: 'South Africa' },
  { id: 3, name: 'Steve Smith', country: 'Australia' },
];

function ListofPlayers() {
  return (
    <div className="card">
      <h2>International Players</h2>
      <ul>
        {players.map(({ id, name, country }) => (
          <li key={id}>
            {name} - {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
