const HealthScoreCard = ({ score, status, factors }) => {
  return (
    <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[#2F3A32]/70">Business Health</p>
          <p className="mt-2 text-4xl font-semibold text-[#2F3A32]">{score}/100</p>
        </div>
        <div className="rounded-full bg-[#D9E5D6] px-4 py-2 text-sm font-semibold text-[#2F3A32]">{status}</div>
      </div>

      <div className="mt-5 h-3 rounded-full bg-[#F7F3EE]">
        <div className="h-3 rounded-full bg-[#A3B18A]" style={{ width: `${score}%` }} />
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-[#2F3A32]">Contributing factors</h3>
        <ul className="mt-3 space-y-2 text-sm text-[#2F3A32]/75">
          {factors.map((factor) => (
            <li key={factor} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#CBBBA0]" />
              {factor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HealthScoreCard;
