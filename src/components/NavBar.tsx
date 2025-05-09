"use client";

import { TransitionLink } from "@/components/utils/transitionLink";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 space-x-6">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <TransitionLink href="/" className="text-white font-bold text-lg">
              <b>PRO</b> FITNESS
            </TransitionLink>
          </div>

          {/* Center: Search (desktop only) */}
          <div className="hidden md:flex items-center space-x-4 w-[45%]">
            <form onSubmit={handleSearch} className="w-full">
              <div className="flex items-center border border-white/30 rounded px-3 py-2 w-full text-sm text-white">
                <FaSearch className="mr-2" />
                <input
                  type="text"
                  placeholder="Search for fitness services..."
                  className="bg-transparent outline-none text-white placeholder-white/80 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search services"
                />
              </div>
            </form>
          </div>

          {/* Right: Links, Icons, Mobile Button */}
          <div className="flex items-center space-x-6">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-4">
              <TransitionLink href="/" className="text-white hover:bg-white hover:text-black rounded-lg px-3 py-2 transition-colors duration-200">
                Home
              </TransitionLink>
              <TransitionLink href="/services" className="text-white hover:bg-white hover:text-black rounded-lg px-3 py-2 transition-colors duration-200">
                Services
              </TransitionLink>
              <TransitionLink href="/about" className="text-white hover:bg-white hover:text-black rounded-lg px-3 py-2 transition-colors duration-200">
                About
              </TransitionLink>
              <TransitionLink href="/contact" className="text-white hover:bg-white hover:text-black rounded-lg px-3 py-2 transition-colors duration-200">
                Contact
              </TransitionLink>
            </div>

            {/* Cart & Profile (desktop only) */}
            <div className="relative hidden md:flex items-center space-x-4 text-white text-xl">
              <TransitionLink href="/cart" className="hover:text-gray-300 transition-colors duration-200">
                <FaShoppingCart className="cursor-pointer" />
              </TransitionLink>

              <div className="relative">
                <FaUserCircle
                  onClick={() => setShowProfileDropdown((v) => !v)}
                  className="cursor-pointer hover:text-gray-300 transition-colors duration-200"
                />
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden">
                    <TransitionLink
                      href="/auth/login"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      Login
                    </TransitionLink>
                    <TransitionLink
                      href="/auth/signup"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      Sign Up
                    </TransitionLink>
                    <div className="border-t border-gray-200">
                      <TransitionLink
                        href="/profile"
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        My Profile
                      </TransitionLink>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <form onSubmit={handleSearch} className="mb-4 px-2">
              <div className="flex items-center border border-white/30 rounded px-3 py-2 w-full text-sm text-white">
                <FaSearch className="mr-2" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="bg-transparent outline-none text-white placeholder-white/80 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Mobile search services"
                />
              </div>
            </form>
            
            {["/", "/services", "/about", "/contact", "/auth/login", "/auth/signup", "/cart"].map((href) => (
              <TransitionLink
                key={href}
                href={href}
                className="text-white block hover:bg-white hover:text-black rounded-lg px-3 py-2 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {href === "/" ? "Home" : 
                 href === "/auth/login" ? "Login" :
                 href === "/auth/signup" ? "Sign Up" :
                 href.charAt(1).toUpperCase() + href.slice(2)}
              </TransitionLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;