import React, { Fragment } from "react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import profileImg from "../assets/profile.jpg";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  HiOutlinePencilSquare,
  HiOutlineMagnifyingGlass,
  HiOutlineBell,
} from "react-icons/hi2";
const Topbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav className="bg-White bg-opacity-30 backdrop-blur-md py-1 sticky top-0 dark:bg-black dark:bg-opacity-30 border-b dark:border-Grey z-50">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <a href="#" className="">
            <img src={logo} alt="" className="w-16" />
          </a>
        </div>
        {/* search bar on max screens */}
        <div className="hidden md:flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-300 text-Black rounded-lg pr-10 pl-5 py-2 focus:outline-none focus:ring focus:border-Teal w-max dark:bg-Grey dark:text-White"
            />
            <span className="absolute right-3 top-2">
              <HiOutlineMagnifyingGlass className="w-5 h-6" color="Grey" />
            </span>
          </div>
        </div>
        {/* search bar on max screens ends */}
        <div className="flex items-center">
          <HiOutlineMagnifyingGlass
            className="w-7 h-7 mr-4 dark:text-White md:hidden"
            onClick={openModal}
          />
          <HiOutlinePencilSquare className="w-7 h-7 mr-4 text-Black dark:text-White" />
          <HiOutlineBell className="w-7 h-7 mr-4 text-Black dark:text-White" />
          <Menu as="div" className="flex text-left relative">
            <Menu.Button className="">
              <img
                src={profileImg}
                alt=""
                className="w-7 h-7 mr-4 rounded-full"
              />
            </Menu.Button>
            <Menu.Items className="absolute right-0 z-10 mt-[3rem] w-56 origin-top-right rounded-md bg-White shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none md:mt-[4.5rem]">
              <div className="py-1 px-1">
                <Menu.Item className="text-base rounded">
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-Teal text-White" : "bg-grey-500",
                        "block px-4 py-2 text-Black"
                      )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item className="text-base rounded">
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-Teal text-White" : "bg-grey-500",
                        "block px-4 py-2 text-Black"
                      )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item className="text-base rounded">
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-Teal text-White" : "bg-grey-500",
                        "block px-4 py-2 text-Black"
                      )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="flex relative z-50"
      >
        <div
          className="fixed inset-0 bg-White blur-[10px] opacity-[0.75] dark:bg-Black"
          aria-hidden="true"
        />
        <Dialog.Panel className="">
          <form className="absolute inset-0 flex items-center justify-center">
            <input
              type="text"
              placeholder="Search"
              className="-translate-y-[500px] bg-gray-300 text-Black rounded-lg pr-10 pl-5 py-2 focus:outline-none focus:ring focus:border-Teal w-max dark:bg-Grey dark:text-White"
            />
          </form>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
};

export default Topbar;
