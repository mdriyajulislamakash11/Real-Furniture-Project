import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaShoppingBag } from "react-icons/fa";

const navItems = [
  { path: "/", label: "furnituire" },
  { path: "/shope", label: "shope" },
  { path: "/about", label: "About Us" },
  { path: "/Contact", label: "Contact Us" },
];

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 ">
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink
            className={({ isActive}) =>
              isActive 
            ? "text-primary font-bold" 
            : "hover:text-primary"
            }
            to={item.path}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navber = () => {
  return (
    <div>
      <header>
        <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
          {/* Logo */}
          <div>
            <Link className="font-bold" to="/">
              logo
            </Link>
          </div>

          {/* hamburger menu */}
          <div className="md:hidden text-xl cursor-pointer hover:text-primary">
            <FaBars />
          </div>

          {/* menu item */}
          <div className="hidden md:flex">
            <NavItems />
          </div>

          {/* cart */}
          <div className="hidden md:block cursor-pointer relative">
            <FaShoppingBag  className="text-xl"/>
            <sup className="absolute top-0 -right-2 bg-primary text-white w-4 h-4 rounded-full flex items-center justify-center text-xs">
              0
            </sup>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navber;
