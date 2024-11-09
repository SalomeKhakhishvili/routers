import React from 'react';
import { Link } from 'react-router-dom';

const Characters = () => {
  // Placeholder data
  const characters = [{ id: 1, name: 'Jon Snow' }, { id: 2, name: 'Daenerys Targaryen' }];

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            <Link to={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
