import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { MenuIcon, XIcon, UserCircle } from "lucide-react";
import { useViewportSize } from "@mantine/hooks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isUserDropDownOpen, setIsUserDropdownOpen] = useState(false);

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

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <header className="w-full flex justify-between px-4 py-4">
        <div className="">
          <NavLink to="/">
            <img
              className="w-[170px]  h-[50px]"
              src="/logo.png"
              alt="Company Logo"
            />
          </NavLink>
        </div>

        <nav className="hidden md:flex justify-between w-2/3">
          <ul className="flex space-x-3">
            <li className="">
              <NavLink to="/property-search">Find a Property</NavLink>
            </li>

            <li className="">
              <NavLink to="/agent-search">Find Agents</NavLink>
            </li>
            <li className="l">
              <NavLink to="/news">News</NavLink>
            </li>
            <li className="">
              <NavLink to="/commercial">Commercial</NavLink>
            </li>

            <li className="">
              <NavLink to="/search-bar-test">Search Bar</NavLink>
            </li>
          </ul>

          {/* User Drop Down */}
          <div className="relative mr-7">
            <button onClick={toggleUserDropdown} className="focus:outline-none">
              <UserCircle className="size-6 text-black cursor-pointer" />
            </button>

            {isUserDropDownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                <NavLink
                  to="/sign-in"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={toggleUserDropdown}
                >
                  Sign In
                </NavLink>

                <NavLink
                  to="/sign-up"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={toggleUserDropdown}
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
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
