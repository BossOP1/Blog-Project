import { createContext, useState } from "react";
import { baseUrl } from "../baseurl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
// step 1 
 export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    // fetch blog data
   const fetchBlogPosts =  async ( page=1, tag=null, category)=>{
       setLoading(true);
       let url = `${baseUrl}?page=${page}`;
       if(tag){
        url += `&tag=${tag}`;
        console.log("heyaaa4565");
        console.log(url);
       }
       if(category){
        url += `&category=${category}`;
        console.log("heyaaa");
        console.log(url);
       }
       try{
           const result = await fetch(url);
           const data = await result.json();
           if (!data.posts || data.posts.length === 0)
           throw new Error("Something Went Wrong");
           console.log("API RESPONSE",data);
           setPage(data.page);
           setPosts(data.posts);
           setTotalPages(data.totalPages);
       }
       catch(error){
            console.log("error ia there in calling API",error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
       }
       setLoading(false);

     };


     const handlePageChange = (page)=>{
      navigate({search:`?page=${page}`});
         setPage(page);
     };

    const value = {
      posts,
      setPosts,
      loading,
      setLoading,
      page,
      setPage,
      totalPages,
      setTotalPages,
      fetchBlogPosts,
      handlePageChange,
    };
 // step2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}