import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { Context } from "../context/Context";
import axios from "axios";
function Settings() {
  const { user, dispatch } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  //  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updatedUser.profilePic = fileName;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.put("/user/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="container flex flex-col md:flex-row relative bg-white dark:bg-Grey">
      <div className="flex flex-col md:basis-3/4 w-full">
        <div className="flex flex-col items-center">
          <p className="text-2xl text-Black dark:text-White">
            {user.username}'s Account
          </p>
          <form className="items-center flex flex-col" onSubmit={handleSubmit}>
            <div className="flex pt-2 items-center">
              <img
                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                alt=""
                className="w-24 h-24 mr-4 rounded-full"
              />
              <label htmlFor="fileInput">
                <HiOutlineArrowUpOnSquare className="text-2xl text-Black dark:text-White" />
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="flex flex-col items-center p-4">
              <label className="text-Black dark:text-White p-1">Username</label>
              <input
                type="text"
                placeholder={user.username}
                name="name"
                className="rounded-md p-1 dark:bg-Grey focus:outline-none text-Black dark:text-White"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="text-Black dark:text-White p-1">Email</label>
              <input
                type="email"
                placeholder={user.email}
                name="email"
                className="rounded-md p-1 dark:bg-Grey focus:outline-none text-Black dark:text-White"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="text-Black dark:text-White p-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="rounded-md p-1 bg-White dark:bg-Grey focus:outline-none text-Black dark:text-White"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="pt-4">
                <button
                  className="text-White p-4 bg-Teal rounded-full pt-1 pb-1"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
          {success && (
            <span className="text-green-500">Updated Successfully!</span>
          )}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
