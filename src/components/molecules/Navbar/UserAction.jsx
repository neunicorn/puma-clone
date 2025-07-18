"use client";
import QuickLink from "@/components/atom/QuickLink";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const UserAction = () => {
  const [isShow, setIsShow] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();
    setIsShow((state) => !state);
  };

  useEffect(() => {
    console.log("isShow has changed to:", isShow);
  }, [isShow]); // Dependency array: run effect when 'count' changes

  const RenderAction = () => {
    return (
      <AnimatePresence>
        {isShow ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
            className="bg-white absolute w-63 p-5 top-0 right-8 mt-1 rounded-sm shadow z-100"
          >
            <button
              className="absolute top-3 right-3 hover:opacity-80 duration-150 ease-in z-40 cursor-pointer"
              onClick={onClickHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            </button>
            <div className="text-left">
              <p className="font-bold text-xs text-[#818181]">QUICKLINKS</p>
              <ul className="mb-4">
                <QuickLink href="/login" name="My Account" />
                <QuickLink href="/favorites" name="Favorites" />
                <QuickLink href="/return" name="Initiate Return" />
                <QuickLink href="/support" name="Support" />
                <QuickLink href="/lang" name="Language" />
              </ul>
            </div>
            <div className="text-xs text-center w-53">
              <button className="bg-[#b7a07d] w-full py-2.5 mb-4 text-sm font-bold">
                LOGIN
              </button>
              <div className="text-[#131313]">
                <span className="text-gray-500">No account yet?</span>
                <Link
                  href="#"
                  className="font-bold ml-2 pb-1 border-b-2 border-b-gray-300"
                >
                  REGISTER HERE.
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    );
  };

  return (
    <>
      <div
        className="group flex relative items-center px-4 transition-colors duration-300 h-full cursor-pointer"
        onClick={onClickHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-black group-hover:fill-[#CCCCCC] transition-colors duration-300"
          fill="#fff"
          viewBox="0 0 256 256"
        >
          <path d="M152,80a8,8,0,0,1,8-8h88a8,8,0,0,1,0,16H160A8,8,0,0,1,152,80Zm96,40H160a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm0,48H184a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm-96.25,22a8,8,0,0,1-5.76,9.74,7.55,7.55,0,0,1-2,.26,8,8,0,0,1-7.75-6c-6.16-23.94-30.34-42-56.25-42s-50.09,18.05-56.25,42a8,8,0,0,1-15.5-4c5.59-21.71,21.84-39.29,42.46-48a48,48,0,1,1,58.58,0C129.91,150.71,146.16,168.29,151.75,190ZM80,136a32,32,0,1,0-32-32A32,32,0,0,0,80,136Z"></path>
        </svg>
      </div>
      <RenderAction />
    </>
  );
};

export default UserAction;
