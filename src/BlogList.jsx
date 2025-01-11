import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // For routing
import { parseBlogs } from "./utils/parseBlogs"; // Utility function to parse markdown

const BlogCard = ({ blog }) => {
  return (
    <div className="cursor-pointer p-5 max-w-xl border-b-2 border-gray-300 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
      <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white">
        {blog.title}
      </h3>
    </div>
  );
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ho-cyber/Website/refs/heads/main/blogs.md")
      .then((response) => response.text())
      .then((text) => {
        const parsedBlogs = parseBlogs(text); // Parse the markdown text into blog data
        setBlogs(parsedBlogs);
      })
      .catch((error) => console.error("Error loading blogs:", error));
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="container mx-auto px-4 pt-6">
        <a 
          href="/" 
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </a>
      </div>
      <h2 className="text-center text-4xl font-bold text-white py-6">Blog List</h2>
      <div className="p-4 max-w-7xl mx-auto space-y-4">
        {blogs.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.id}`}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
