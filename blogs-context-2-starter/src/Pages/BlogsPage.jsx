import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { AppContext } from '../Context/AppContext';


export const BlogsPage = () => {
  const location = useLocation();
  // const [setLoading] = useContext(AppContext);
  // const [blog,setBlog] = useState(null);
  // const [relatedBlog,setRelatedBlog] = useState([]);
  
  let blogId = location.pathname.split("/").at(-1);
  console.log(location.pathname,blogId)
  let blogUrl = `https://codehelp-apis.vercel.app/api/get-blog?bloagId=${blogId}`;
  console.log(blogUrl);
  
  async function fetchBlogs(){
  try{
    let res = await fetch(blogUrl,{
      mode : 'no-cors'
    });
    let data = await res.json();
    // setBlog(data.Blog);}
    console.log(data)
  }
  catch(e){

  }
}
  useEffect(()=>{
    fetchBlogs();
  },[]);

  return (
    <div>
        Reached
    </div>
  )
}
