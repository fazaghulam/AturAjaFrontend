import React, { useState } from "react";
import Logo from '../assets/logo.svg';

export default function Login () {
  return (
    <div className='h-screen flex justify-center bg-gradient-to-br from-ijo to-blue-500 pt-24'>
      <div className='w-112 h-144 rounded-xl px-8 py-14 bg-abuMuda'>
        <div className='flex flex-wrap content-center justify-center'>
          <img src={Logo} className='w-24' alt='logo'/>
          <div className='ml-4 font-comforta text-2xl font-semibold grid place-content-center'>
            <p className='bg-clip-text text-transparent bg-gradient-to-tr from-ijo to-biru'>atur<br/>aja</p>
          </div>
        </div>
        <div className='mt-8'>
          <div className='bg-white shadow-xl h-10 rounded-lg relative'>
            <input className='w-11/12 h-full rounded-lg outline-none border-2 border-transparent focus:border-red-600' type='email'  placeholder='Email'/>
            {/* <img className='w-1/12' src={}/> */}
          </div>
        </div>
      </div>
    </div>
  );
}