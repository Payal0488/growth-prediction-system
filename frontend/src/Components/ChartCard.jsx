import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const ChartCard = ({ title, subtitle, type = "line", data = [] }) => {
  const renderChart = () => {
    if (type === "bar") {
      return (
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data}>
            <CartesianGrid stroke="#E5DDD3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#2F3A32", fontSize: 12 }} />
            <YAxis tick={{ fill: "#2F3A32", fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="value" fill="#CBBBA0" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      );
    }

    if (type === "area") {
      return (
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={data}>
            <CartesianGrid stroke="#E5DDD3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#2F3A32", fontSize: 12 }} />
            <YAxis tick={{ fill: "#2F3A32", fontSize: 12 }} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#A3B18A" fill="#D9E5D6" />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    return (
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid stroke="#E5DDD3" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#2F3A32", fontSize: 12 }} />
          <YAxis tick={{ fill: "#2F3A32", fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#A3B18A" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#2F3A32]">{title}</h3>
        <p className="text-sm text-[#2F3A32]/70">{subtitle}</p>
      </div>
      {renderChart()}
    </div>
  );
};

export default ChartCard;
