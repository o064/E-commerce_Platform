import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // your Logo component
import SearchBar from "./SearchBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header grid grid-cols-3 items-center px-6 py-4 shadow-md bg-white">
      {/* Left: Nav */}
      <div className="flex justify-start items-center">
        <nav className="relative">
          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Menu */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:space-x-10 absolute md:relative left-0 top-full md:top-auto mt-2 md:mt-0 w-screen md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-30 divide-y md:divide-y-0`}
          >
            <li className="relative group">
              <button className="hover:text-blue-600 block md:inline-block px-4 py-2">
                Shop ❤️
              </button>
              <ul className="md:absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transform transition-all duration-200 ease-in-out">
                <li>
                  <Link
                    to="/men"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    to="/women"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    to="/kids"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Kids
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 block md:inline-block px-4 py-2"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Center: Logo */}
      <div className="flex justify-center items-center">
        <Link to="/" className="logo-icon">
          <Logo width={50} height={50} color="#1F1F1F" />
        </Link>
      </div>

      {/* Right: Icons */}
      <div className="flex justify-end items-center space-x-6">
        {/* Search */}

        <SearchBar />

        {/* Cart */}
        <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </Link>

        {/* Login */}
        <Link to="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
