import HealthScoreCard from "../Components/HealthScoreCard";

const HealthScore = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#FFFDF9] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">Business health</p>
        <h1 className="mt-2 text-3xl font-bold text-[#2F3A32]">Performance health overview</h1>
        <p className="mt-3 max-w-2xl text-[#2F3A32]/70">
          Monitor your health score, track the drivers behind it, and identify practical opportunities for growth.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <HealthScoreCard
          score={84}
          status="Excellent"
          factors={[
            "Revenue growth remains strong",
            "Expense ratio improved by 8%",
            "Customer retention is trending up",
          ]}
        />

        <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2F3A32]">Health insights</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#2F3A32]/75">
            <li className="rounded-xl bg-[#F7F3EE] p-3">Profitability remains healthy with improving margins.</li>
            <li className="rounded-xl bg-[#F7F3EE] p-3">Marketing efficiency is below target and should be adjusted.</li>
            <li className="rounded-xl bg-[#F7F3EE] p-3">Inventory costs are stable and under control.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthScore;
