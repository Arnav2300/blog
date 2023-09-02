import React from "react";
import Topbar from "../components/Topbar";
import coffee from "../assets/images/coffee.jpg";
import Window from "../components/Window";
import profile from "../assets/images/frnd1.jpg";
import {
  HiOutlineBookmark,
  HiOutlineHandThumbDown,
  HiOutlineHandThumbUp,
} from "react-icons/hi2";

const SinglePost = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:basis-3/4 w-full bg-White dark:bg-Grey">
        <img
          src={coffee}
          alt="..."
          className="object-cover w-full h-72 rounded-xl p-4"
        />
        <p className="p-4 text-center text-Black dark:text-White text-3xl font-bold">
          Title of post
        </p>
        <div className="flex items-center justify-center p-4 pt-0 basis-full md:max-*:flex-col">
          <img src={profile} className="h-10 rounded-full" />
          <div className="flex flex-col md:border-r">
            <span className="p-2 pb-0 text-Black dark:text-White">
              Arnav Saraswat{" "}
              <a href="#" className="text-green-500 pl-4">
                Follow
              </a>
            </span>
            <span className="p-2 pt-0 text-gray-400">
              2 days ago, 3 minute read
            </span>
          </div>
          <div className="">
            <button>
              <HiOutlineBookmark className="text-4xl text-Black dark:text-White pl-2" />
            </button>
            <button>
              <HiOutlineHandThumbUp className="text-4xl text-Black dark:text-White pl-2" />
            </button>
            <button>
              <HiOutlineHandThumbDown className="text-4xl text-Black dark:text-White pl-2" />
            </button>
          </div>
        </div>
        <p className="p-4 pt-0 text-left text-Black dark:text-White">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum velit
          alias, nisi cum id voluptate amet aperiam repudiandae perferendis
          distinctio magnam facilis assumenda? Molestiae nulla harum distinctio
          voluptate illo quae? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quidem voluptatum eligendi dolore magni deserunt
          neque totam. Earum soluta fuga voluptas, deserunt sint ratione
        </p>
        <div className=""></div>
      </div>
    </div>
  );
};

export default SinglePost;
