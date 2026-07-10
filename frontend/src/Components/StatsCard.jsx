const StatsCard = ({ value, label, detail }) => {
  return (
    <div className="rounded-3xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 text-center shadow-sm dark:border-[#4B5563] dark:bg-[#374151]">
      <p className="text-3xl font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">{value}</p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">{label}</p>
      <p className="mt-3 text-sm text-[#2F3A32]/70 dark:text-[#F9FAFB]/80">{detail}</p>
    </div>
  );
};

export default StatsCard;
