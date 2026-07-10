import { FaChartLine, FaDollarSign, FaReceipt, FaRocket } from "react-icons/fa";
import DashboardCard from "../Components/DashboardCard";
import ChartCard from "../Components/ChartCard";

const revenueData = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 135 },
  { name: "Mar", value: 148 },
  { name: "Apr", value: 160 },
  { name: "May", value: 170 },
  { name: "Jun", value: 182 },
];

const profitData = [
  { name: "Jan", value: 34 },
  { name: "Feb", value: 38 },
  { name: "Mar", value: 42 },
  { name: "Apr", value: 44 },
  { name: "May", value: 48 },
  { name: "Jun", value: 51 },
];

const growthData = [
  { name: "Jan", value: 8 },
  { name: "Feb", value: 10 },
  { name: "Mar", value: 12 },
  { name: "Apr", value: 14 },
  { name: "May", value: 15 },
  { name: "Jun", value: 18 },
];

const insights = [
  "Customer retention improved by 6% this month.",
  "Marketing spend efficiency is trending positively.",
  "Profit margin outperformed the previous quarter.",
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#FFFDF9] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">Executive overview</p>
        <h1 className="mt-2 text-3xl font-bold text-[#2F3A32]">Business performance at a glance</h1>
        <p className="mt-3 max-w-2xl text-[#2F3A32]/70">
          Track key metrics, monitor growth patterns, and act on predictive recommendations without leaving the dashboard.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        <DashboardCard title="Revenue" value="$182k" trend="↑ 14%" subtitle="vs previous month" icon={<FaDollarSign />} tone="soft" />
        <DashboardCard title="Expenses" value="$78k" trend="↓ 3%" subtitle="operating costs" icon={<FaReceipt />} />
        <DashboardCard title="Profit" value="$104k" trend="↑ 11%" subtitle="net margin" icon={<FaChartLine />} tone="accent" />
        <DashboardCard title="Growth %" value="18.4%" trend="↑ 2.6%" subtitle="forecasted" icon={<FaRocket />} />
        <DashboardCard title="Health Score" value="84/100" trend="Excellent" subtitle="business health" icon={<FaChartLine />} tone="soft" />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard title="Sales trend" subtitle="Revenue trajectory over time" type="line" data={revenueData} />
        <ChartCard title="Profit trend" subtitle="Profit performance" type="bar" data={profitData} />
        <ChartCard title="Growth trend" subtitle="Quarterly growth acceleration" type="area" data={growthData} />

        <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2F3A32]">Recent insights</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#2F3A32]/75">
            {insights.map((item) => (
              <li key={item} className="rounded-xl bg-[#F7F3EE] p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;