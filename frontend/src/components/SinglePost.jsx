import React, { useContext, useState } from "react";
import coffee from "../assets/images/coffee.jpg";
import axios from "axios";
import profile from "../assets/images/frnd1.jpg";
import {
  HiOutlineBookmark,
  HiOutlineHandThumbDown,
  HiOutlineHandThumbUp,
  HiOutlineTrash,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Context } from "../context/Context";

const SinglePost = () => {
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
  const PF = "http://localhost:3001/images/";

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/posts/" + path, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (error) {}
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center md:basis-3/4 w-full bg-White dark:bg-Grey">
        {post.photo && (
          <img
            src={PF + post.photo}
            alt="..."
            className="object-cover w-full h-72 rounded-xl p-4"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="text-3xl border-none p-2 w-full bg-white dark:bg-Grey focus:outline-none text-Black dark:text-White "
            placeholder="Title..."
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <>
            <p className="pb-4 text-center text-Black dark:text-White text-3xl font-bold">
              {title}
            </p>

            <div className="pb-4 flex items-center justify-center pt-0 basis-full md:max-*:flex-col">
              <img src={profile} className="h-10 rounded-full" />
              <div className="flex flex-col md:border-r">
                <span className="p-2 pb-0 text-Black dark:text-White">
                  <Link to={`/?user=${post.username}`}>{post.username} </Link>

                  <a href="#" className="text-green-500 pl-4">
                    Follow
                  </a>
                </span>
                <span className="p-2 pt-0 text-gray-400">
                  {new Date(post.createdAt).toDateString()}
                </span>
              </div>
              <div className="">
                <button>
                  <HiOutlineBookmark className="text-4xl text-Black dark:text-White pl-2" />
                </button>
                {post.username !== user?.username && (
                  <>
                    <button>
                      <HiOutlineHandThumbUp className="text-4xl text-Black dark:text-White pl-2" />
                    </button>
                    <button>
                      <HiOutlineHandThumbDown className="text-4xl text-Black dark:text-White pl-2" />
                    </button>
                  </>
                )}
                {post.username === user?.username && (
                  <>
                    <button>
                      <HiOutlinePencilSquare
                        className="text-4xl text-Black dark:text-White pl-2 hover:text-Teal"
                        onClick={() => {
                          setUpdateMode(true);
                        }}
                      />
                    </button>
                    <button>
                      <HiOutlineTrash
                        className="text-4xl text-Black dark:text-White pl-2 hover:text-red-500"
                        onClick={handleDelete}
                      />
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        )}
        {updateMode ? (
          <textarea
            className="w-full text-2xl border-none p-2 bg-white dark:bg-Grey focus:outline-none text-Black dark:text-White"
            placeholder="Start typing..."
            type="text"
            value={desc}
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="p-4 text-left text-Black dark:text-White">
            {desc}
          </p>
        )}
        {updateMode && (
          <button
            className="rounded-full bg-Teal p-5 pt-2 pb-2 w-50 float-right"
            onClick={handleUpdate}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
