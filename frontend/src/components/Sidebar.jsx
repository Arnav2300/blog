import React, { useEffect, useState } from "react";
import axios from "axios";
import frnd1 from "../assets/images/frnd1.jpg";
import frnd2 from "../assets/images/frnd2.jpg";
import frnd3 from "../assets/images/frnd3.jpg";
import frnd4 from "../assets/images/frnd4.jpg";
import frnd5 from "../assets/images/frnd5.jpg";
import frnd6 from "../assets/images/frnd6.jpg";
import frnd7 from "../assets/images/frnd7.jpg";
import frnd8 from "../assets/images/frnd8.jpg";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      //console.log(res)
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="flex flex-col pl-10 pt-3 pb-3 md:border-l dark:border-gray-500 md:basis-1/4 w-full flex-wrap bg-white dark:bg-Grey">
      <div className="absolute md:fixed">
        <p className="hidden md:block text-lg font-bold text-gray-900 dark:text-White mb-3">
          Categories
        </p>
        <div className="hidden md:flex flex-wrap">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`}>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
                {c.name}
              </span>
            </Link>
          ))}
        </div>
        <p className="hidden md:block text-lg font-bold text-gray-900 dark:text-White mb-3 mt-2">
          Authors you follow
        </p>
        <div className="hidden md:flex flex-wrap">
          <img
            className="w-8 h-8 mr-4 object-cover rounded-md mb-2"
            src={frnd1}
          />
          <img
            className="w-8 h-8 mr-4 object-cover rounded-md mb-2"
            src={frnd2}
          />
          <img
            className="w-8 h-8 mr-4 object-cover rounded-md mb-2"
            src={frnd3}
          />
          <img
            className="w-8 h-8 mr-4 object-cover rounded-md mb-2"
            src={frnd4}
          />
          <img
            className="w-8 h-8 mr-4 object-cover rounded-md mb-2"
            src={frnd5}
          />
          <img
            className="w-8 h-8 mr-4 object-cover rounded-md mb-2"
            src={frnd6}
          />
          <img
            className="w-8 h-8 mr-4 object-cover rounded-md mb-2"
            src={frnd7}
          />
          <img
            className="w-8 h-8 mr-4 object-cover rounded-md mb-2"
            src={frnd8}
          />
        </div>
        <a href="#" className="text-green-600">
          See more
        </a>
        <p className="hidden md:block text-lg font-bold text-gray-900 dark:text-White mb-3 mt-2 ">
          Connect
        </p>
        <div className="flex text-Black dark:text-White">
          <span className="hover:text-pink-500 duration-150 pb-2 basis-1/3">
            <AiOutlineInstagram className="text-4xl" />
          </span>
          <span className="hover:text-blue-500 duration-150 pb-2 basis-1/3">
            <AiOutlineLinkedin className="text-4xl" />
          </span>
          <span className="hover:text-purple-600 duration-150 pb-2 basis-1/3">
            <AiOutlineGithub className="text-4xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
