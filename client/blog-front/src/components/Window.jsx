import React from "react";
import Post from "./Post";

import frnd1 from "../assets/images/frnd1.jpg";
import frnd2 from "../assets/images/frnd2.jpg";
import frnd3 from "../assets/images/frnd3.jpg";
import frnd4 from "../assets/images/frnd4.jpg";
import frnd5 from "../assets/images/frnd5.jpg";
import frnd6 from "../assets/images/frnd6.jpg";
import frnd7 from "../assets/images/frnd7.jpg";
import frnd8 from "../assets/images/frnd8.jpg";
import SinglePost from "../pages/SinglePost";

const Window = () => {
  return (
    <div className="container flex flex-col md:flex-row relative bg-white dark:bg-Grey">
      <div className="flex flex-col md:basis-3/4 w-full">
      <SinglePost />
      </div>
      <div className="flex flex-col pl-10 pt-3 pb-3 md:border-l dark:border-gray-500 md:basis-1/4 w-full flex-wrap bg-white dark:bg-Grey">
        <div className="absolute md:fixed overflow-hidden">
          <p className="hidden md:block text-lg font-bold text-gray-900 dark:text-White mb-3">
            Interesting Topics ...
          </p>
          <div className="hidden md:flex flex-wrap">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
              Food
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
              Travel
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
              Technology
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
              Sports
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
              Relationships
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
              Spiritual
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
              Health
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
              Productivity
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
              Business
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
              Money
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
              . . .
            </span>
          </div>
          <p className="hidden md:block text-lg font-bold text-gray-900 dark:text-White mb-3 mt-2" >Authors you follow</p>
          <div className="hidden md:flex flex-wrap">
            <img className="w-8 h-8 mr-4 object-cover rounded-md mb-2" src={frnd1} />
            <img className="w-8 h-8 mr-4 object-cover rounded-md mb-2" src={frnd2} />
            <img className="w-8 h-8 mr-4 object-cover rounded-md mb-2" src={frnd3} />
            <img className="w-8 h-8 mr-4 object-cover rounded-md mb-2" src={frnd4} />
            <img className="w-8 h-8 mr-4 object-cover rounded-md mb-2" src={frnd5} />
            <img className="w-8 h-8 mr-4 object-cover rounded-md mb-2" src={frnd6} />
            <img className="w-8 h-8 mr-4 object-cover rounded-md mb-2" src={frnd7} />
            <img className="w-8 h-8 mr-4 object-cover rounded-md mb-2" src={frnd8} />
          </div>
          <a href="#" className="text-green-600">See more</a>
          <p className="hidden md:block text-lg font-bold text-gray-900 dark:text-White mb-3 mt-2 ">Bookmarks</p>
          <div className="text-gray-900 dark:text-White flex flex-wrap flex-col pr-10">
            <p className="hover:text-Teal duration-150">Fanatics Unite: The Passion and Dedication of Sports Supporters</p>
            <p className="hover:text-Teal duration-150">From Underdogs to Champions: The Inspiring Journey of Triumph</p>
            <p className="hover:text-Teal duration-150">Machine Learning Demystified: Unveiling the Secrets of AI</p>
            <p className="hover:text-Teal duration-150">Unlocking the Potential of Data: Empowering Insights</p>
          </div>
          <a href="#" className="text-green-600">See more</a>
        </div>
      </div>
    </div>
  );
};

export default Window;
