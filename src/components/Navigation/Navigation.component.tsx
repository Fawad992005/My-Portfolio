import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex p-5 justify-between items-center">
        {/* Brand Name */}
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
          Fawad Ahmed
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="flex md:hidden">
          <div onClick={toggleMenu} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </div>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden md:flex">
          <ul className="flex gap-16 tabs tabs-bordered" role="tablist">
            <Link
              to="/"
              role="tab"
              className="tab tab-bordered font-semibold text-lg border-green-500 hover:text-green-500 hover:border-green-500 tab-active:text-green-500 tab-active:border-green-500"
            >
              Home
            </Link>
            <Link
              to="/skills"
              role="tab"
              className="tab tab-bordered font-semibold text-lg border-green-500 hover:text-green-500 hover:border-green-500 tab-active:text-green-500 tab-active:border-green-500"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              role="tab"
              className="tab tab-bordered font-semibold text-lg border-green-500 hover:text-green-500 hover:border-green-500 tab-active:text-green-500 tab-active:border-green-500"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              role="tab"
              className="tab tab-bordered font-semibold text-lg border-green-500 hover:text-green-500 hover:border-green-500 tab-active:text-green-500 tab-active:border-green-500"
            >
              Contact Me
            </Link>
          </ul>
        </div>
      </div>

      {/* Drawer for Small Screens */}
      <div className={`drawer drawer-end ${isMenuOpen ? "drawer-open" : ""}`}>
        <input
          type="checkbox"
          id="menu-drawer"
          className="drawer-toggle"
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <div className="drawer-content">{/* The main page content */}</div>
        <div className="drawer-side">
          <label
            htmlFor="menu-drawer"
            className="drawer-overlay"
            onClick={toggleMenu}
          ></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* Sidebar content */}
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Navigation;
