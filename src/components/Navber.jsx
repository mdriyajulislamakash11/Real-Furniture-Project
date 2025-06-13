import React from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  {path: '/', label: 'furnituire'},
  {path: '/shope', label: 'shope'},
  {path: '/about', label: 'About Us'},
  {path: '/Contact', label: 'Contact Us'},
]

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 ">
      {
        navItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.label}</NavLink>
          </li>
        ))
      }
    </ul>
  )
}

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

          {/* menu item */}
          <div>
          
            <NavItems />
          
          </div>

          {/* cart */}
          <div>
            <h3>cart</h3>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navber;
