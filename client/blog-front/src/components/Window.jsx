import React from "react";
import Post from "./Post";

const Window = () => {
  return (
    <div className="container flex flex-col md:flex-row relative">
      <div className="flex flex-col md:basis-3/4 w-full">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="flex flex-col p-10 md:border-l dark:border-gray-500 md:basis-1/4 w-full flex-wrap">
        <div className="absolute md:fixed">
          <p className="hidden md:block text-lg font-bold text-gray-900 dark:text-White mb-3 ">
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
        </div>
      </div>
    </div>
  );
};

export default Window;
