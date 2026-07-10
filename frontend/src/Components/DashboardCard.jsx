const DashboardCard = ({ title, value, trend, subtitle, icon, tone = "default" }) => {
  const toneStyles = {
    default: "bg-[#FFFDF9] border-[#E5DDD3]",
    soft: "bg-[#D9E5D6] border-[#D9E5D6]",
    accent: "bg-[#E7D7C9] border-[#E7D7C9]",
  };

  return (
    <div className={`rounded-2xl border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${toneStyles[tone]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-[#2F3A32]/70">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-[#2F3A32]">{value}</p>
        </div>
        <div className="rounded-xl bg-white/70 p-3 text-xl text-[#A3B18A]">{icon}</div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-[#2F3A32]/70">{subtitle}</span>
        <span className="font-semibold text-[#A3B18A]">{trend}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
