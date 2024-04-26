import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { CategoryContext } from "../context/CategoryContext";
// import RichTextComponent from "./RichTextComponent";

const Blog = ({ blogs }) => {
  const { category } = useContext(CategoryContext);

  const filteredBlogs = blogs.filter((blog) => {
    return blog.attributes.categories.data.some(
      (cat) => cat.attributes.categoryName === category
    );
  });

  console.log(filteredBlogs);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredBlogs?.map((blog) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
