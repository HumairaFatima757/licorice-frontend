import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { contactAndFAQStyles as styles } from "./Footer-Styles";

export default function ContactAndFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What Is Fundraising?",
      answer: "Fundraising is the process of seeking and gathering voluntary financial contributions.",
    },
    {
      question: "How can I get service?",
      answer: "You can access our services by joining our platform and contacting our support team.",
    },
    {
      question: "What kind of service will I get?",
      answer: "You will get personalized fundraising solutions with step-by-step guidance.",
    },
  ];

  const toggleFaq = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Side */}
        <div className={styles.leftSide}>
          <h2 className={styles.heading}>
            If there are questions you want to ask, we will answer all your question
          </h2>
          <div className={styles.inputWrapper}>
            <input type="email" placeholder="Enter your email" className={styles.input} />
            <button className={styles.button}>Join Now</button>
          </div>
        </div>

        {/* Right Side - FAQ */}
        <div className={styles.rightSide}>
          <h2 className={styles.heading}>
            If there are questions you want to ask, we will answer all your questions
          </h2>

          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                onClick={() => toggleFaq(index)}
                className={styles.faqButton}
              >
                <span>{faq.question}</span>
                <span className={`${styles.faqArrow} ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                  &#9660;
                </span>
              </button>
              {openIndex === index && <p className={styles.faqAnswer}>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.socialPolicyWrapper}>
            <div className={styles.socialIcons}>
              <FaFacebookF className={styles.socialIconHover} />
              <FaInstagram className={styles.socialIconHover} />
              <FaTwitter className={styles.socialIconHover} />
              <FaLinkedin className={styles.socialIconHover} />
            </div>
            <div className={styles.policyLinks}>
              <a href="#" className={styles.policyLink}>Privacy Policy</a>
              <a href="#" className={styles.policyLink}>Terms & Conditions</a>
            </div>
          </div>
          <div className={styles.copyright}>© Metaxoft All Rights Reserved</div>
        </div>
      </footer>
    </section>
  );
}
