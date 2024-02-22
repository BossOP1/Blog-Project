import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
    // consume data
    const {posts,loading} = useContext(AppContext);
    
  return (
    <div className=' relative w-[100vw] h-full flex flex-col gap-5 justify-center items-center pt-20 mb-10'>
{
    loading ? (<Spinner/>):
        posts.length === 0 ? (<div>
            <p>No Posts found</p>
        </div>):(posts.map((post)=> (
            <BlogDetails key={post.id} post={post}/>
        )))

}
    </div>
  )
}   

export default Blogs