import React, { useState } from "react";
import LeftImage from "../../assets/slider.png";
import { shopRopesStyles as styles } from "./Shop-Styles";

export default function ShopOurLicoriceRopes() {
  const products = [
    "3 pack Traditional Bronze",
    "4 pack Traditional Silver",
    "4 Pack Sweet Silver",
    "3 Pack Sweet Bronze",
    "12 Pack Best Seller and Classic Platinum",
    "7 Pack Sweet and Sour collection Gold",
    "4 Pack Sour Silver",
    "3 Pack Sour Bronze",
    "Sweet – Watermelon, Berry Delight, Cherry",
    "Sweet – Fruit Rainbow, Cotton Candy, Strawberry – Banana",
  ];

  const [selected, setSelected] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleUp = () => setStartIndex(prev => Math.max(prev - 1, 0));
  const handleDown = () =>
    setStartIndex(prev => Math.min(prev + 1, products.length - visibleCount));

  return (
    <section className={styles.section}>
      
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <h1 className={styles.heading}>ShopOurLicorice <br />Ropes</h1>
        <img src={LeftImage} alt="Left Illustration" className={styles.leftImage} />
      </div>

      {/* Right Column */}
      <div className={styles.rightColumn}>
        <h2 className={styles.productHeading}>3 Pack $27</h2>
        <p className={styles.productSub}>Choose One of the following 3 packs:</p>

        <div className={styles.optionsContainer}>
          {/* Options Column */}
          <div className={styles.optionsColumn}>
            {products.slice(startIndex, startIndex + visibleCount).map((product, idx) => (
              <div
                key={idx}
                onClick={() => setSelected(prev => prev === product ? "" : product)}
                className={styles.optionItem(selected === product)}
              >
                <div className={styles.checkbox(selected === product)}>
                  {selected === product && <span className="text-white font-bold text-xs">&#10003;</span>}
                </div>
                <span className="text-sm">{product}</span>
              </div>
            ))}
          </div>

          {/* Up/Down Buttons */}
          <div className={styles.upDownButtons}>
            <button onClick={handleUp} disabled={startIndex === 0} className={styles.button} style={{ width: "40px", height: "40px" }}>
              &#9650;
            </button>
            <button onClick={handleDown} disabled={startIndex + visibleCount >= products.length} className={styles.button} style={{ width: "40px", height: "40px" }}>
              &#9660;
            </button>
          </div>
        </div>

        {/* Select Product Button */}
        <button disabled={!selected} className={styles.selectButton(selected)}>
          {selected ? `Buy ${selected}` : "Select a product to continue"}
        </button>
      </div>
    </section>
  );
}
