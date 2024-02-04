import React from "react";
import "../../App.css"
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import PostAuthor from "./PostAuthor";

const SinglePost = ({post}) => {
  return (
    <article className="singlePost">
      <h2>{post.title.toUpperCase()}</h2>
      <p>{post.body}</p>
      <TimeAgo time={post.date}/>
      <PostAuthor userId={post.id}/>
      <ReactionButtons post={post}/>
    </article>
  );
};

export default SinglePost;
