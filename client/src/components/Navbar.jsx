import React, { useState } from "react"; // 1. Added useState
import { Link, useLocation } from "react-router-dom"; // 2. Added useLocation for active styling
import { ChevronDown, Phone } from "lucide-react";
import Loader from "../assets/Loader.svg";

const Navbar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const location = useLocation();

  // Helper function for active link styling
  const isActive = (path) => location.pathname === path ? "text-[#C8643C]" : "text-gray-600";

  const extraPages = [
    { name: "FAQ", path: "/faq" },
    { name: "Case Study", path: "/case-study" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
    { name: "Not Found", path: "*" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img src={Loader} alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold tracking-tight text-[#4A2B20]">
            Glowix<span className="text-[#C8643C]">.</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex list-none items-center gap-8 font-semibold">
            <li>
              <Link to="/" className={`${isActive("/")} hover:text-[#C8643C] transition-colors`}>Home</Link>
            </li>
            <li><Link to="/about" className={`${isActive("/about")} hover:text-[#C8643C] transition-colors`}>About Us</Link></li>
            <li><Link to="/services" className={`${isActive("/services")} hover:text-[#C8643C] transition-colors`}>Services</Link></li>
            <li><Link to="/blog" className={`${isActive("/blog")} hover:text-[#C8643C] transition-colors`}>Blog</Link></li>
            
            {/* DROPDOWN LOGIC START */}
            <li 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsPagesOpen(true)}
              onMouseLeave={() => setIsPagesOpen(false)}
            >
              <div className="flex items-center gap-1 text-gray-600 hover:text-[#C8643C] transition-colors">
                Pages <ChevronDown size={16} className={`transition-transform ${isPagesOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Menu */}
              {isPagesOpen && (
                <ul className="absolute left-0 top-full w-48 bg-white shadow-xl rounded-lg py-3 border border-gray-100 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                  {extraPages.map((page) => (
                    <li key={page.path}>
                      <Link
                        to={page.path}
                        className="block px-6 py-2 text-sm text-gray-600 hover:bg-[#FDF2F0] hover:text-[#C8643C] transition-colors"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* DROPDOWN LOGIC END */}

            <li><Link to="/contact" className={`${isActive("/contact")} hover:text-[#C8643C] transition-colors`}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Action Section */}
        <div className="hidden items-center gap-8 xl:flex">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F0]">
              <Phone size={18} className="fill-[#C8643C] text-[#C8643C]" />
            </div>
            <span className="text-lg font-bold text-[#383838]">
              (+22) 123 456 789
            </span>
          </div>

          <Link
            to="/appointment"
            className="rounded-full bg-[#C8643C] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8643C]/20 transition-all hover:bg-[#b05632] hover:-translate-y-0.5 active:scale-95"
          >
            MAKE AN APPOINTMENT
          </Link>
        </div>

        <div className="lg:hidden">
          <button className="text-[#4A2B20]">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;