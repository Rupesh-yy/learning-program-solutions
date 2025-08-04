import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Virat', 'KL Rahul', 'Hardik'];
  const evenTeam = ['Rohit', 'Shubman', 'Pant'];

  const [first, second, third] = oddTeam;
  const [fourth, fifth, sixth] = evenTeam;

  const T20players = ['Virat', 'Rohit', 'Pant'];
  const RanjiTrophy = ['Pujara', 'Rahane'];

  const merged = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{fourth}</li>
        <li>{fifth}</li>
        <li>{sixth}</li>
      </ul>

      <h2>Merged Players</h2>
      <ul>
        {merged.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
