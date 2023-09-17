import React, { useContext, useState } from "react";
import { GrUploadOption } from "react-icons/gr";
import { HiArrowUpTray, HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { HiCloudUpload } from "react-icons/hi";
import { Context } from "../context/Context";
import axios from "axios";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.photo = fileName;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {}
  };

  return (
    <div className="p-4">
      {file && (
        <img
          className="w-full h-96 rounded-lg object-cover"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="p-4" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <label htmlFor="fileInput">
            <HiOutlineArrowUpOnSquare className="text-4xl text-Black dark:text-White" />
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="text-3xl border-none p-2 w-full bg-white dark:bg-Grey focus:outline-none text-Black dark:text-White "
            placeholder="Title..."
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="pb-2">
          <textarea
            className="w-full text-2xl border-none p-2 bg-white dark:bg-Grey focus:outline-none text-Black dark:text-White"
            placeholder="Start typing..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          className="rounded-full bg-Teal p-5 pt-2 pb-2 w-50 float-right"
          type="submit"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
