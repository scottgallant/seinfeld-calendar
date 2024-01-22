'use client';

import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import Footer from '../components/Footer';
import specialDates from '../data/specialDates';
import Head from 'next/head'

const App = () => {

  return (
    <div className=''>
      <Head>
        <title>Seinfeld Calendar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗓️</text></svg>" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Seinfeld Calendar - A Daily Habit Tracker " />
        <meta property="og:description" content="A simple Next.js habit tracker app inspired by 'The Seinfeld Strategy'. Log your daily habits (exercise, in this example)." />
        <meta property="og:url" content="https://seinfeld-calendar.vercel.app" />

        <meta property="og:image" content="https://seinfeld-calendar.vercel.app/seinfeld-calendar.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Seinfeld Calendar - A Daily Habit Tracker " />
        <meta name="twitter:description" content="A simple Next.js habit tracker app inspired by 'The Seinfeld Strategy'. Log your daily habits (exercise, in this example)." />
        <meta name="twitter:image" content="https://seinfeld-calendar.vercel.app/seinfeld-calendar.png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>
      <Calendar specialDates={specialDates} />
      <Footer />
    </div>
  );
};

export default App;
