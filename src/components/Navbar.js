import React from 'react';
import Logo from '../assets/logo.svg';

export default function Navbar () {
  return (
    <div className='flex justify-between px-16 py-2 bg-gradient-to-r from-biru to-ijo'>
      <img src={Logo} />
      
    </div>
  );
}