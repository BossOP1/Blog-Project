import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
      <div className=' w-[100%] h-[100%] flex justify-center items-center'>
         <div className='w-[100%]'>
        <Header/>
      <div className='flex flex-col justify-center items-center'>
      <Blogs/>
      <Pagination/>
      </div>
    </div>
      </div>
    
  )
}

export default Home