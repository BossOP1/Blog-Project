import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className=' w-[40vw] flex flex-col mx-[20vw] '>
      <NavLink to={`/blog/${post.id}`}>
        <span className='font-bold text-lg my-1 leading-none'>{post.title}</span>
        </NavLink> 
        <p className='text-xs font-medium'>
            By
             <span className='font-medium text-xs'> {post.author} </span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className=' text-xs font-medium'>{post.category}</span>
            </NavLink>
        </p>

        <p className='text-xs font-medium'>posted on {post.date}</p>
        <p className='text-base my-1 leading-tight'>{post.content}</p>
        <div className='my-1 leading-tight'>
            {post.tags.map((tag,index)=>(
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
               <span className='text-blue-800 mx-0.5 '>{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogDetails



