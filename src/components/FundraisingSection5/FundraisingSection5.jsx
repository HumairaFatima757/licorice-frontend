import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { flavorsSectionStyles as styles } from "./FundraisingSec5-Styles";

export default function FlavorsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={styles.container}>

      {/* Heading */}
      <h2 data-aos="fade-down" className={styles.heading}>
        Rope-candy flavors that make taste buds tango
      </h2>

      {/* Paragraph */}
      <p data-aos="fade-up" data-aos-delay="200" className={styles.paragraph}>
        Our Traditional, sweet, and sour flavors bring joy to all who try them. Orders are packaged fresh and shipped directly from the South anywhere in the U.S.
      </p>

      {/* Button */}
      <button data-aos="zoom-in" data-aos-delay="400" className={styles.button}>
        Explore Flavors
      </button>

    </div>
  );
}
