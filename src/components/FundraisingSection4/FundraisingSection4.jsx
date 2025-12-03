import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gratefulImage from "../../assets/Fundrasing/Clap-icon.png";
import { fundraisingSection4Styles as styles } from "./FundraisingSec4-Styles";

export default function FundraisingSection4() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        
        {/* LEFT TEXT */}
        <div data-aos="fade-right" className={styles.leftText}>
          <h2 className={styles.heading}>
            We're so grateful to the Southern sweet & sour community for making 2025 such a magical journey.
          </h2>
          <p className={styles.paragraph}>
            Every dollar you sell supports your cause. You keep half of what you sell through our website Licorice4good.com, so you reach your goal faster. And there are no set-up fees or handling fees.
          </p>
          <button className={styles.button}>Get Started Now</button>
        </div>

        {/* RIGHT IMAGE */}
        <div data-aos="fade-left" className={styles.rightImageWrapper}>
          <img src={gratefulImage} alt="Grateful Community" className={styles.image} />
        </div>

      </div>
    </div>
  );
}
