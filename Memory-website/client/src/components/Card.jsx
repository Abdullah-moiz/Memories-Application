import React from 'react'
import moment from 'moment';

import { AiTwotoneLike  , AiTwotoneDelete} from 'react-icons/ai';
import { BsThreeDots} from 'react-icons/bs';


export default function Card({ post , setCurrentID}) {
  
  return (
    <div className='w-96 h-2/3 border-2 m-3 rounded text-white'>
      <div className='h-36 w-full relative'>
        <img className='h-full w-full brightness-50' src={post.selectedFile} alt="No-Img-Found" />
        <div className='w-full h-20 absolute top-0 left-0'>
          <h1 className='text-xl my-1 mx-4'>{post.creator}</h1>
          <p className='text-lg  my-1 mx-4'>{moment(post.createdAt).fromNow()}</p>
        </div>
        <div className='w-full absolute left-0 top-0 z-10 '>
          <BsThreeDots onClick={() => {setCurrentID(post._id)}}  className='my-1 cursor-pointer mx-4 text-3xl absolute top-0 right-0'/>
        </div>
      </div>
      <div className='w-full flex items-center  h-auto flex-wrap justify-start p-2  text-gray-200'>
        <p className='mx-2'>{post.tags.map((tag) => `#${tag} `)}</p>
        
      </div>
      <div className='flex items-center justify-start w-full h-16 p-2'>
        <h1 className='text-2xl mx-2' >{post.title}</h1>
      </div>
      <div className='w-full flex p-2 h-28 overflow-auto '>
        <p>{post.message}</p>
      </div>
      <div className='w-full flex h-12 justify-around  items-center'>
        <div className='flex items-center justify-center w-1/2 h-full '>
         
        <AiTwotoneLike onClick={() => {}}  className='text-3xl text-blue-500 cursor-pointer' />
        
        <p className='p-1 text-blue-500'>Like {post.likeCount}</p>
        </div>
        <div className='flex items-center justify-center w-1/2 h-full '>
          
         <AiTwotoneDelete type='button'  onClick={() => {}} className='text-3xl text-red-500 cursor-pointer'/>
        
        </div>
      </div>
    </div>
  )
}
