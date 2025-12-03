import bgImage from "../../assets/Fundrasing/fundbg.png";
import { fundraisingTopStyles as styles } from "./FundraisingTop-Styles";

export default function FundraisingTop() {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Heading */}
      <h1 className={styles.heading}>Imagine what you could raise</h1>

      {/* Subheading */}
      <p className={styles.subheading}>How many sellers do you expect to participate?</p>

      {/* Seller Selection Bar */}
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderBar}>
          <div className={styles.sliderCircleOuter}>
            <div className={styles.sliderCircleInner}></div>
          </div>
        </div>
        <div className={styles.sliderNumbers}>
          <span>1</span>
          <span className={styles.sliderNumberHighlight}>10</span>
          <span>100</span>
        </div>
      </div>

      {/* Raised Amount */}
      <div className={styles.raisedWrapper}>
        <p className={styles.raisedLabel}>You could raise about</p>
        <p className={styles.raisedAmount}>$ 1800</p>
        <p className={styles.raisedNote}>Sellers typically raise $100 over a four-day fundraiser</p>
      </div>

      {/* Button */}
      <button className={styles.button}>Get Started Now</button>
    </div>
  );
}
