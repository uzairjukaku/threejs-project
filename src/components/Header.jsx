import React from "react";

function Header() {
  return (
    <header className="w-full bg-transparent fixed top-0 left-0">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div href="/" className="flex items-center">
          <img
            src="/Logo.png"
            alt="Cigar Company Logo"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <button className="text-white focus:outline-none">
          <span className="sr-only">Open menu</span>
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
