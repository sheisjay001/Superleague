"use client";
import type { NextPage } from "next";
import { useState } from "react";
import styles from "./c-t-a.module.css";

export type CTAType = {
  className?: string;
};

const CTA: NextPage<CTAType> = ({ className = "" }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing! We'll send updates to ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <section className={[styles.cta2, className].join(" ")}>
      <div className={styles.cta2Inner}>
        <div className={styles.frameParent}>
          <div className={styles.signUpForEarlyAlphaParent}>
            <h2 className={styles.signUpFor}>Sign up for early Alpha</h2>
            <h1 className={styles.subscribeNowTo}>
              Subscribe now to get early alpha from our creators and 10X your
              portfolio
            </h1>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.textInput}>
              <input
                className={styles.signUpNow}
                placeholder="Sign up now"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className={styles.button} type="submit">
              <div className={styles.getEarlyAlpha}>Get early Alpha</div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
