import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { useViewportSize } from "@mantine/hooks";
import { MenuIcon, XIcon } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useViewportSize();
  const isMobile = width < 768; // below md breakpoint

  const toggleMenu = () => {
    console.log("Toggle Menu");

    // Toggle the state of the menu
    setIsMenuOpen((prev) => {
      const newState = !prev;

      return newState;
    });
  };

  return (
    <>
      <header className="w-full flex justify-between px-4 py-4">
        <div className="w-[150px] h-[50px] overflow-hidden">
          <img
            className="w-full h-full object-fit"
            src="/logo.png"
            alt="Company Logo"
          />
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-3">
            <li className="list-underline">
              <NavLink to="/property-search">Find a Property</NavLink>
            </li>

            <li className="list-underline">
              <NavLink to="/agent-search">Find Agents</NavLink>
            </li>
            <li className="list-underline">
              <NavLink to="/news">News</NavLink>
            </li>
            <li className="list-underline">
              <NavLink to="/commercial">Commercial</NavLink>
            </li>

            <li className="list-underline">
              <NavLink to="/sign-in">Sign In</NavLink>
            </li>
            <li className="list-underline">
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
          </ul>
        </nav>

        <button
          aria-labelledby="Menu Toggle Button"
          className="block md:hidden"
          onClick={toggleMenu}
        >
          {isMobile && !isMenuOpen && (
            <MenuIcon className="size-6 text-black" />
          )}
        </button>
      </header>

      {/* Overlay and mobile menu */}
      {isMenuOpen && isMobile && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 text-white">
          <button className="absolute right-4 top-4" onClick={toggleMenu}>
            <XIcon className="size-6 text-white"></XIcon>
          </button>
          <div className="">
            <ul className="flex flex-col items-center text-white pt-[120px] space-y-8 text-xl">
              <li className="list-underline" onClick={toggleMenu}>
                <NavLink to="/property-search">Find a Property</NavLink>
              </li>

              <li className="list-underline" onClick={toggleMenu}>
                <NavLink to="/agent-search">Find Agents</NavLink>
              </li>
              <li className="list-underline" onClick={toggleMenu}>
                <NavLink to="/news">News</NavLink>
              </li>
              <li className="list-underline" onClick={toggleMenu}>
                <NavLink to="/commercial">Commercial</NavLink>
              </li>
              <div className="mt-[120x] flex flex-col items-center w-full">
                <li
                  className="border-t border-white w-full text-center py-6"
                  onClick={toggleMenu}
                >
                  <NavLink to="/sign-in">Sign In</NavLink>
                </li>
                <li className="py-2" onClick={toggleMenu}>
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </li>
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
