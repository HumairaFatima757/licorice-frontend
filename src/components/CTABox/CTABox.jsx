
import { ctaBoxStyles as styles } from "./CTABox-Styles";

export default function CTABox() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Ready to Start Your Fundraising Journey?
      </h2>
      <p className={styles.paragraph}>
        Join thousands of organizations who have successfully raised funds with our candy fundraising solutions.
      </p>
      <button className={styles.button}>
        Start Fundraising <span className={styles.buttonIcon}>→</span>
      </button>
    </div>
  );
}
