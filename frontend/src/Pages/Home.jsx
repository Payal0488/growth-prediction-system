import { FaChartLine, FaClipboardList, FaLightbulb, FaShieldAlt, FaUpload } from "react-icons/fa";
import Button from "../Components/Button";
import FeatureCard from "../Components/FeatureCard";
import StatsCard from "../Components/StatsCard";

const featureCards = [
  { title: "Growth Prediction", description: "Forecast your next quarter with AI-backed sales and growth estimates.", icon: <FaChartLine /> },
  { title: "Business Health Score", description: "Track profitability, stability, and performance in a single score.", icon: <FaShieldAlt /> },
  { title: "Risk Analysis", description: "Identify financial, market, and operational risks before they grow.", icon: <FaClipboardList /> },
  { title: "AI Recommendations", description: "Get smart actions for sales, marketing, expenses, and retention.", icon: <FaLightbulb /> },
  { title: "Report Generation", description: "Download polished reports that are ready for stakeholders and clients.", icon: <FaUpload /> },
];

const steps = [
  { title: "Upload Data", description: "Bring in historical sales and performance files in seconds." },
  { title: "Analyze Data", description: "Let the platform clean, organize, and review your business trends." },
  { title: "Predict Growth", description: "Generate forecasts with confidence, revenue, and performance insights." },
  { title: "Get Insights", description: "Receive risk alerts, recommendations, and report-ready summaries." },
];

const testimonials = [
  { name: "Ava, Retail Founder", quote: "The forecasts helped us plan inventory and staffing with much more confidence." },
  { name: "Marcus, SaaS Director", quote: "We used the health score to spot risks early and adjust the quarterly plan." },
  { name: "Nina, Operations Lead", quote: "The recommendations made our reporting and planning process feel far more strategic." },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F7F3EE] text-[#2F3A32] transition-colors dark:bg-[#1F2937] dark:text-[#F9FAFB]">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A3B18A]">AI-Powered Business Growth Prediction System</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Predict. Plan. Prosper.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#2F3A32]/75 dark:text-[#F9FAFB]/80">
              Transform historical business data into growth insights, clear forecasts, and confident decisions for your next move.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/login">Get Started</Button>
              <Button to="/dashboard" variant="secondary">Explore Dashboard</Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E5DDD3] bg-[#FFFDF9] p-8 shadow-xl dark:border-[#4B5563] dark:bg-[#374151]">
            <div className="rounded-2xl bg-[#D9E5D6] p-6 dark:bg-[#4B5563]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F3A32]/70 dark:text-[#F9FAFB]/80">Live overview</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">Forecast confidence is rising</h2>
              <p className="mt-3 text-sm leading-7 text-[#2F3A32]/75 dark:text-[#F9FAFB]/80">Your latest data shows positive momentum, stronger margins, and healthier growth potential.</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E5DDD3] bg-[#F7F3EE] p-4 dark:border-[#4B5563] dark:bg-[#1F2937]">
                <p className="text-sm font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">Projected Growth</p>
                <p className="mt-2 text-2xl font-semibold text-[#A3B18A]">+18.4%</p>
              </div>
              <div className="rounded-2xl border border-[#E5DDD3] bg-[#F7F3EE] p-4 dark:border-[#4B5563] dark:bg-[#1F2937]">
                <p className="text-sm font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">Health Score</p>
                <p className="mt-2 text-2xl font-semibold text-[#A3B18A]">84/100</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A3B18A]">Core features</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">Everything you need to understand and grow your business</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A3B18A]">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">A simple path from data to insight</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm dark:border-[#4B5563] dark:bg-[#374151]">
              <h3 className="text-lg font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#2F3A32]/75 dark:text-[#F9FAFB]/80">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <StatsCard value="18.4%" label="Predicted Growth" detail="Estimated increase over the next quarter" />
          <StatsCard value="84/100" label="Business Health" detail="Strong financial resilience and momentum" />
          <StatsCard value="92%" label="Report Accuracy" detail="Reliable insight generation from your dataset" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A3B18A]">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">Trusted by growing teams and ambitious founders</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-3xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm dark:border-[#4B5563] dark:bg-[#374151]">
              <p className="text-sm leading-7 text-[#2F3A32]/75 dark:text-[#F9FAFB]/80">“{testimonial.quote}”</p>
              <p className="mt-4 font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#E5DDD3] bg-[#FFFDF9] p-8 text-center shadow-sm dark:border-[#4B5563] dark:bg-[#374151]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A3B18A]">Ready to grow?</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">Start predicting your next successful quarter today.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#2F3A32]/75 dark:text-[#F9FAFB]/80">Register today to upload your data, evaluate your business health, and uncover opportunities for sustainable growth.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/register">Start Predicting</Button>
            <Button to="/login" variant="secondary">Create Free Account</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

