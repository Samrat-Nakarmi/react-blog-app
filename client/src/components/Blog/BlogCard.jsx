import React from "react";
import { Link } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HtmlReactParser from "html-react-parser";
const BlogCard = ({ blog }) => {
  console.log(blog.attributes.blogDescription.length);
  const truncateBlogDesc =
    blog.attributes.blogDescription.length > 80
      ? blog.attributes.blogDescription.substring(0, 80) + "..."
      : blog.attributes.blogDescription;

  //   const imageUrl =
  //     "http://127.0.0.1:1337" + blog.attributes.img.data.attributes.url;

  const imageUrl =
    "http://localhost:1337" + blog.attributes.blogThumbnail.data.attributes.url;
  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href={`/blog/${blog.id}`}>
        <div className="relative w-full h-1" style={{ paddingBottom: "100%" }}>
          <img src={imageUrl} alt={""} className="rounded-t-lg" />
        </div>
        <div className="p-2">
          <h2 className="text-xl text-white font-semibold mb-2 overflow-ellipsis">
            {blog.attributes.blogTitle}
          </h2>
          {/* <BlocksRenderer content={blog.attributes.blogDescription} /> */}
          <Markdown
            children={blog.attributes.blogDescription}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <div>
          {blog.attributes.blogImages.data.map((image) => {
            const image_url = "http://localhost:1337" + image.attributes.url;
            console.log(image_url);
            return <img src={image_url} alt="" />;
          })}
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
