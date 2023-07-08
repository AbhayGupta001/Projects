import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Spinner } from "./Spinner";
import { Blog } from "./Blog";

export const Post = () => {
  const { posts,loading } = useContext(AppContext);
  return (
    <div className="Blog">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>Page Not Found</div>
      ) : 
      
      (
        posts.map((post) => (
           <Blog key={post.id} post = {post} />
        ))
      )}
    </div>
  );
};
