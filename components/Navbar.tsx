'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navListMenuItems = [
  { title: "Products", description: "Find the perfect solution for your needs.", href: "/products" },
  { title: "About Us", description: "Meet and learn about our dedication", href: "/about" },
  // ... other menu items
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative group">
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
      >
        Resources
        <ChevronDownIcon className="w-4 h-4" />
      </button>
      {isMenuOpen && (
        <div className="absolute z-10 w-screen max-w-md px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
              {navListMenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                >
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/userdashboard">
              <span className="text-xl font-bold">CODEWITHME</span>
              </Link>
            </div>
        
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/login" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Log In
            </Link>
            <Link href="/register" className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign In
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setOpenNav(!openNav)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {openNav ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {openNav && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1 items-center flex justify-center">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Home
            </Link>
            <Link href="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Resources
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Contact Us
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Log In
              </Link>
              <Link href="/register" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}