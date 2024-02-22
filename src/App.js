import React, { useContext } from 'react'
import { useEffect } from 'react'
import { AppContext } from './Context/AppContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage'
import Home from './Pages/Home'
import BlogPage from './Pages/BlogPage'
import TagPage from './Pages/TagPage'


function App() {

const {fetchBlogPosts}=useContext(AppContext);

const [searchParams, setSearchParams]= useSearchParams();
const location = useLocation();


   useEffect(() => {
    const page = searchParams.get('page') ?? 1;

     if(location.pathname.includes("tags")){
      // tag page
      const tag = location.pathname.split("/".at(-1).replaceAll("-"," "));
      fetchBlogPosts(Number(page),tag)
     }
     else if(location.pathname.includes("categories")){
      // category page
    const category =location.pathname.split("/").at(-1).replaceAll("-"," ");
     fetchBlogPosts(Number(page),null,category);
     console.log("step 1")
     console.log(page)
}
else{
  
     fetchBlogPosts(Number(page));
     console.log("step3")

}

}, [location.pathname,location.search]);


  return (

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogId" element={<BlogPage/>} /> 
     <Route path="/tags/:tag" element={<TagPage/>} />
     <Route path="/categories/:category" element={<CategoryPage/>} />
    </Routes>
   
  )
}

export default App