import React from 'react';
import { Artist } from '../types/types';
import { useParams } from 'react-router-dom';

interface ArtistPageProps {
  artists: Artist[];
}

const ArtistPage = ({ artists }: ArtistPageProps) => {
  const { slug } = useParams();
  const artist = artists.find((artist) => artist.slug === slug);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className='artist-page'>
      <h2>{artist.name}</h2>
      <img src={artist.image} alt={artist.name} />
      <p>{artist.description}</p>
    </div>
  );
};

export default ArtistPage;
