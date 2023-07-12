import React from "react";
import image from "../assets/images/coffee.jpg";
import profile from "../assets/profile.jpg";
const Post = () => {
  return (
    <div className="p-10 flex w-full">
      <div className="w-full lg:flex rounded-lg group hover:shadow-lg duration-300">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-lg lg:rounded-lg text-center overflow-hidden"
          alt="Mountain"
          style={{backgroundImage: `url(${image})`}}
        ></div>
        
        <div className="p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center dark:text-White">
              Jul 4,2023
              <span className="bg-gray-100 text-gray-800 text-xs font-medium ml-3 mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-gray-300">
                Food
              </span>
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-White group-hover:text-gray-400 duration-300">
              Best Mountain Trails 2020
            </div>
            <p className="text-gray-700 text-base dark:text-White">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={profile}
              alt="Avatar of Writer"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none dark:text-White">John Smith</p>
              <p className="text-gray-500 dark:text-gray-400">Barista</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
