import React from "react";

function Comment({ comments, blogId }) {
  // console.log(comments)
  return (
    <div>
      {comments.map((el) => {
        return (
          <div className="flex flex-col border-b border-[#ccc] p-4">
            <div className="font-semibold">
              {el.attributes.user.data.attributes.username}
            </div>
            <div>{el.attributes.content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
