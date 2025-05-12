import React from 'react';

import ArtistList from './components/ArtistList';
import ArtistPage from './components/ArtistPage';
import { Artist } from './types/types';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

const artists: Artist[] = [
  {
    id: 1,
    name: 'bladee',
    image:
      'https://cdn.sanity.io/images/svnaozq2/production/a3803fab4b4341c2a115fd27f83141e050be8813-640x475.jpg?auto=format&fit=crop&w=1200&h=1200',
    description:
      'Benjamin Thage Dag Reichwald (born 9 April 1994), known professionally as Bladee, is a Swedish rapper, singer, and designer.',
    slug: 'bladee',
  },
  {
    id: 2,
    name: 'ecco2k',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9A2IO-fhRBqDLJZQ8D41ZqJjfULi40dgJKw&s',
    description:
      'Zak Arogundade Gaterud, better known by his stage name Ecco2K, is a British-Swedish singer, designer, model, director and member of Drain Gang from Hornstull, Stockholm.',
    slug: 'ecco2k',
  },
  {
    id: 3,
    name: 'Thaiboy Digital',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFTJkupmiMLcSjz8nxPNsVyJ4Orcmf9NJ7A&s',
    description:
      'Thanapat Bunleang (born Khazitin G. Bonleunge; 11 October 1994), better known by his stage name Thaiboy Digital, is a Thai rapper, singer, songwriter, record producer, and fashion designer. Born in Khon Kaen, Thailand, Bunleang moved to Stockholm, Sweden at the age of eight[1] and is now based in Bangkok.',
    slug: 'thaiboy-digital',
  },
  {
    id: 4,
    name: 'bladee',
    image:
      'https://cdn.sanity.io/images/svnaozq2/production/a3803fab4b4341c2a115fd27f83141e050be8813-640x475.jpg?auto=format&fit=crop&w=1200&h=1200',
    description:
      'Benjamin Thage Dag Reichwald (born 9 April 1994), known professionally as Bladee, is a Swedish rapper, singer, and designer.',
    slug: 'bladee',
  },
  {
    id: 5,
    name: 'ecco2k',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9A2IO-fhRBqDLJZQ8D41ZqJjfULi40dgJKw&s',
    description:
      'Zak Arogundade Gaterud, better known by his stage name Ecco2K, is a British-Swedish singer, designer, model, director and member of Drain Gang from Hornstull, Stockholm.',
    slug: 'ecco2k',
  },
  {
    id: 6,
    name: 'Thaiboy Digital',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFTJkupmiMLcSjz8nxPNsVyJ4Orcmf9NJ7A&s',
    description:
      'Thanapat Bunleang (born Khazitin G. Bonleunge; 11 October 1994), better known by his stage name Thaiboy Digital, is a Thai rapper, singer, songwriter, record producer, and fashion designer. Born in Khon Kaen, Thailand, Bunleang moved to Stockholm, Sweden at the age of eight[1] and is now based in Bangkok.',
    slug: 'thaiboy-digital',
  },
];

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<ArtistList artists={artists}></ArtistList>}
        ></Route>
        <Route
          path='/artist/:slug'
          element={<ArtistPage artists={artists}></ArtistPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
