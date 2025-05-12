import React from 'react';

import './ArtistCard.css';

interface ArtistCardProps {
  name: string;
  image: string;
  description: string;
}

const ArtistCard = ({ name, image, description }: ArtistCardProps) => {
  return (
    <div className='artist-card'>
      <img src={image} alt={name} className='artist-image' />
      <div className='artist-info'>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
