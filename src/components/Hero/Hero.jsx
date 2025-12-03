import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroImage from "../../assets/hero.png";
import Arrow from "../../assets/Arrow.png";

import { heroStyles as styles } from "./Hero-Styles";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.section}>

      {/* Left Text */}
      <div className={styles.leftWrapper} data-aos="fade-right">
        <h1 className={styles.heading}>
          Fundraising just got sweeter
        </h1>

        <p className={styles.paragraph}>
          Sell Southern Sweet & Sour Licorice Ropes and keep 50% of every sale.
          No fees, no minimums, just success.
        </p>

        <div className={styles.buttonWrapper}>
          <button className={styles.button} data-aos="zoom-in" data-aos-delay="200">
            Get Started Now
          </button>

          {/* Decorative Arrow */}
          <img
            src={Arrow}
            alt="Arrow pointing to button"
            className={styles.arrow}
            data-aos="fade-left"
            data-aos-delay="300"
          />
        </div>
      </div>

      {/* Right Image */}
      <div className={styles.rightWrapper} data-aos="fade-left">
        <img
          src={HeroImage}
          alt="Hero Illustration"
          className={styles.heroImage}
        />
      </div>

    </section>
  );
}
