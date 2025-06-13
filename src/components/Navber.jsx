import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";

const navItems = [
  { path: "/", label: "furnituire" },
  { path: "/shope", label: "shope" },
  { path: "/about", label: "About Us" },
  { path: "/Contact", label: "Contact Us" },
];

const NavItems = ({handleToggleMenu}) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 ">
      {navItems.map((item, index) => (
        <li key={index} onClick={handleToggleMenu}>
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

  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const handleToggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  }

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
          <div onClick={handleToggleMenu} className="md:hidden text-xl cursor-pointer hover:text-primary">
            {
              isMenuOpen ? null : <FaBars /> 
            }
            
          </div>

          {/* menu item */}
          <div className="hidden md:flex">
            <NavItems />
          </div>

          {/* Mobail menu items */}
          <div 
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={handleToggleMenu}>
              <FaTimes />
            </div>
            <NavItems handleToggleMenu={handleToggleMenu}/>
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
