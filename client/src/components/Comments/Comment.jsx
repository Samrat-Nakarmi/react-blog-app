import React from 'react'

function Comment({comments, blogId}) {
    console.log(comments)
  return (
    <div>
        {comments.map((el) => {
            return(
                <div>
                    {el.attributes.content}
                </div>
            )
        })}
    </div>
  )
}

export default Comment