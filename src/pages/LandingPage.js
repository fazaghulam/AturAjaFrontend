import React from 'react';
import Navbar from '../components/Navbar';
import Meeting from '../assets/meeting.jpg';

export default function LandingPage () {
  return (
    <div>
      <Navbar />
      <div className='px-16 mt-28 flex'>
        <img src={Meeting} className='w-1/2' alt='people meeting'/>
        <div className='w-1/2 flex flex-wrap content-center text-abu'>
          <div>
            <p className='font-bold text-5xl'>Bayangkan</p>
            <p>Ku.... beri oreo tuk si hiu.... bergigi panjang akankah dia berubah menjadi lebih baik sehingga mata kuliah SPK kali ini akan menjadi lebih indah seperti waktu itu saat kau disisiku.</p>
          </div>
        </div>
      </div>
    </div>
  );
}