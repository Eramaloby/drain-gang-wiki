import React from 'react';

import ArtistList from './components/ArtistList';
import ArtistPage from './components/ArtistPage';
import Header from './components/Header';
import { Artist } from './types/types';
import { Routes, Route } from 'react-router-dom';

import './App.css';

const artists: Artist[] = [
  {
    id: 1,
    name: 'bladee',
    image:
      'https://cdn.sanity.io/images/svnaozq2/production/a3803fab4b4341c2a115fd27f83141e050be8813-640x475.jpg?auto=format&fit=crop&w=1200&h=1200',
    description:
      'Benjamin Thage Dag Reichwald, known professionally as Bladee, is a Swedish rapper, singer, and designer.',
    slug: 'bladee',
    birthYear: 1994,
    birthPlace: 'Stockholm, Sweden',
    socials: {
      instagram: 'https://www.instagram.com/bladee9/',
      twitter: 'https://twitter.com/bladeecity',
      soundcloud: 'https://soundcloud.com/bladee1000',
    },
  },
  {
    id: 2,
    name: 'ecco2k',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9A2IO-fhRBqDLJZQ8D41ZqJjfULi40dgJKw&s',
    description:
      'Zak Arogundade Gaterud, better known by his stage name Ecco2K, is a British-Swedish singer, designer, model, director and member of Drain Gang from Hornstull, Stockholm.',
    slug: 'ecco2k',
    birthYear: 1994,
    birthPlace: 'London, England',
    socials: {
      instagram: 'https://www.instagram.com/aloegarten/',
      twitter:
        'https://x.com/ECCO2K?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
      soundcloud: 'https://soundcloud.com/ecco2k_year0001',
    },
  },
  {
    id: 3,
    name: 'Thaiboy Digital',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFTJkupmiMLcSjz8nxPNsVyJ4Orcmf9NJ7A&s',
    description:
      'Thanapat Bunleang, better known by his stage name Thaiboy Digital, is a Thai rapper, singer, songwriter, record producer, and fashion designer.',
    slug: 'thaiboy-digital',
    birthYear: 1994,
    birthPlace: 'Kohn Kaen, Thailand',
    socials: {
      instagram: 'https://www.instagram.com/thaiboygoon/',
      twitter: 'https://x.com/thaiboygoon',
      soundcloud: 'https://soundcloud.com/thaiboy-digital',
    },
  },
  {
    id: 4,
    name: 'Whitearmor',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxatWZaglQYPkflfCkIrebNZlysPe6Yf25hQ&s',
    description:
      'Whitearmor is a Swedish producer in Gravity Boys (also known as Drain Gang or Shield Gang).',
    slug: 'whitearmor',
    birthYear: 1994,
    birthPlace: 'Stockholm, Sweden',
    socials: {
      instagram: 'https://www.instagram.com/whitearmorx/',
      twitter: 'https://x.com/whitearmor1',
      soundcloud: 'https://soundcloud.com/whitearmor-music',
    },
  },
  {
    id: 5,
    name: 'Yung Sherman',
    image:
      'https://res.cloudinary.com/dzlvqlshv/image/upload/f_auto,q_auto,dpr_2.0,w_700/yr1-archive-production/ggezk1qqhcqdwb5qwwet',
    description:
      'Axel Tufvesson, better known as Yung Sherman, is a Swedish producer, DJ and model from Stockholm.',
    slug: 'yung-sherman',
    birthYear: 1995,
    birthPlace: 'Stockholm, Sweden',
    socials: {
      instagram: 'https://www.instagram.com/yungsherman95/',
      twitter: 'https://x.com/yung_sherman?lang=ru',
      soundcloud: 'https://soundcloud.com/yungsherman',
    },
  },
];

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <div className='content'>
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
    </div>
  );
}

export default App;
