import React from "react";
import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((p) => (
        <PostCard post={p} />
      ))}
    </div>
  );
};

export default PostList;
