import React from 'react';

import ArtistCard from './ArtistCard';
import { Artist } from '../types/types';
import { Link } from 'react-router-dom';

import './ArtistList.css';

interface ArtistListProps {
  artists: Artist[];
}

const ArtistList = ({ artists }: ArtistListProps) => {
  return (
    <div className='artists-container'>
      {artists.map((artist) => (
        <Link
          to={`/artist/${artist.slug}`}
          key={artist.id}
          className='artist-link'
        >
          <ArtistCard
            name={artist.name}
            image={artist.image}
            description={artist.description}
          ></ArtistCard>
        </Link>
      ))}
    </div>
  );
};

export default ArtistList;
