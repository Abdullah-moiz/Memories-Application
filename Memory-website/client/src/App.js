import React  , {useEffect }from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import AddPost from './pages/AddPost'
import {getPost} from './action/Post'
import {useDispatch} from 'react-redux'
import { useState } from 'react'

export default function App() {
    const [id , setId]= useState(null);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPost());
  },[dispatch])

  
  return (
   <> 
     <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route exact path='/post' element={<Post setCurrentID = {setId}/>}  />
        <Route exact path='/addpost' element={<AddPost setCurrentID = {setId} currentId = {id}/>}  />
      </Routes>
     </Router>
   </>
  )
}

