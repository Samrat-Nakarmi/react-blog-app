import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../api/api";
import swal from "sweetalert";
import HTMLReactParser from "html-react-parser";
import Masonry from "react-masonry-css";
import Comments from "../Comments/Comments";

function BlogDetail() {
  const base_url = "http://localhost:1337"; // Assuming this is your base URL

  let { id } = useParams();
  console.log(id)
  const breakpoint = {
    default: 4,
    3000: 5,
    2000: 4,
    1700: 3,
    1000: 3,
    1200: 3,
    500: 1,
  };

  const [post, setPost] = useState([]);
  const [image, setImage] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${base_url}/api/blogs/${id}?populate=*`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData.data);
        setImage(responseData.data.attributes.blogImages.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, [id]);

  return (
    <div>
      <section className="w-11/12 m-auto">
        <div className="pb-10">
          <div className="article-content">
            <h1 className="text-5xl  font-semibold pt-32">
              {data.attributes?.blogTitle}
            </h1>

            <div className="w-full article-text text-lg mt-20  font-light">
              <p>
                {typeof data.attributes?.blogDescription === "string"
                  ? HTMLReactParser(data.attributes?.blogDescription)
                  : data.attributes?.blogDescription}
              </p>
            </div>
          </div>

          <Masonry className="w-[%80] flex gap-3" breakpointCols={breakpoint}>
            {Array.isArray(image) && image.length > 0
              ? image.map((el, index) => {
                  const image_url = base_url + el.attributes?.url;
                  return (
                    <div className="article-images rounded pt-24 " key={el.id}>
                      <div className="h-[25rem]">
                        <img
                          src={image_url}
                          alt=""
                          className="object-cover h-full"
                        />
                      </div>
                    </div>
                  );
                })
              : null}
          </Masonry>
        </div>
        <Comments blogId = {id}/>
      </section>
    </div>
  );
}

export default BlogDetail;
