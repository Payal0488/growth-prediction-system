import { Link } from "react-router-dom";

const Button = ({ children, to, onClick, type = "button", variant = "primary", className = "", full = false }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 shadow-sm";

  const variants = {
    primary: "bg-[#A3B18A] text-white hover:bg-[#8fa07a] dark:bg-[#6b7f5c] dark:hover:bg-[#5d704f]",
    secondary: "border border-[#E5DDD3] bg-[#FFFDF9] text-[#2F3A32] hover:bg-[#F7F3EE] dark:border-[#4B5563] dark:bg-[#374151] dark:text-[#F9FAFB] dark:hover:bg-[#4B5563]",
    ghost: "bg-transparent text-[#2F3A32] hover:bg-[#F7F3EE] dark:text-[#F9FAFB] dark:hover:bg-[#4B5563]",
  };

  const widthClass = full ? "w-full" : "";

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
