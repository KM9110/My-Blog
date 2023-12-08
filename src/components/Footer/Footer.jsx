import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="w-sm md:w-full text-white">
        <div className="flex flex-col  items-center justify-between gap-y-8">

          <div className=" grid grid-cols-2 sm:flex flex-wrap gap-x-10 text-left ">
            <Link href="">About</Link>
            <Link href="">Blog</Link>
            <Link href="">Press</Link>
            <Link href="">Accessibility</Link>
          </div>
          <div className="text-3xl flex flex-wrap gap-x-10">
              <FaFacebook />
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
          </div>
          <div className="text-xs">&copy; 2023 Your Company, Inc. All rights reserved.</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
