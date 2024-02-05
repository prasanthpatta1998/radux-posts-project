import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postslice";
import SinglePost from "./SinglePost";
import "../../App.css";
import Basic from "./form";

const PostsList = () => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchPosts());
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* <Basic/> */}
      <h2>PostsList</h2>
      <div className="postsContainer">
        {post.loading ? <h3>...Loading</h3> : null}
        {!post.loading && post.error ? <h3>{post.error}</h3> : null}
        {post?.posts?.length > 0
          ? post.posts.map((post) => <SinglePost key={post.id} post={post} />)
          : null}
      </div>
    </div>
  );
};

export default PostsList;
