const ReportCard = ({ title, value, detail }) => {
  return (
    <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-5 shadow-sm">
      <p className="text-sm font-medium text-[#2F3A32]/70">{title}</p>
      <p className="mt-3 text-2xl font-semibold text-[#2F3A32]">{value}</p>
      <p className="mt-2 text-sm text-[#2F3A32]/70">{detail}</p>
    </div>
  );
};

export default ReportCard;
