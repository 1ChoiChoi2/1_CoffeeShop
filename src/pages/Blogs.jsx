import React, { useState } from "react";
import Landing from "../components/Landing";
import Blog from "../components/Blog";
import BlogBackground from "../assets/blogBackground.jpg";
import "../styles/Blogs.css";

const Blogs = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogPerPage = 6;
  const totalPages = Math.ceil(blogs.length / blogPerPage);

  // Display Blog for Specific Page
  const startIndex = (currentPage - 1) * blogPerPage;
  const endIndex = startIndex + blogPerPage;

  const blogToDisplay = blogs.slice(startIndex, endIndex);

  // Create Array of page number
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  // Handle Navigation
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Landing backgroundUrl={BlogBackground} subtitle="Our Blog" />
      <div id="blogs">
        <div className="container">
          <div className="row">
            <div className="blogs__container">
              {blogToDisplay.map((blog) => (
                <Blog key={blog.id} blog={blog} />
              ))}
            </div>
            <div className="blog__pagination">
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={
                    pageNumber === currentPage ? "active" : "non-active"
                  }
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

// How to create a pagination, each page will contain 6 blogs and can navigate through numbers
