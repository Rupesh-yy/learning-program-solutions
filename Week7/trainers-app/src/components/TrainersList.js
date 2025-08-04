import React from 'react';
import { Link } from 'react-router-dom';
import { trainers } from '../data/TrainersMock';

function TrainersList() {
  return (
    <div>
      <h2>Trainers List</h2>
      <ul>
        {trainers.map((t) => (
          <li key={t.trainerId}>
            <Link to={`/trainer/${t.trainerId}`}>{t.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainersList;
