import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CloudUpload,
  Cpu,
  FileText,
  HeartPulse,
  Lightbulb,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingUp,
} from "lucide-react";

const whyCards = [
  {
    title: "AI-driven predictions",
    description: "Leverage machine learning to forecast demand, revenue, and growth opportunities with confidence.",
    icon: <Cpu className="h-6 w-6 text-[#6F8A64]" />,
  },
  {
    title: "Crystal-clear insights",
    description: "Turn raw performance into easy-to-read recommendations, trend summaries, and opportunity signals.",
    icon: <BarChart3 className="h-6 w-6 text-[#6F8A64]" />,
  },
  {
    title: "Smarter decisions",
    description: "Act on the right next steps with contextual guidance designed for business leaders and operators.",
    icon: <Lightbulb className="h-6 w-6 text-[#6F8A64]" />,
  },
];

const steps = [
  {
    title: "Upload Data",
    description: "Import your sales, operations, or financial dataset in seconds.",
    icon: <CloudUpload className="h-6 w-6 text-[#6F8A64]" />,
  },
  {
    title: "Process Data",
    description: "The platform cleans, normalizes, and prepares your data for modeling.",
    icon: <Cpu className="h-6 w-6 text-[#6F8A64]" />,
  },
  {
    title: "Generate Prediction",
    description: "AI models analyze patterns and surface a clear forecast for your business.",
    icon: <TrendingUp className="h-6 w-6 text-[#6F8A64]" />,
  },
  {
    title: "Get Insights",
    description: "Receive practical recommendations, risk signals, and confidence indicators.",
    icon: <Sparkles className="h-6 w-6 text-[#6F8A64]" />,
  },
];

const capabilityCards = [
  {
    title: "Growth Forecast",
    description: "Visualize future sales trajectories, revenue confidence bands, and top opportunity windows.",
    icon: <TrendingUp className="h-6 w-6 text-[#C89A6B]" />,
  },
  {
    title: "Business Health Score",
    description: "Monitor liquidity, customer momentum, and operational strength in a single health index.",
    icon: <HeartPulse className="h-6 w-6 text-[#C89A6B]" />,
  },
  {
    title: "Risk Analysis",
    description: "See potential exposure areas, urgency ratings, and emerging risk signals before they grow.",
    icon: <ShieldAlert className="h-6 w-6 text-[#C89A6B]" />,
  },
  {
    title: "AI Recommendations",
    description: "Get targeted actions to improve performance across sales, inventory, and resource planning.",
    icon: <Sparkles className="h-6 w-6 text-[#C89A6B]" />,
  },
];

const useCases = [
  {
    title: "Retail Businesses",
    description: "Optimize inventory mix, forecast seasonal demand, and stay ahead of store-level trends.",
    icon: <Store className="h-6 w-6 text-[#6F8A64]" />,
  },
  {
    title: "E-commerce",
    description: "Predict traffic-driven revenue, understand product performance, and refine promotional timing.",
    icon: <ShoppingBag className="h-6 w-6 text-[#6F8A64]" />,
  },
  {
    title: "Small Businesses",
    description: "Use intelligent planning tools to grow cash flow, balance staffing, and simplify strategy.",
    icon: <Briefcase className="h-6 w-6 text-[#6F8A64]" />,
  },
];

const trustCards = [
  {
    title: "Data-driven decisions",
    description: "Trust every recommendation with transparent scoring, confidence levels, and practical context.",
    icon: <ShieldCheck className="h-6 w-6 text-[#6F8A64]" />,
  },
  {
    title: "Actionable guidance",
    description: "Move from insight to action with curated recommendations tailored to your business goals.",
    icon: <Sparkles className="h-6 w-6 text-[#6F8A64]" />,
  },
  {
    title: "Easy reports",
    description: "Share polished summary cards and charts with investors, teams, and partners.",
    icon: <FileText className="h-6 w-6 text-[#6F8A64]" />,
  },
];

const HomepageSections = () => {
  return (
    <div className="space-y-16 px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-[#E5DDD3] bg-[#FFFDF9] p-8 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6F8A64]">Platform benefits</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2F3A32] sm:text-4xl">
              Why choose our AI-powered business growth platform?
            </h2>
          </div>
          <p className="max-w-xl text-[#2F3A32]/75">
            A premium system designed to provide clarity, confidence, and practical direction before you even upload your first dataset.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {whyCards.map((card) => (
            <div key={card.title} className="rounded-[1.5rem] border border-[#E5DDD3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F3EE]">{card.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-[#2F3A32]">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#2F3A32]/75">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-[#E5DDD3] bg-[#FFFDF9] p-8 shadow-sm">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6F8A64]">How it works</p>
          <h2 className="text-3xl font-semibold text-[#2F3A32] sm:text-4xl">A simple workflow to deliver fast business clarity.</h2>
          <p className="max-w-2xl text-[#2F3A32]/75">
            Follow a guided process from upload to insight, with every step optimized to make your data meaningful and actionable.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="group rounded-[1.5rem] border border-[#E5DDD3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F3EE]">{step.icon}</div>
              <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#6F8A64]">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E5DDD3] text-sm text-[#2F3A32]">{index + 1}</span>
                {step.title}
              </div>
              <p className="mt-3 text-sm leading-6 text-[#2F3A32]/75">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-[#E5DDD3] bg-[#FFFDF9] p-8 shadow-sm">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6F8A64]">Core Capabilities</p>
          <h2 className="text-3xl font-semibold text-[#2F3A32] sm:text-4xl">Built for every stage of business growth.</h2>
          <p className="max-w-2xl text-[#2F3A32]/75">
            Designed to give leaders useful capabilities for forecasting, health monitoring, risk mitigation, and practical next-step recommendations.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {capabilityCards.map((capability) => (
            <div key={capability.title} className="rounded-[1.5rem] border border-[#E5DDD3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F3EE]">{capability.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-[#2F3A32]">{capability.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#2F3A32]/75">{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-[#E5DDD3] bg-[#FFFDF9] p-8 shadow-sm">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6F8A64]">Use Cases</p>
          <h2 className="text-3xl font-semibold text-[#2F3A32] sm:text-4xl">Built for retail, e-commerce, and small businesses.</h2>
          <p className="max-w-2xl text-[#2F3A32]/75">
            See how the platform adapts to different business needs, delivering growth, efficiency, and higher confidence across categories.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="rounded-[1.5rem] border border-[#E5DDD3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F3EE]">{useCase.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-[#2F3A32]">{useCase.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#2F3A32]/75">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-[#E5DDD3] bg-[#FFFDF9] p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6F8A64]">Sample insights preview</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#2F3A32] sm:text-4xl">See how growth trends and recommendations look in the platform.</h2>
            <p className="mt-4 max-w-xl text-[#2F3A32]/75">
              The preview demonstrates how rich analytics, trend context, and next-step insights appear in a professional, client-grade interface.
            </p>

            <div className="mt-8 space-y-4 rounded-[1.5rem] border border-[#E5DDD3] bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#6F8A64]">Insight snapshot</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#2F3A32]">Revenue trend and recommendation</h3>
                </div>
                <span className="inline-flex rounded-full bg-[#F7F3EE] px-4 py-2 text-sm font-semibold text-[#2F3A32]">
                  Confidence: High
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-[#F7F3EE] p-4 text-sm text-[#2F3A32]">
                  <p className="font-semibold text-[#2F3A32]">+12.8%</p>
                  <p className="mt-1 text-[#2F3A32]/75">Forecasted quarterly growth</p>
                </div>
                <div className="rounded-3xl bg-[#F7F3EE] p-4 text-sm text-[#2F3A32]">
                  <p className="font-semibold text-[#2F3A32]">4 priority actions</p>
                  <p className="mt-1 text-[#2F3A32]/75">Recommended steps to improve margin.</p>
                </div>
                <div className="rounded-3xl bg-[#F7F3EE] p-4 text-sm text-[#2F3A32]">
                  <p className="font-semibold text-[#2F3A32]">Risk status</p>
                  <p className="mt-1 text-[#2F3A32]/75">Low risk for the next 30 days.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[#E5DDD3] bg-[#F7F3EE] p-6 shadow-sm">
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-[#FFFDF9] border border-[#E5DDD3] p-4">
                <p className="text-sm font-semibold text-[#6F8A64]">Latest insight</p>
                <p className="mt-2 text-sm text-[#2F3A32]/75">Projected demand is strongest in week 4, with a recommended inventory adjustment ahead of the next promotion.</p>
              </div>
              <div className="rounded-3xl bg-[#FFFDF9] border border-[#E5DDD3] p-4">
                <p className="text-sm font-semibold text-[#6F8A64]">Action highlight</p>
                <p className="mt-2 text-sm text-[#2F3A32]/75">Add staff support for key selling days and prioritize high-margin products for the next planning cycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-[#E5DDD3] bg-[#FFFDF9] p-8 shadow-sm">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6F8A64]">Trusted by business leaders</p>
          <h2 className="text-3xl font-semibold text-[#2F3A32] sm:text-4xl">Why clients trust this platform.</h2>
          <p className="max-w-2xl text-[#2F3A32]/75">
            Our clients rely on clear forecasts, practical recommendations, and reports that are simple to share and act on.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {trustCards.map((card) => (
            <div key={card.title} className="rounded-[1.5rem] border border-[#E5DDD3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F3EE]">{card.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-[#2F3A32]">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#2F3A32]/75">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-[#E5DDD3] bg-[#FFFDF9] p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6F8A64]">Ready to make smarter business decisions?</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#2F3A32] sm:text-5xl">
              Start your premium growth journey today.
            </h2>
            <p className="mt-4 max-w-2xl text-[#2F3A32]/75">
              Whether you are preparing for your next board review or optimizing your next quarter, our platform gives you polished insight and fast business clarity.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-[#6F8A64] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#5f7c56]"
              >
                Get Started
              </a>
              <a
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full border border-[#E5DDD3] bg-[#FFFDF9] px-6 py-3 text-sm font-semibold text-[#2F3A32] transition hover:bg-[#F7F3EE]"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#F7F3EE] p-8 shadow-sm">
            <div className="rounded-[1.75rem] border border-[#E5DDD3] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6F8A64]">Demo snapshot</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#2F3A32]">Fast, polished insight for every decision.</h3>
              <p className="mt-4 text-sm leading-6 text-[#2F3A32]/75">
                A professional homepage-ready summary that invites visitors to explore the product and understand value quickly.
              </p>
              <div className="mt-6 rounded-[1.5rem] bg-[#F7F3EE] p-5">
                <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 shadow-sm">
                  <span className="text-sm font-semibold text-[#2F3A32]">Forecast confidence</span>
                  <span className="rounded-full bg-[#CBBBA0] px-3 py-1 text-xs font-semibold text-[#2F3A32]">96%</span>
                </div>
                <div className="mt-4 rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-[#2F3A32]">Recommended priority</p>
                  <p className="mt-2 text-sm text-[#2F3A32]/75">Focus on revenue-driving products and keep inventory aligned with forecasted demand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageSections;
