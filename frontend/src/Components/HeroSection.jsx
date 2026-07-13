import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FeaturePills from "./FeaturePills";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCopy}>
        <h1 className={styles.heroTitle}>
          <span className={`${styles.titleLine} ${styles.dark}`}>Predict.</span>
          <span className={`${styles.titleLine} ${styles.gold}`}>Plan.</span>
          <span className={`${styles.titleLine} ${styles.olive}`}>Prosper.</span>
        </h1>

        <p className={styles.heroDescription}>
          A premium AI business prediction platform that transforms historical performance into confident forecasts, healthier operations, and strategic next steps.
        </p>
      </div>

      <FeaturePills />

      <div className={styles.heroActions}>
        <Link to="/register" className={`${styles.button} ${styles.primaryButton}`}>
          Get Started
          <ArrowRight className={styles.buttonIcon} />
        </Link>
        <Link to="/dashboard" className={`${styles.button} ${styles.secondaryButton}`}>
          Explore Dashboard
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
