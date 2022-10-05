import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='w-full h-screen flex flex-col bg-slate-700'>
      <Navbar/>
      <div className='w-full h-full flex flex-col  items-center justify-center'>
        <h1 className='text-6xl text-white font-bold p-2 my-2'>Share your Stories</h1>
        <p className='text-2xl text-orange-500 font-semibold p-2 my-2'>With people around the World :)</p>
      </div>
    </div>
  )
}
