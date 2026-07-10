import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-[#E5DDD3] bg-[#FFFDF9] px-3 py-2 text-sm font-semibold text-[#2F3A32] transition hover:bg-[#F7F3EE] dark:border-[#4B5563] dark:bg-[#374151] dark:text-[#F9FAFB] dark:hover:bg-[#4B5563]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
};

export default ThemeToggle;
