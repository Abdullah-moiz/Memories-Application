import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost  , updatePost} from '../action/Post'

export default function Form({currentId , setCurrentID}) {
  const post  = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) :  null)

  const mylocation = window.location;
  const dispatch = useDispatch();
  const [postData, setpostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
  useEffect((post) => {
    if(post)  setpostData(post)
  },[post])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (postData.selectedFile === "") {
      return alert("Kindly Add an Image")
    }

    if(currentId)
    {
      dispatch(updatePost(postData))
    }
    else {
      console.log('Data posted to Server condition is executed')
      dispatch(createPost(postData));
      mylocation.reload();
    }
    
  }
  const clear = () => {
    setpostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
  }

  return (
    <div className=' flex w-1/2  items-center justify-center p-2  h-4/5 '>
      <form onSubmit={handleSubmit} autoComplete="off" method="post" className='flex items-center justify-start flex-col border-2 p-4 rounded  bg-white text-black'>
        <input required onChange={(e) => setpostData({ ...postData, creator: e.target.value })} value={postData.creator} type="text" placeholder='Creator' className='rounded w-96 h-10 p-4 text-black outline-none my-3 border-2 border-orange-500' />
        <input required onChange={(e) => setpostData({ ...postData, title: e.target.value })} value={postData.title} type="text" placeholder='Title' className='rounded w-96 h-10 p-4 text-black outline-none my-3 border-2 border-orange-500' />
        <textarea required onChange={(e) => setpostData({ ...postData, message: e.target.value })} value={postData.message} type="text" placeholder='Message' className='rounded w-96 h-40  p-4 text-black outline-none my-3 resize-none border-2 border-orange-500' />
        <input required onChange={(e) => setpostData({ ...postData, tags: e.target.value })} value={postData.tags} type="text" placeholder='Tags (Seprated by Comma)' className='rounded w-96 h-10 p-4 text-black outline-none my-3 border-2 border-orange-500' />
        <FileBase type='file' multiple={false} onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })} />
        <button type="submit" className='border-2 border-orange-500 flex flex-col items-center justify-center w-40 p-2 text-xl font-semibold my-3 rounded hover:bg-orange-500 hover:text-white transition-all duration-300 text-orange-500'>Submit</button>
        <button onClick={clear} type="reset" className='border-2 border-orange-500  bg-orange-500 flex flex-col items-center justify-center w-40 p-2 text-xl font-semibold my-3 rounded hover:border-orange-500 hover:bg-transparent hover:text-orange-500 text-white transition-all duration-300'>Clear</button>
      </form>
    </div>
  )
}
