import HeroSection from "../Components/HeroSection";
import AnalyticsCard from "../Components/AnalyticsCard";
import FeatureCards from "../Components/FeatureCards";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.heroContainer}>
        <HeroSection />
        <AnalyticsCard />
      </div>

      <section className={styles.featureSection} id="features">
        <div className={styles.featureHeader}>
          <span className={styles.sectionTag}>Core features</span>
          <h2 className={styles.sectionTitle}>Everything you need to understand and grow your business</h2>
        </div>
        <FeatureCards />
      </section>
    </div>
  );
};

export default Home;

