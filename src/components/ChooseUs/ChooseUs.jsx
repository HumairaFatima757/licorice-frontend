import React, { useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

import VideoFrame from "../../assets/ChooseUs/mobileframe.png";
import VideoSrc from "../../assets/ChooseUs/Video.mp4";
import BgImage from "../../assets/ChooseUs/bgImage.png";

import { chooseUsStyles as styles } from "./ChooseUs-Styles";

export default function ChooseUs() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleSpeaker = () => {
    const video = document.querySelector("#fundraiser-video");
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const stats = [
    { number: "120K", label: "Organizations" },
    { number: "8.990", label: "Projects Done" },
  ];

  const points = [
    "50% of Every Sale Goes to You.",
    "No Upfront Costs or Minimum Orders.",
    "Sample Box Provided for Free.",
    "Premium Sweets in popular flavor.",
  ];

  return (
    <section className={styles.section}>
      <img src={BgImage} alt="Background" className={styles.bgImage} />

      {/* Left: Frame + Video */}
      <div className={styles.leftContainer}>
        <div className={styles.videoWrapper}>
          <video
            id="fundraiser-video"
            src={VideoSrc}
            autoPlay
            loop
            muted
            className={styles.video}
          />

          <button className={styles.speakerBtn} onClick={toggleSpeaker}>
            {isMuted ? (
              <SpeakerXMarkIcon className={styles.speakerIcon} />
            ) : (
              <SpeakerWaveIcon className={styles.speakerIcon} />
            )}
          </button>

          <img src={VideoFrame} alt="Mobile Frame" className={styles.frameImage} />
        </div>
      </div>

      {/* Right: Text + Stats */}
      <div className={styles.rightContainer}>
        <h1 className={styles.heading} data-aos="fade-up" data-aos-duration="800">
          {`Why Choose Us for Your Next Fundraiser?`
            .split(" ")
            .map((word, i) => (
              <span
                key={i}
                className="inline-block mr-1"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={i * 50}
              >
                {word}
              </span>
            ))}
        </h1>

        <ul className={styles.list}>
          {points.map((point, i) => (
            <li
              key={i}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={i * 150}
            >
              {point}
            </li>
          ))}
        </ul>

        <div className={styles.statsWrapper}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className={styles.statItem}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={500 + i * 100}
            >
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
