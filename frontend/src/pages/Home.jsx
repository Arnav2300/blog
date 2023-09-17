import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";
import axios from "axios";
import PostList from "../components/PostList";
import { useLocation } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const {search}=useLocation();



  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div className="container flex flex-col md:flex-row relative bg-white dark:bg-Grey">
      <div>
        <PostList posts={posts}/>
      </div>
      <Sidebar />
    </div>
  );
}

export default Home;
