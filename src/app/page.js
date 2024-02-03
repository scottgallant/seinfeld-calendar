'use client';

import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import Footer from '../components/Footer';
import specialDates from '../data/specialDates';
import Head from 'next/head';

const App = () => {

  return (
    <div className='bg-black'>
      <Head>
        <title>Seinfeld Calendar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        <meta name="description" content="A simple Next.js habit tracker app inspired by 'The Seinfeld Strategy'. Log your daily habits (exercise, in this example)."></meta>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗓️</text></svg>" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <Calendar specialDates={specialDates} />
      <Footer />
    </div>
  );
};

export default App;
