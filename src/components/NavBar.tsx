"use client";

import { TransitionLink } from "@/components/utils/transitionLink";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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

  const scrollToFooter = () => {
    setIsOpen(false);
    if (window.location.pathname === '/') {
      const footer = document.getElementById('contact-section');
      footer?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact-section');
    } else {
      router.push('/#contact-section');
    }
  };

  return (
    <nav className="bg-black sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <TransitionLink href="/" className="font-bold text-lg text-white">
            <b>PRO</b> FITNESS
          </TransitionLink>

          {/* Center: Search (desktop only) */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center w-[45%]">
            <div className="relative w-full">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for fitness services..."
                className="pl-10 w-full bg-black border-gray-700 text-white placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          {/* Right: Links & Icons */}
          <div className="flex items-center gap-4">
            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-1">
              <Button asChild variant="ghost" className="text-white hover:bg-gray-800">
                <TransitionLink href="/">Home</TransitionLink>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:bg-gray-800">
                <TransitionLink href="/services">Services</TransitionLink>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:bg-gray-800">
                <TransitionLink href="/about">About</TransitionLink>
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-gray-800"
                onClick={scrollToFooter}
              >
                Contact
              </Button>
            </nav>

            {/* Cart & Profile */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                <FaShoppingCart className="h-5 w-5" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                    <FaUserCircle className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                  <DropdownMenuItem asChild className="hover:bg-gray-700">
                    <TransitionLink href="/auth/login" className="text-white">
                      Login
                    </TransitionLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-gray-700">
                    <TransitionLink href="/auth/signup" className="text-white">
                      Sign Up
                    </TransitionLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-3 space-y-2">
            <form onSubmit={handleSearch} className="mb-2">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  className="pl-10 w-full bg-gray-800 border-gray-700 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
            
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800" asChild>
              <TransitionLink href="/" onClick={() => setIsOpen(false)}>
                Home
              </TransitionLink>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800" asChild>
              <TransitionLink href="/services" onClick={() => setIsOpen(false)}>
                Services
              </TransitionLink>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800" asChild>
              <TransitionLink href="/about" onClick={() => setIsOpen(false)}>
                About
              </TransitionLink>
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:bg-gray-800"
              onClick={() => {
                scrollToFooter();
                setIsOpen(false);
              }}
            >
              Contact
            </Button>
            
            <div className="pt-2 border-t border-gray-800">
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800" asChild>
                <TransitionLink href="/auth/login" onClick={() => setIsOpen(false)}>
                  Login
                </TransitionLink>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800" asChild>
                <TransitionLink href="/auth/signup" onClick={() => setIsOpen(false)}>
                  Sign Up
                </TransitionLink>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;