import { ShieldCheck, Sparkles, TriangleAlert, TrendingUp } from "lucide-react";
import styles from "./FeatureCards.module.css";

const features = [
  { title: "Growth Forecast", description: "Predict revenue and demand with clear confidence.", icon: <TrendingUp /> },
  { title: "Health Score", description: "Monitor business strength with an elegant health index.", icon: <ShieldCheck /> },
  { title: "Risk Analysis", description: "Spot hidden exposure before it impacts results.", icon: <TriangleAlert /> },
  { title: "AI Recommendations", description: "Actionable guidance for every next step.", icon: <Sparkles /> },
];

const FeatureCards = () => {
  return (
    <div className={styles.grid}>
      {features.map((feature) => (
        <article key={feature.title} className={styles.card}>
          <div className={styles.icon}>{feature.icon}</div>
          <h3 className={styles.title}>{feature.title}</h3>
          <p className={styles.description}>{feature.description}</p>
        </article>
      ))}
    </div>
  );
};

export default FeatureCards;
