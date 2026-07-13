import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F7F3EE] text-[#2F3A32] dark:bg-[#1F2937] dark:text-[#F9FAFB]">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
