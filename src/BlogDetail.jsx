import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { parseBlogs } from "./utils/parseBlogs"; // Utility function to parse markdown
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // CSS for syntax highlighting

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch the latest content using the GitHub API
  const fetchBlog = async () => {
    const apiUrl = `https://api.github.com/repos/ho-cyber/Website/contents/blogs.md`;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.content) {
        // Decode Base64 content
        const decodedContent = atob(data.content);
        const parsedBlogs = parseBlogs(decodedContent); // Parse markdown into blog data
        const currentBlog = parsedBlogs.find((blog) => blog.id === id); // Find the blog by ID
        setBlog(currentBlog);
      } else {
        console.error("Failed to retrieve blog content.");
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog(); // Fetch the blog when the component loads
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="container mx-auto px-4 pt-6">
        <a
          href="/blogs"
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Blogs
        </a>
      </div>
      <h2 className="text-center text-4xl font-bold text-white py-6">
        {blog.title}
      </h2>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ReactMarkdown
          className="prose prose-invert prose-lg max-w-none"
          rehypePlugins={[rehypeRaw, rehypeHighlight]} // Enable raw HTML and syntax highlighting
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetail;
