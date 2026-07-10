import {
  FaHome,
  FaUpload,
  FaChartLine,
  FaHeartbeat,
  FaRobot,
  FaFileAlt,
  FaSlidersH,
  FaExclamationTriangle,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    name: "Upload Data",
    icon: <FaUpload />,
    path: "/upload",
  },
  {
    name: "Prediction",
    icon: <FaChartLine />,
    path: "/prediction",
  },
  {
    name: "Business Health",
    icon: <FaHeartbeat />,
    path: "/health",
  },
  {
    name: "AI Recommendations",
    icon: <FaRobot />,
    path: "/recommendations",
  },
  {
    name: "Reports",
    icon: <FaFileAlt />,
    path: "/reports",
  },
  {
    name: "What-If Analysis",
    icon: <FaSlidersH />,
    path: "/what-if",
  },
  {
    name: "Risk Analysis",
    icon: <FaExclamationTriangle />,
    path: "/risk",
  },
  {
    name: "Settings",
    icon: <FaCog />,
    path: "/settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 bg-[#FFFDF9] border-r border-[#E5DDD3] min-h-screen p-6">

      <h1 className="text-3xl font-bold text-[#2F3A32] mb-10">
        GrowthPilot
      </h1>

      <nav className="space-y-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 rounded-xl transition
              ${
                isActive
                  ? "bg-[#D9E5D6] text-[#2F3A32]"
                  : "hover:bg-[#F7F3EE]"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            {item.name}
          </NavLink>
        ))}

      </nav>
    </aside>
  );
};

export default Sidebar;