import { Moon, Sun } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" onClick={toggleTheme} className={styles.toggle} aria-label="Toggle theme">
      {theme === "dark" ? <Sun className={styles.icon} /> : <Moon className={styles.icon} />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
};

export default ThemeToggle;
