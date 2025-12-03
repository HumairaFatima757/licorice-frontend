import ProcessImage from "../../assets/process/process.svg";
import { processStyles as styles } from "./Process-Styles";

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* IMAGE Animation */}
        <img
          src={ProcessImage}
          alt="Process Illustration"
          className={styles.image}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="2000"
        />

        {/* TEXT Animation */}
        <div className={styles.textWrapper} data-aos="fade-up">
          <h2 className={styles.subtitle}>OUR PROCESS</h2>
          <h3 className={styles.heading}>How It Works? Follow the steps to the profit</h3>
          <p className={styles.paragraph}>
            Looking to spice up snack time with something fun, flavorful, 
            and a little nostalgic? Meet Southern Sweet & Sour's signature 
            Licorice Ropes! Whether you're eating them solo or sharing 
            with friends, these chewy ropes are perfect for snacking and smilin'.
          </p>
        </div>

      </div>
    </section>
  );
}
