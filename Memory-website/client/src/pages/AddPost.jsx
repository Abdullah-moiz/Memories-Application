import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

export default function AddPost({currentId , setCurrentID}) {
  return (
    <div className='bg-slate-700 flex flex-col  pb-16 w-full   items-center justify-start text-white' >
      <Navbar />
      <h1 className='text-3xl p-1 my-4'>Create a Memory</h1>
      <div className=' flex h-full   flex-wrap w-4/5 items-start justify-center '>
        <Form currentId ={currentId}  setCurrentID={setCurrentID} />
      </div>
    </div>
  )
}
