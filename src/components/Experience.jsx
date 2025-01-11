import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { experiences } from "../data";
import { parseBlogs } from "../utils/parseBlogs"; // Utility to parse blogs.md
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const BlogCard = ({ blog, onClick, isActive, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center ${
        isMobile ? "text-quaternary" : ""
      }`}
    >
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-tertiary my-6 sm:block hidden"></div>
      )}
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
          isActive || isMobile ? "text-quaternary" : "text-slate-600"
        }`}
      >
        {blog.title}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${
          isActive || isMobile ? "text-white" : "text-slate-600"
        }`}
      >
      </p>
    </div>
  );
};

const BlogDetails = ({ blog }) => {
  return (
    <div className="mt-5">
      <ul className="max-w-7xl list-none space-y-8 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6">
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
      </ul>
    </div>
  );
};

const Experience = () => {
  const [blogContent, setBlogContent] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ho-cyber/Website/refs/heads/main/blogs.md")
      .then((response) => response.text())
      .then((text) => setBlogContent(text))
      .catch((error) => console.error("Error loading blogs:", error));
  }, []);
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState({ title: '', content: '' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ho-cyber/Website/refs/heads/main/blogs.md")
      .then((response) => response.text())
      .then((text) => {
        const parsedBlogs = parseBlogs(text);
        if (parsedBlogs.length > 0) {
          setBlogs(parsedBlogs);
          setSelectedBlog(parsedBlogs[0]);
        }
      })
      .catch((error) => console.error("Error loading blogs:", error));

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const partners = [
    { src: "/assets/LegoGoa.svg", alt: "LegoGoa" },
    { src: "/assets/PRATHAM.svg", alt: "Partner 2" },
    { src: "/assets/logo-color.svg", alt: "Partner 3" },
  ];

  return (
    <div className="sm:my-20">
      {/* Partners Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.alt}
              className="w-32 h-32 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Explore Our Blogs</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Browse Our Latest Blog Posts
        </p>
        <a 
          href="/blogs" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          View All Blogs
          <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "portfolio");
