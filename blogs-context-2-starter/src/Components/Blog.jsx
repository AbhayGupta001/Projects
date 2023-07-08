import React from "react";
import { NavLink } from "react-router-dom";

export const Blog = ({ post }) => {
  console.log(post.id);
  return (
    <div key={post.id} className="mt-10">
    <NavLink to={`/blogs/${post.id}`}>
      <h3 className="blog-title font-bold text-xl leading-9">{post.title}</h3>
    </NavLink>
      <p className="text-sm">
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
          By <span className="blog-author italic">{post.author}</span> on{" "}
          <span className="blog-category font-bold underline decoration-dashed ">
            {post.category}
          </span>
        </NavLink>{" "}
      </p>
      <p className="text-sm">Posted on {post.date}</p>
      <p className="mt-4">{post.content}</p>
      <div className="blog-tag-container">
        {post.tags.map((tag, index) => {
          return (
            <NavLink key={index} to={`/tag/${tag.replaceAll(" ", "-")}`}>
              <span
                className="blog-tag text-blue-600
            font-bold text-sm underline mr-1 mt-10"
              >
                {` #${tag} `}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
