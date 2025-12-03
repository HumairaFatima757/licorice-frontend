import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Logo from "../../assets/logo.svg"; 
import CenterImage from "../../assets/WhoWeAre/image_girl.png";
import { whoWeAreStyles as styles } from "./WhoWeAre-Style";

// Reusable Box component
const Box = ({ title, desc, logo, bg, shadow, animation, delay }) => (
  <div className="relative w-full flex justify-center">
    <div className={styles.boxShadow(shadow)}></div>
    <div className={styles.boxContainer(bg)} data-aos={animation} data-aos-delay={delay || "0"}>
      <img src={logo} alt="Logo" className={styles.boxLogo} />
      <h3 className={styles.boxTitle}>{title}</h3>
      <p className={styles.boxDesc}>{desc}</p>
    </div>
  </div>
);

export default function WhoWeAre() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading} data-aos="fade-up">Who We Are</h2>

      <div className={styles.gridWrapper}>
        {/* Left Boxes */}
        <div className={styles.boxWrapper}>
          <Box
            title="Fundraising Made Easy"
            desc="We’ve simplified the fundraising process so anyone can succeed. With no fees, no minimum orders, and 50% of every sale going to your cause."
            logo={Logo}
            bg="bg-orange-500"
            shadow="bg-orange-300"
            animation="fade-right"
          />
          <Box
            title="Deliciously Unique Product"
            desc="Our Southern Sweet & Sour Licorice Ropes are loved by kids and adults. Easy to sell, everyone enjoys them."
            logo={Logo}
            bg="bg-orange-300"
            shadow="bg-orange-200"
            animation="fade-right"
            delay="200"
          />
        </div>

        {/* Center Image */}
        <div className={styles.centerWrapper} data-aos="zoom-in">
          <div className={styles.centerBgBox}></div>
          <img src={CenterImage} alt="Center Illustration" className={styles.centerImage} />
        </div>

        {/* Right Boxes */}
        <div className={styles.boxWrapper}>
          <Box
            title="Rooted in Real Experience"
            desc="Our founders grew up doing traditional fundraisers. They created Licorice 4 Good to offer smarter, tastier fundraising."
            logo={Logo}
            bg="bg-orange-300"
            shadow="bg-orange-200"
            animation="fade-left"
          />
          <Box
            title="Focused on Your Success"
            desc="We provide free sample boxes, full support, and everything you need to run a successful fundraiser."
            logo={Logo}
            bg="bg-orange-500"
            shadow="bg-orange-300"
            animation="fade-left"
            delay="200"
          />
        </div>
      </div>

      <div data-aos="fade-up">
        <button className={styles.startButton}>Start Fundraiser</button>
      </div>
    </section>
  );
}
