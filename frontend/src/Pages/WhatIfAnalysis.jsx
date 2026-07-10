import { useState } from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const initialData = [
  { name: "Q1", value: 120 },
  { name: "Q2", value: 145 },
  { name: "Q3", value: 160 },
  { name: "Q4", value: 190 },
];

const WhatIfAnalysis = () => {
  const [marketing, setMarketing] = useState(30);
  const [expenses, setExpenses] = useState(20);
  const [prediction, setPrediction] = useState(190);

  const simulate = () => {
    const growthBoost = marketing * 1.4;
    const costOffset = expenses * 0.8;
    setPrediction(Math.round(190 + growthBoost - costOffset));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#FFFDF9] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">What-if analysis</p>
        <h1 className="mt-2 text-3xl font-bold text-[#2F3A32]">Test different business scenarios</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2F3A32]">Scenario controls</h3>

          <label className="mt-5 block text-sm font-medium text-[#2F3A32]">
            Marketing budget increase (%): {marketing}%
            <input type="range" min="0" max="50" value={marketing} onChange={(e) => setMarketing(Number(e.target.value))} className="mt-3 w-full accent-[#A3B18A]" />
          </label>

          <label className="mt-6 block text-sm font-medium text-[#2F3A32]">
            Expense control (%): {expenses}%
            <input type="range" min="0" max="30" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} className="mt-3 w-full accent-[#A3B18A]" />
          </label>

          <button onClick={simulate} className="mt-6 rounded-xl bg-[#A3B18A] px-4 py-2 font-semibold text-white transition hover:opacity-90">
            Run simulation
          </button>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-[#F7F3EE] p-4">
              <p className="text-sm text-[#2F3A32]/70">Estimated revenue</p>
              <p className="mt-2 text-2xl font-semibold text-[#2F3A32]">${prediction}k</p>
            </div>
            <div className="rounded-xl bg-[#F7F3EE] p-4">
              <p className="text-sm text-[#2F3A32]/70">Growth uplift</p>
              <p className="mt-2 text-2xl font-semibold text-[#2F3A32]">+{marketing + expenses}%</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2F3A32]">Updated forecast</h3>
          <div className="mt-5 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[...initialData, { name: "Next", value: prediction / 1.1 }]}> 
                <CartesianGrid stroke="#E5DDD3" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "#2F3A32", fontSize: 12 }} />
                <YAxis tick={{ fill: "#2F3A32", fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#A3B18A" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIfAnalysis;
