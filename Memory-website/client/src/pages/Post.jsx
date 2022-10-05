import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'



export default function Post({setCurrentID}) {
  const Posts = useSelector((state) => state.posts)

  // console.log(Posts);

  return (
    <div className='bg-slate-700 flex flex-col p-1 w-full  items-center justify-start'>
      <Navbar />
      <div className='h-full flex flex-wrap items-center justify-center w-5/6  p-5 '>
        {
          Posts.map((post) => {
            return  <Card post={post}  setCurrentID={setCurrentID}/>,
            <Card post={post}  setCurrentID={setCurrentID}/>,
            <Card post={post}  setCurrentID={setCurrentID}/>
           
          })
        }
      </div>
    </div>
  )
}
