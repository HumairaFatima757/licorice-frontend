import React from "react";
import Logo from "../../assets/logo.svg";
import CenterImage from "../../assets/WhoWeAre/image_girl.png";
import { whoWeAreStyles as styles } from "./WhoWeAre-Styles";

const Box = ({ title, desc, logo, bg, shadow, animation, delay }) => (
  <div className="relative">
    <div className={styles.boxShadow(shadow)}></div>

    <div
      className={styles.boxContainer(bg)}
      data-aos={animation}
      data-aos-delay={delay || "0"}
    >
      <img src={logo} alt="Logo" className={styles.boxLogo} />
      <h3 className={styles.boxTitle}>{title}</h3>
      <p className={styles.boxDesc}>{desc}</p>
    </div>
  </div>
);

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading} data-aos="fade-up">
        Who We Are
      </h2>

      <div className={styles.gridWrapper}>
        {/* Left Column */}
        <div className={styles.boxWrapper}>
          <Box
            title="Fundraising Made Easy"
            desc="We’ve simplified the fundraising process so anyone can succeed. With no fees, no minimum orders, and 50% of every sale going to your cause, our program removes stress and maximizes results."
            logo={Logo}
            bg="bg-orange-500"
            shadow="bg-orange-300"
            animation="fade-right"
          />

          <Box
            title="Deliciously Unique Product"
            desc="Our Southern Sweet & Sour Licorice Ropes are a hit with both kids and adults. Top flavors packaged for easy selling — supporters love them, and participants feel confident sharing something they enjoy."
            logo={Logo}
            bg="bg-orange-300"
            shadow="bg-orange-200"
            animation="fade-right"
            delay="200"
          />
        </div>

        {/* CENTER IMAGE FIXED */}
        <div className={styles.centerWrapper}>
          <div className={styles.centerBgBox}></div>
          <img
            src={CenterImage}
            alt="Center Illustration"
            className={styles.centerImage}
          />
        </div>

        {/* Right Column */}
        <div className={styles.boxWrapper}>
          <Box
            title="Rooted in Real Experience"
            desc="Our founders grew up doing traditional fundraisers. After years of experience and raising 6 kids, they created Licorice 4 Good — a smarter, tastier way to raise funds."
            logo={Logo}
            bg="bg-orange-300"
            shadow="bg-orange-200"
            animation="fade-left"
          />

          <Box
            title="Focused on Your Success"
            desc="We're about community. We provide free sample boxes, full support, and everything you need to run a successful fundraiser from start to finish."
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
