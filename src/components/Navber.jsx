import React from "react";
import { Link, NavLink } from "react-router-dom";

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
