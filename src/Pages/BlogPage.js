import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import Spinner from '../components/Spinner';

const BlogPage = () => {
const [blog,setBlog]=useState(null);
const[relatedBlogs, setRelatedBlogs] = useState([]);
const location = useLocation();
const navigation = useNavigate();
const{loading,setLoading}= useContext(AppContext);
const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
const blogId = location.pathname.split("/").at(-1);

async function  fetchRelatedBlogs(){
  setLoading(true);
  let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
 
  try{
    const res = await fetch(url);
    const data =await res.json();
    setBlog(data.blog);
    setRelatedBlogs(data.relatedBlogs);
    console.log("hey")
    console.log(data.relatedBlogs)
  }
  catch(error){
    console.log(error);
   console.log("error aago re related blogs mein")
   setBlog(null);
   setRelatedBlogs([]);
  }
      setLoading(false);
}
useEffect(() => {
  if(blogId){
    fetchRelatedBlogs();
  }
}, [location.pathname]);

  return (
    <div className='bg-slate-200 w-screen h-full'>
     <Header/>
     <div className='bg-slate-200 mx-10 pt-20'>
      <button className=' mx-40 border p-1 rounded-md bg-slate-400'
       onClick={()=>navigation(-1)}>
         Back
      </button>

      { 
        loading ? (
        <p><Spinner/></p>
        ) : blog ?
         ( <div>
          <BlogDetails post = {blog}/>
          <h2 className=' w-[40vw] flex flex-col mx-[20vw] text-4xl mt-10'>Related Blogs</h2>
          { relatedBlogs.map((post)=>(
              <div className='my-5' key= {post.id}>
                <BlogDetails post={post}/>
              </div>
            ))
          }
          </div>) :
         ( <p>No Blog Found</p>)
      }

      
     </div>
    </div>
  )
    }

export default BlogPage;