const RecommendationCard = ({ title, category, priority, description }) => {
  const priorityStyles = {
    High: "bg-[#E7D7C9] text-[#2F3A32]",
    Medium: "bg-[#D9E5D6] text-[#2F3A32]",
    Low: "bg-[#FFFDF9] text-[#2F3A32]",
  };

  return (
    <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#A3B18A]">{category}</p>
          <h3 className="mt-2 text-lg font-semibold text-[#2F3A32]">{title}</h3>
        </div>
        <span className={`rounded-full px-3 py-1 text-sm font-semibold ${priorityStyles[priority]}`}>{priority}</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-[#2F3A32]/75">{description}</p>
    </div>
  );
};

export default RecommendationCard;
