import React, { useEffect, useState } from "react";
import { FiHeart, FiMenu, FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className={`sticky z-50 top-0 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent"
      }`}>

      {/* 🔹 Main Header Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase font-serif"
            >
              Chrono<span className="text-gold-400">Mist</span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors tracking-wide uppercase"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Icons & Mobile Toggle */}
            <div className="flex items-center space-x-6">
              <motion.button whileHover={{ scale: 1.1 }} className="text-gray-300 hover:text-gold-400 transition">
                <FiSearch size={22} />
              </motion.button>

              <motion.button whileHover={{ scale: 1.1 }} className="relative text-gray-300 hover:text-gold-400 transition hidden sm:block">
                <FiHeart size={22} />
                <span className="absolute -top-2 -right-2 bg-gold-500 text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </motion.button>

              <motion.button whileHover={{ scale: 1.1 }} className="relative text-gray-300 hover:text-gold-400 transition">
                <FiShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-gold-500 text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  5
                </span>
              </motion.button>

              <div className="md:hidden">
                <button
                  className="text-gray-300 hover:text-gold-400 transition"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔸 Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="block text-gray-300 hover:text-gold-400 text-lg font-medium tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
