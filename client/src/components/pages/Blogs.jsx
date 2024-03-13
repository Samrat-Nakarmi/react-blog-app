import React, { useEffect, useState } from "react";
import { CategoryProvider } from "../context/CategoryContext";
import Category from "../Categories/Category";
import Categories from "../Categories/Categories";
import Blog from "../Blog/blog";
import UseAuth from "../../api/useAuth";

const Blogs = () => {
  UseAuth();
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsResponse = await fetchBlogs();
        const categoriesResponse = await fetchCategories();
        setBlogs(blogsResponse);
        setCategories(categoriesResponse);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const fetchBlogs = async () => {
    const response = await fetch("http://127.0.0.1:1337/api/blogs?populate=*");
    const data = await response.json();
    return data.data; // Assuming data is nested under 'data' property
  };

  const fetchCategories = async () => {
    const response = await fetch("http://127.0.0.1:1337/api/categories");
    const data = await response.json();
    return data; // Assuming categories are directly under 'data'
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto ">
      <CategoryProvider>
        <Categories categories={categories} />
        <Blog blogs={blogs} />
      </CategoryProvider>
    </div>
  );
};

export default Blogs;
