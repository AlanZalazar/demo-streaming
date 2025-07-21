import React from "react";

export default function Footer() {
  const links = [
    "Home",
    "Terms and Conditions",
    "Privacy Policy",
    "Collection Statement",
    "Help",
    "Manage Account",
  ];

  return (
    <div className="bg-neutral-900 h-[300px] text-gray-300 px-[10%] py-10">
      <nav className="flex flex-wrap items-center gap-2 text-sm py-4 px-4">
        {links.map((text, index) => (
          <React.Fragment key={index}>
            <a
              href="#"
              className="hover:underline hover:text-white transition-colors whitespace-nowrap text-[18px] md:text-[16px]"
            >
              {text}
            </a>
            {index < links.length - 1 && (
              <span className="text-gray-500">|</span>
            )}
          </React.Fragment>
        ))}
      </nav>

      <p className="px-4 text-neutral-400 text-[12px] md:text-[14px]">
        Copyright © 2016 DEMO Streaming. All Rights Reserved.
      </p>

      <div className="flex flex-wrap justify-between items-center px-4 mt-4 gap-4">
        <div className="flex gap-10 items-center py-10 ">
          <div className="group">
            <img
              src="./facebook-white.svg"
              alt="Facebook"
              className="group-hover:hidden h-15"
            />
            <img
              src="./facebook-blue.svg"
              alt="Facebook"
              className="hidden group-hover:block h-15"
            />
          </div>

          <div className="group">
            <img
              src="./twitter-white.svg"
              alt="Twitter"
              className="group-hover:hidden h-15 "
            />
            <img
              src="./twitter-blue.svg"
              alt="Twitter"
              className="hidden group-hover:block h-15"
            />
          </div>

          <div className="group">
            <img
              src="./instagram-white.svg"
              alt="Instagram"
              className="group-hover:hidden h-15"
            />
            <img
              src="./instagram-blue.svg"
              alt="Instagram"
              className="hidden group-hover:block h-15"
            />
          </div>
        </div>

        <div className="flex gap-10">
          <img
            src="./app-store.svg"
            alt="appstore"
            className="w-[200px] rounded-lg hover:border hover:border-blue-700"
          />
          <img
            src="./play-store.svg"
            alt="playstore"
            className="w-[200px] rounded-lg hover:border hover:border-blue-700"
          />
          <img
            src="./windows-store.svg"
            alt="microsoft"
            className="w-[160px] rounded-lg border border-neutral-400 hover:border-blue-700"
          />
        </div>
      </div>
    </div>
  );
}
