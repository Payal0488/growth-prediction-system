import PredictionCard from "../Components/PredictionCard";
import ChartCard from "../Components/ChartCard";

const forecastData = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 132 },
  { name: "Mar", value: 148 },
  { name: "Apr", value: 160 },
  { name: "May", value: 170 },
  { name: "Jun", value: 182 },
];

const Prediction = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#FFFDF9] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">AI prediction</p>
        <h1 className="mt-2 text-3xl font-bold text-[#2F3A32]">Forecast your next growth cycle with confidence</h1>
        <p className="mt-3 max-w-2xl text-[#2F3A32]/70">
          The model combines your historical sales trends, costs, and customer behavior into a forward-looking outlook.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <PredictionCard label="Predicted growth" value="18.4%" caption="Projected uplift over next quarter" accent="soft" />
        <PredictionCard label="Confidence score" value="92%" caption="High confidence based on recent data" accent="accent" />
        <PredictionCard label="Forecasted sales" value="$182k" caption="Estimated revenue for the next period" />
      </div>

      <ChartCard title="Prediction outlook" subtitle="Projected growth trend" type="area" data={forecastData} />
    </div>
  );
};

export default Prediction;