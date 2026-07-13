import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/Icons/growth_preview.png";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Features", to: "/#features" },
  { name: "Dashboard", to: "/dashboard" },
  { name: "About", to: "/#about" },
  { name: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <div className={styles.logoCircle}>
            <img src={logo} alt="Growth Prediction logo" className={styles.logoImage} />
          </div>
          <div className={styles.brandText}>
            <p className={styles.brandTitle}>Growth Prediction</p>
          </div>
        </Link>

        <nav className={styles.navLinks}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to || location.hash === link.to.replace("/", "");
            return (
              <Link
                key={link.name}
                to={link.to}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className={styles.brandActions}>
          <ThemeToggle />
          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>
          <Link to="/register" className={styles.registerButton}>
            Register
          </Link>
        </div>

        <button className={styles.menuToggle} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.to} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className={styles.mobileActions}>
            <Link to="/login" className={styles.loginButton} onClick={() => setMobileOpen(false)}>
              Login
            </Link>
            <Link to="/register" className={styles.registerButton} onClick={() => setMobileOpen(false)}>
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;