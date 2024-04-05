import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/blogs");
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);

    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div>
        
        
     {blogs &&
        blogs.map((blog) => (
          <BlogCard 
          id={blog._id}
          title={blog?.title}
          description={blog?.description}
        categoryDescription={blog?.categoryDescription}
        time={blog?.createdAt}
        >

        </BlogCard>
                     
        ))} 
    </div>
  );
};

export default Blogs;