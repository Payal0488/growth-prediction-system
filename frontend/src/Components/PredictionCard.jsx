const PredictionCard = ({ label, value, caption, accent = "default" }) => {
  const accentStyles = {
    default: "bg-[#FFFDF9] border-[#E5DDD3]",
    soft: "bg-[#D9E5D6] border-[#D9E5D6]",
    accent: "bg-[#E7D7C9] border-[#E7D7C9]",
  };

  return (
    <div className={`rounded-2xl border p-5 shadow-sm ${accentStyles[accent]}`}>
      <p className="text-sm font-medium text-[#2F3A32]/70">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-[#2F3A32]">{value}</p>
      <p className="mt-2 text-sm text-[#2F3A32]/70">{caption}</p>
    </div>
  );
};

export default PredictionCard;
