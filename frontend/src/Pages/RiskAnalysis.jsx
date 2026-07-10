const risks = [
  { level: "Medium", title: "Marketing efficiency is slipping", detail: "Lower-than-expected conversion rates suggest the return on ad spend should be reviewed." },
  { level: "Low", title: "Inventory turnover is stable", detail: "Stock levels are balanced and there is no immediate supply risk." },
  { level: "High", title: "Customer churn is rising", detail: "Recent retention data indicates some segments need more support." },
];

const RiskAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#FFFDF9] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">Risk analysis</p>
        <h1 className="mt-2 text-3xl font-bold text-[#2F3A32]">Current exposure and mitigation priorities</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2F3A32]">Risk overview</h3>
          <div className="mt-5 rounded-2xl bg-[#D9E5D6] p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F3A32]/70">Overall risk</p>
            <p className="mt-2 text-5xl font-semibold text-[#2F3A32]">Medium</p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2F3A32]">Suggested actions</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#2F3A32]/75">
            <li className="rounded-xl bg-[#F7F3EE] p-3">Increase retention outreach for at-risk accounts.</li>
            <li className="rounded-xl bg-[#F7F3EE] p-3">Reallocate ad spend toward higher-converting segments.</li>
            <li className="rounded-xl bg-[#F7F3EE] p-3">Review operating expenses weekly to prevent margin pressure.</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {risks.map((risk) => (
          <div key={risk.title} className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#2F3A32]">{risk.title}</h3>
              <span className="rounded-full bg-[#E7D7C9] px-3 py-1 text-sm font-semibold text-[#2F3A32]">{risk.level}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-[#2F3A32]/70">{risk.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskAnalysis;
