import section3Image from "../../assets/Fundrasing/MaskGroup.png";
import { fundraisingSection3Styles as styles } from "./FundraisingSect3-Styles";

export default function FundraisingSection3() {
  const stats = [
    {
      number: "3x",
      title: "increase in sales",
      description:
        "Groups that switch from traditional brochure fundraising to virtual fundraising see sales go up threefold.",
    },
    {
      number: "$360",
      title: "average per seller",
      description:
        "An average seller should be able to make between 10-15 sales over a 5 day fundraiser.",
    },
    {
      number: "$3,500",
      title: "average per team",
      description:
        "Most teams of 20 sellers can expect to earn about $3,500.",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Full Width Image */}
      <div className={styles.imageWrapper}>
        <img src={section3Image} alt="Virtual Fundraising" className={styles.image} />
      </div>

      {/* Heading */}
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Virtual fundraising with real results</h2>

        {/* Stats Cards */}
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.cardNumber}>{stat.number}</p>
              <p className={styles.cardTitle}>{stat.title}</p>
              <p className={styles.cardDescription}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
