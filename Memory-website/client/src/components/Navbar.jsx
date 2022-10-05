import React from 'react'
import {useNavigate} from 'react-router-dom'


export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='w-full h-32  flex items-center text-white'>
      <div className='w-1/2 h-full flex items-center justify-center flex-col'>
        <h1 onClick={() => navigate('/')} className='text-4xl font-bold cursor-pointer'>Share<span className='text-orange-500'>Memories</span></h1>
      </div>
        <ul className='flex items-center justify-center w-1/2  h-full'>
          <li onClick={() => navigate('/post')}  className='text-xl p-1 mx-4 hover:text-orange-500 transition-all duration-300 cursor-pointer'>View Posts</li>
          <li  onClick={() => navigate('/addpost')}  className='text-xl p-1 mx-4 hover:text-orange-500 transition-all duration-300  cursor-pointer'>Create Posts</li>
        </ul>
    </div>
  )
}
