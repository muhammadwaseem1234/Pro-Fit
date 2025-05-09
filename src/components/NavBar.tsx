"use client";

import { TransitionLink } from "@/components/utils/transitionLink";
import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 space-x-6">

          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-lg">
              <b>PRO</b> FITNESS
            </a>
          </div>

          {/* Center: Location + Search (desktop only) */}
          <div className="hidden md:flex items-center space-x-4 w-[45%]">

            <div className="flex items-center border border-white/30 rounded px-3 py-2 w-full text-sm text-white">
              <FaSearch className="mr-2" />
              <input
                type="text"
                placeholder="Search for services"
                className="bg-transparent outline-none text-white placeholder-white w-full"
              />
            </div>
          </div>

          {/* Right: Links, Icons, Mobile Button */}
          <div className="flex items-center space-x-6">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-4">
              <TransitionLink href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Home
              </TransitionLink>
              <TransitionLink href="/services" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Services
              </TransitionLink>
              <TransitionLink href="/about" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                About
              </TransitionLink>
              <TransitionLink href="/contactus" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Contact Us
              </TransitionLink>
            </div>

            {/* Cart & Profile (desktop only) */}
            <div className="relative hidden md:flex items-center space-x-4 text-white text-xl">
              <FaShoppingCart className="cursor-pointer hover:text-gray-300" />

              <div className="relative">
                <FaUserCircle
                  onClick={() => setShowProfileDropdown((v) => !v)}
                  className="cursor-pointer hover:text-gray-300"
                />
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                    <TransitionLink
                      href="/auth/login"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      Login
                    </TransitionLink>
                    <TransitionLink
                      href="/auth/signup"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      Sign Up
                    </TransitionLink>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute bg-black w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["/", "/services", "/about", "/contactus", "/auth/login", "/auth/signup"].map((href, idx) => (
              <TransitionLink
                key={idx}
                href={href}
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                {href === "/" ? "Home" : href.split("/").slice(-1)[0].replace(/auth\/|^\w/, c => c.toUpperCase())}
              </TransitionLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
