import RecommendationCard from "../Components/RecommendationCard";

const recommendations = [
  {
    title: "Increase retention campaigns",
    category: "Customer Retention",
    priority: "High",
    description: "Launch a personalized loyalty campaign to reduce churn and raise repeat purchases.",
  },
  {
    title: "Shift paid media mix",
    category: "Marketing",
    priority: "Medium",
    description: "Move more of the budget into remarketing and search ads to improve conversion efficiency.",
  },
  {
    title: "Trim recurring overhead",
    category: "Expenses",
    priority: "High",
    description: "Review subscriptions and vendor contracts to improve short-term profitability.",
  },
  {
    title: "Cross-sell premium bundles",
    category: "Sales",
    priority: "Medium",
    description: "Introduce bundle offers to increase average order value with existing customers.",
  },
];

const Recommendations = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#FFFDF9] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">AI recommendations</p>
        <h1 className="mt-2 text-3xl font-bold text-[#2F3A32]">Smart actions tailored to your growth goals</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {recommendations.map((item) => (
          <RecommendationCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
