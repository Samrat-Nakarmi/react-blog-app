import React, { useEffect, useState } from "react";
import Comment from "./Comment";

function Comments({ blogId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const filteredComments = comments.filter(comment => {
    return comment.attributes.blog.data.id == blogId;
  });

  console.log(comments)
  console.log(filteredComments)

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Leave a Comment</p>
          <Comment comments={filteredComments} />
        </div>
      )}
    </div>
  );
}

export default Comments;
