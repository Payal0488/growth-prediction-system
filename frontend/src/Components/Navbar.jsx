import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Features", to: "/#features" },
  { name: "Dashboard", to: "/dashboard" },
  { name: "About", to: "/#about" },
  { name: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5DDD3] bg-[#FFFDF9]/90 backdrop-blur dark:border-[#4B5563] dark:bg-[#1F2937]/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9E5D6] text-lg font-semibold text-[#2F3A32] dark:bg-[#4B5563] dark:text-[#F9FAFB]">
            GP
          </div>
          <div>
            <p className="text-lg font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">Growth Prediction</p>
            <p className="text-xs text-[#2F3A32]/70 dark:text-[#F9FAFB]/70">Predict. Plan. Prosper.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="text-sm font-medium text-[#2F3A32] transition hover:text-[#A3B18A] dark:text-[#F9FAFB] dark:hover:text-[#D9E5D6]">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button to="/login" variant="ghost">Login</Button>
          <Button to="/register">Register</Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full border border-[#E5DDD3] bg-[#FFFDF9] p-2 text-[#2F3A32] dark:border-[#4B5563] dark:bg-[#374151] dark:text-[#F9FAFB]">
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#E5DDD3] bg-[#FFFDF9] px-4 py-4 shadow-sm dark:border-[#4B5563] dark:bg-[#1F2937] lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.to} className="text-sm font-medium text-[#2F3A32] dark:text-[#F9FAFB]" onClick={() => setMobileOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button to="/login" variant="secondary" full>
                Login
              </Button>
              <Button to="/register" full>
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;