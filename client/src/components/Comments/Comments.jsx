import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "../../api/api";

function Comments({ blogId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");

  const filteredComments = comments.filter((comment) => {
    return comment.attributes.blog.data.id == blogId;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentResponse = await fetchComment();
        setComments(commentResponse);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchComment = async () => {
    const response = await fetch(
      "http://127.0.0.1:1337/api/comments?populate=*"
    );
    const data = await response.json();
    return data.data || []; // Return an empty array if data is not available
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const token = localStorage.getItem("私は猫が大好き");

    const data = {
      data: {
        content: newComment,
        blog: blogId,
      },
    };

    try {
      console.log("Request Data:", data); // Log the request data to inspect it
      const response = await axios.post("/api/comments", JSON.stringify(data), {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json", // Add Content-Type header
        },
      });
      console.log("Response:", response);
      console.log("Uploaded");
      window.location.reload(); // Log the response for debugging
    } catch (error) {
      console.log("Error:", error); // Log any errors for debugging
    }
  };

  // console.log(comments);
  // console.log(filteredComments);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <form action="" onSubmit={handleSubmit} className="flex">
            <div className="w-1/2 my-4 items-center justify-center">
              <input
                type="text"
                placeholder="Leave a comment..."
                name=""
                id=""
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full py-[8px] px-[20px] border border-[#ccc]"
              />
            </div>
            <div className="flex items-center ml-10">
              <button
                className="border border-[#f9bc60] rounded-[10px] py-[8px] px-[20px]"
                type="submit"
              >
                Comment
              </button>
            </div>
          </form>
          <Comment comments={filteredComments} />
        </div>
      )}
    </div>
  );
}

export default Comments;
