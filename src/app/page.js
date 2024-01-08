'use client';

import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import Footer from '../components/Footer';
import specialDates from '../data/specialDates';

const App = () => {

  return (
    <div className="">
      <Calendar specialDates={specialDates} />
      <Footer />
    </div>
  );
};

export default App;
