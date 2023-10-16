import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <figure>
        <img src={blog.url} alt="blog" />
      </figure>
      <div className="blog__author--detail">
        <span className="blog__date">{blog.dateCreated}</span>
        <span className="blog__author">{blog.author}</span>
      </div>
      <h5 className="blog__title">{blog.title}</h5>
      <p className="blog__description">{blog.description}</p>
    </div>
  );
};

export default Blog;
