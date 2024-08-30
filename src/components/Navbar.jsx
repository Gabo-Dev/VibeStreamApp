import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 flex text-xl md:justify-between text-gray-200 justify-center items-center h-16">
      {/* Link to navigate to different pages 1rem between each*/}
      <div className="flex p-4  space-x-4">
        <Link to="/">Home</Link>
        <Link to="/TopGlobal">Top Global</Link>
      </div>  
    </nav>
  );
}

export default Navbar;
