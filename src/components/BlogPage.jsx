import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { parseBlogs } from "../utils/parseBlogs"; // Utility to parse the markdown file

const BlogPage = () => {
  const { title } = useParams(); // Get the blog title from the URL
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(null);

  // Fetch the markdown file and parse it
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ho-cyber/Website/refs/heads/main/blogs.md")
      .then((response) => response.text())
      .then((text) => {
        const parsedBlogs = parseBlogs(text); // Parse the markdown content
        console.log("Parsed Blogs:", parsedBlogs); // Log the parsed blogs for debugging

        // Find the blog matching the title in the URL
        const foundBlog = parsedBlogs.find(
          (b) => b.title.replace(/\s+/g, "-").toLowerCase() === title
        );
        console.log("Found Blog:", foundBlog);
        setBlog(foundBlog); // Set the selected blog
      })
      .catch((error) => console.error("Error loading blogs:", error));
  }, [title]);

  if (!blog) {
    return <div>Loading...</div>; // Show loading state until blog is found
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-500 hover:underline"
      >
        Go Back
      </button>
      <div className="pt-16">
        <h1 className="text-5xl font-bold mb-8">{blog.title}</h1>
        <ReactMarkdown 
          className="prose prose-invert max-w-none"
          components={{
            img: ({node, ...props}) => (
              <img 
                {...props} 
                className="rounded-lg shadow-lg my-4"
                alt={props.alt || "Blog Image"}
              />
            )
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPage;
