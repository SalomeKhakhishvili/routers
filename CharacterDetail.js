import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Character Details</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default CharacterDetail;
