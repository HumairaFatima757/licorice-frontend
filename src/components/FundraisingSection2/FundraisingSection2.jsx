import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Image1 from "../../assets/Fundrasing/off1.png"; 
import Image2 from "../../assets/Fundrasing/imgi_9_slider.png"; 

import { fundraisingSection2Styles as styles } from "./FundraisingSec2-Styles";

export default function FundraisingSection2() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Image1, Image2];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePrev = () => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>

        {/* LEFT TEXT */}
        <div data-aos="fade-right" className={styles.leftText}>
          <h2 className={styles.heading}>
            50% of every dollar you sell <br /> supports your cause
          </h2>
          <p className={styles.paragraph}>
            You keep half of what you sell through our website Licorice4good.com, 
            so you reach your goal faster. And there are no set-up fees or handling fees.
          </p>
          <button className={styles.button}>Get Started Now</button>
        </div>

        {/* RIGHT IMAGE + BUTTONS */}
        <div data-aos="fade-left" className={styles.rightWrapper}>
          <div className={styles.imageWrapper}>
            <img src={images[currentImage]} alt="Fundraising" className={styles.image} />
          </div>

          <div className={styles.navWrapper}>
            <button onClick={handlePrev} className={styles.navButton}>
              <FaArrowLeft />
            </button>
            <button onClick={handleNext} className={styles.navButton}>
              <FaArrowRight />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
