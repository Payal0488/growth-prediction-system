import React from "react";

const Badge = ({ icon, children }) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-[#2F3A32] bg-[#F7F3EE] border border-[#E5DDD3] dark:bg-transparent dark:border-[#4B5563] dark:text-[#F9FAFB]/90">
      {icon ? <span className="text-[#6F8A64]">{icon}</span> : null}
      {children}
    </span>
  );
};

export default Badge;
