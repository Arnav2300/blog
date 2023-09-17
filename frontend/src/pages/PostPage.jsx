import React from "react";

import SinglePost from "../components/SinglePost";
import Sidebar from "../components/Sidebar";

const PostPage = () => {
  return (
    <div className="container flex flex-col md:flex-row relative bg-white dark:bg-Grey">
      <div className="flex flex-col md:basis-3/4 w-full">
        <SinglePost />
      </div>
      <Sidebar />
    </div>
  );
};

export default PostPage;
