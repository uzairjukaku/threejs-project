import React from "react";

function Menu({ toggleMenu }) {
  return (
    <div
      className={`fixed z-[10000] h-screen w-screen inset-0 bg-black transition-transform duration-300
    
       flex justify-center items-center`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-10 right-16 text-white text-6xl focus:outline-none"
      >
        &times;
      </button>

      <ul className="text-white text-2xl space-y-4">
        <li>
          <a onClick={toggleMenu}>Home</a>
        </li>
        <li>
          <a onClick={toggleMenu}>Products</a>
        </li>
        <li>
          <a onClick={toggleMenu}>About Us</a>
        </li>
        <li>
          <a onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
