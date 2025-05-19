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
      {artist.birthYear && artist.birthPlace && (
        <p>
          Born in {artist.birthPlace} in {artist.birthYear}.
        </p>
      )}
      {artist.description && (
        <div className='bio'>
          <h3>Bio</h3>
          <p>{artist.description}</p>
        </div>
      )}
      {artist.socials && Object.keys(artist.socials).length > 0 && (
        <div className='socials'>
          <h3>Socials</h3>
          <ul>
            {Object.entries(artist.socials).map(([key, value]) => (
              <li key={key}>
                <a href={value} target='_blank' rel='noopener noreferrer'>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ArtistPage;
