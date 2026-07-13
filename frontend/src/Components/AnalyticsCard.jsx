import { ShieldCheck, Sparkles, TrendingUp, TriangleAlert } from "lucide-react";
import GrowthChart from "./GrowthChart";
import styles from "./AnalyticsCard.module.css";

const metrics = [
  { label: "Forecast accuracy", value: "94%", icon: <TrendingUp /> },
  { label: "Health score", value: "86/100", icon: <ShieldCheck /> },
  { label: "Risk signals", value: "2 active", icon: <TriangleAlert /> },
  { label: "Action items", value: "5 alerts", icon: <Sparkles /> },
];

const AnalyticsCard = () => {
  return (
    <aside className={styles.card}>
      <span className={styles.badge}>AI Powered Insight</span>
      <h2 className={styles.title}>Turn business data into clear growth decisions</h2>
      <p className={styles.description}>
        A premium analytics panel built to highlight trend clarity, model confidence, and strategic outcome guidance for business leaders.
      </p>

      <GrowthChart />

      <div className={styles.metricGrid}>
        {metrics.map((metric) => (
          <div key={metric.label} className={styles.metricItem}>
            <div className={styles.metricIcon}>{metric.icon}</div>
            <div>
              <p className={styles.metricValue}>{metric.value}</p>
              <p className={styles.metricLabel}>{metric.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}> 
        <span className={styles.footerIcon}>
          <ShieldCheck />
        </span>
        <p className={styles.footerText}>Connect your dataset to unlock smarter planning with polished AI insight.</p>
      </div>
    </aside>
  );
};

export default AnalyticsCard;
