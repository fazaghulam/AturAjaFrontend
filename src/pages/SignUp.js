import React, { useState } from "react";
import {ReactComponent as Email} from '../assets/email.svg';
import {ReactComponent as Eye} from '../assets/eye.svg';
import {ReactComponent as EyeOff} from '../assets/eye-off.svg';
import {ReactComponent as User} from '../assets/user.svg';
import {ReactComponent as Call} from '../assets/call.svg';
import { Link } from "react-router-dom";

export default function SignUp () {
  const [isReveal, setIsReveal] = useState(true)
	const [isRevealConf, setIsRevealConf] = useState(true)
  const toggle = () => {
    setIsReveal(!isReveal);
  }
	const toggleConf = () => {
    setIsRevealConf(!isRevealConf);
  }
  return (
    <div className='h-screen flex justify-center bg-gradient-to-br from-ijo to-blue-500 pt-24'>
      <div className='w-112 h-144 rounded-xl px-8 py-14 bg-abuMuda'>
        <div className='mx-4 grid'>
          <p className='text-black text-lg font-bold place-self-center'>Create your account</p>
					<div className='bg-white shadow-xl h-12 px-4 rounded-lg flex border-2 border-transparent text-gray-600 focus-within:border-biru focus-within:text-biru mt-6'>
            <input className='w-11/12 h-full rounded-lg outline-none placeholder-gray-600 text-gray-600' type='text' placeholder='Username'/>
            <div className='flex flex-wrap content-center'>
              <User />
            </div>
          </div>
					<div className='bg-white shadow-xl h-12 px-4 rounded-lg flex border-2 border-transparent text-gray-600 focus-within:border-biru focus-within:text-biru mt-4'>
            <input className='w-11/12 h-full rounded-lg outline-none placeholder-gray-600 text-gray-600' type='email' placeholder='Email'/>
            <div className='flex flex-wrap content-center'>
              <Email />
            </div>
          </div>
          <div className='bg-white shadow-xl h-12 px-4 rounded-lg flex border-2 border-transparent text-gray-600 focus-within:border-biru focus-within:text-biru mt-4'>
            <input className='w-11/12 h-full rounded-lg outline-none placeholder-gray-600 text-gray-600' type={isReveal ? 'password' : 'text'} placeholder='Password'/>
            <div className='flex flex-wrap content-center cursor-pointer' onClick={toggle}>
              {isReveal ? <EyeOff /> : <Eye />}
            </div>
          </div>
					<div className='bg-white shadow-xl h-12 px-4 rounded-lg flex border-2 border-transparent text-gray-600 focus-within:border-biru focus-within:text-biru mt-4'>
            <input className='w-11/12 h-full rounded-lg outline-none placeholder-gray-600 text-gray-600' type={isRevealConf ? 'password' : 'text'} placeholder='Confirm Password'/>
            <div className='flex flex-wrap content-center cursor-pointer' onClick={toggleConf}>
              {isRevealConf ? <EyeOff /> : <Eye />}
            </div>
          </div>
					<div className='bg-white shadow-xl h-12 px-4 rounded-lg flex border-2 border-transparent text-gray-600 focus-within:border-biru focus-within:text-biru mt-4'>
            <input className='w-11/12 h-full rounded-lg outline-none placeholder-gray-600 text-gray-600' type='number' placeholder='Phone Number'/>
            <div className='flex flex-wrap content-center'>
              <Call />
            </div>
          </div>
          <div className='grid mt-14'>
						<button className='bg-biru hover:bg-biruTua rounded-lg shadow-xl text-white font-bold px-20 py-2 place-self-center'>Sign up</button>
						<div className='flex place-self-center mt-2'>
							<p className='text-black text-xs'>Already have an account?</p>
							<Link to='/login'>
								<p className='text-biru text-xs hover:text-biruTua'>Sign in</p>
							</Link>
						</div>
					</div>
        </div>
      </div>
    </div>
  );
}