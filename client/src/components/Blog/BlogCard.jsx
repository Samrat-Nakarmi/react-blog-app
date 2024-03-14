import React from "react";
import { Link } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HtmlReactParser from "html-react-parser";
const BlogCard = ({ blog }) => {
  console.log(blog.attributes.blogDescription.length);
  const truncateBlogDesc =
    blog.attributes.blogDescription.length > 120
      ? blog.attributes.blogDescription.substring(0, 120) + "..."
      : blog.attributes.blogDescription;

  //   const imageUrl =
  //     "http://127.0.0.1:1337" + blog.attributes.img.data.attributes.url;

  const imageUrl =
    "http://localhost:1337" + blog.attributes.blogThumbnail.data.attributes.url;
  return (
    <div className="rounded-lg shadow-md h-[700px] p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link to={`/blogs/${blog.id}`}>
        <div className="object-cover">
          <img
            src={imageUrl}
            alt={""}
            className="rounded-t-lg object-cover h-[500px]"
          />
        </div>
        <div className="mt-8">
          <h2 className="text-xl  font-semibold mb-2 overflow-ellipsis">
            {blog.attributes.blogTitle}
          </h2>
          {/* <BlocksRenderer content={blog.attributes.blogDescription} /> */}
          {HtmlReactParser(truncateBlogDesc)}
        </div>
        {/* <div>
          {blog.attributes.blogImages.data.map((image) => {
            const image_url = "http://localhost:1337" + image.attributes.url;
            console.log(image_url);
            return <img src={image_url} alt="" />;
          })}
        </div> */}
      </Link>
    </div>
  );
};

export default BlogCard;
