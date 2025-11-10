import React, { useEffect, useState } from "react";
import { FiHeart, FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "Products", link: "#products" },
    { id: 3, name: "Categories", link: "#categories" },
    { id: 4, name: "Offers", link: "#offers" },
    { id: 5, name: "About", link: "#about" },
    { id: 6, name: "Contact", link: "#contact" },
  ];

  return (
    <header className="sticky z-50 top-0 transition-all duration-300">
      {/* 🔹 Top Header Section */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-gray-100/95 backdrop-blur shadow-md py-4"
            : "bg-gray-100 py-8"
        }`}
      >
        <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            {/* Logo + Mobile Menu Button */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <a
                href="/"
                className="text-3xl md:text-4xl font-extrabold text-pink-600 tracking-wide"
              >
                ChronoMist
              </a>
              <button
                className="md:hidden text-gray-700 hover:text-pink-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
              >
                <FiMenu size={28} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="w-full md:max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-5 py-3 md:py-3.5 text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-pink-600"
                  aria-label="Search button"
                >
                  <FiSearch size={20} />
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center justify-end w-full md:w-auto space-x-6 md:space-x-8">
              <button
                className="relative p-2 text-gray-700 hover:text-pink-600"
                aria-label="Wishlist"
              >
                <FiHeart size={24} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                className="relative p-2 text-gray-700 hover:text-pink-600"
                aria-label="Cart"
              >
                <FiShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  5
                </span>
              </button>
              <button
                className="p-2 text-gray-700 hover:text-pink-600"
                aria-label="User"
              >
                <FiUser size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔸 Navigation Bar */}
      <div className="bg-pink-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center py-4">
            <ul className="flex flex-wrap gap-x-10 text-lg font-medium text-white">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="hover:text-pink-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 bg-white rounded-lg shadow-md p-5 space-y-4 text-pink-950 text-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="block hover:text-pink-600 text-lg font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
