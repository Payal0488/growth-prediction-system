import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../Components/HeroSection";
import AnalyticsCard from "../Components/AnalyticsCard";
import FeatureCards from "../Components/FeatureCards";
import HomepageSections from "../Components/HomepageSections";
import styles from "./Home.module.css";


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#features") {
      const section = document.getElementById("features");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <div className={styles.page}>
      <div className={styles.heroContainer}>
        <HeroSection />
        <AnalyticsCard />
      </div>

      <HomepageSections />

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

