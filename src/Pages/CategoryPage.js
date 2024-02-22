import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Header from '../components/Header'
import Pagination from '../components/Pagination';

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  console.log("the category page step2");
  console.log(category);
  return (
    <div className='flex flex-col bg-blue-200 mt-14'>
     <Header/>
     <div className=' mx-[30vw] mt-5'>
      <button className='border p-1 rounded-md bg-blue-400'
       onClick={()=>navigation(-1)}>
         Back
      </button>
      <h2 className='font-bold text-xl mt-1'>
          Category Tagged <span>#{category}</span>
        </h2>
     </div>
     <Blogs/>
     <Pagination/>
    </div>
  )
}

export default CategoryPage