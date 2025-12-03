import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import dedicationImage from "../../assets/Fundrasing/dedication.png";
import { fundraisingSection1Styles as styles } from "./FundraisingSec1-Styles";

export default function FundraisingSection1() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={styles.container} data-aos="fade-up">
      <h2 className={styles.heading} data-aos="fade-down">
        Your dedication and drive. <br /> Our rope candy.
      </h2>

      <p className={styles.subheading} data-aos="fade-up">
        Raise funds with our Virtual Store Technology—the easiest way to fundraise 
        for teams, school groups and other causes that benefit America's youth.  
        Sell small batch, premium candy and keep 50% of every dollar you sell, 
        with no minimums or fees.
      </p>

      <button className={styles.button} data-aos="zoom-in">
        Get Started Now
      </button>

      <img
        src={dedicationImage}
        alt="Dedication"
        className={styles.image}
        data-aos="fade-up"
      />
    </div>
  );
}
