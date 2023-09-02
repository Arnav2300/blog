import React from "react";
import clouds from "../assets/images/clouds.webp";
import robot from "../assets/images/robot.jpg";

const Login = () => {
  return (
    <div className="h-screen flex items-center bg-White">
      <div className="flex flex-col md:basis-1/2 items-center">
        <div className="flex flex-col items-center justify-center">
          <p className="p-4 text-4xl md:text-5xl font-bold Barlow Semi Condensed">
            Welcome back!
          </p>
          <p className="pb-4">Welcome to Scribe. A blogging website.</p>
        </div>
        <form className="relative cursor-pointer flex flex-col items-center justify-center">
          <div className="pb-4 w-60 md:w-72">
            <div className="relative h-10 w-full">
              <input
                className="peer h-full w-full rounded-[7px] border border-gray-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-Black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-blue-gray-500 focus:border-2 focus:border-Teal focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                placeholder=" "
                type="email"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-Teal peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-Teal peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-Teal peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                Email
              </label>
            </div>
          </div>

          <div className="pb-4 w-60 md:w-72">
            <div className="relative h-10 w-full">
              <input
                className="peer h-full w-full rounded-[7px] border border-gray-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-Black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-blue-gray-500 focus:border-2 focus:border-Teal focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                placeholder=" "
                type="password"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-Teal peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-Teal peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-Teal peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                Password
              </label>
            </div>
          </div>
          <a href="#" className="pb-4">
            Forgot password?
          </a>
          <button
            type="submit"
            className="text-White bg-Teal hover:bg-Teal focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 w-60 md:w-72"
          >
            Sign up
          </button>
          <p className="pb-4">
            Not registered? <a href="#">Sign Up!</a>
          </p>
        </form>
      </div>
      <div className="hidden md:flex md:basis-1/2 h-screen">
        <div data-carousel="slide" className="w-full relative">
          <div className="relative overflow-hidden">
            <div className="duration-700 ease-in-out" data-carousel-item>
              <img src={clouds} className="object-cover h-screen" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src={robot} className="object-cover h-screen" alt="..." />
            </div>
          </div>
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
