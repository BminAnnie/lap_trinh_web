import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import PetContent from '../components/PetDetail/PetContent';

const Pet = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PetContent />
      </main>
    </div>
  );
};

export default Pet;
