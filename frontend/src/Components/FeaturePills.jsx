import { HeartPulse, Sparkles, TriangleAlert, TrendingUp } from "lucide-react";
import styles from "./FeaturePills.module.css";

const pills = [
  { title: "AI Forecasting", icon: <TrendingUp /> },
  { title: "Business Health", icon: <HeartPulse /> },
  { title: "Risk Analysis", icon: <TriangleAlert /> },
  { title: "Smart Recommendations", icon: <Sparkles /> },
];

const FeaturePills = () => {
  return (
    <div className={styles.pillGrid}>
      {pills.map((pill) => (
        <div key={pill.title} className={styles.pillItem}>
          <div className={styles.pillIcon}>{pill.icon}</div>
          <span className={styles.pillText}>{pill.title}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturePills;
