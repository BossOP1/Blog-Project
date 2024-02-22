import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Header from "../components/Header"
import Pagination from '../components/Pagination';
const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  console.log("the tag page");
  console.log(tag);
  return (
    <div className='flex flex-col bg-blue-200'>
      <Header/>
      <div className='w-screen mx-[30vw] mt-5'>
        <button
        className='border p-1 rounded-md bg-blue-400'
        onClick={()=>navigation(-1)}
        >
          back
        </button>
        <h2 className='font-bold text-xl mt-1'>
          Blogs Tagged  <span>#{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
    
  )
}

export default TagPage