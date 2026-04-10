import type { NextPage } from "next";
import HomeIndicato from "./home-indicato";
import styles from "./desktop1.module.css";

export type Desktop1Type = {
  className?: string;
};

const Desktop1: NextPage<Desktop1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.desktop2, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.meetTheTeamParent}>
          <h1 className={styles.meetTheTeam}>Meet the Team</h1>
          <h1 className={styles.theCreatorsWho}>
            The Creators Who Are Pushing the Boundaries of Art and Technology
          </h1>
        </div>
        <div className={styles.homeIndicatoParent}>
          <HomeIndicato
            image10="/image-10@2x.png"
            group1="/Group-1.svg"
            group2="/Group-2.svg"
            group3="/Group-3.svg"
            alexanderYuu="Alexander yuu"
            cEOFounder={`CEO & Founder`}
            image11="/image-11@2x.png"
            group11="/Group-1.svg"
            group21="/Group-2.svg"
            group31="/Group-3.svg"
            muyiwaDagrin="Muyiwa Dagrin"
            cTO="CTO"
          />
          <HomeIndicato
            image10="/image-12@2x.png"
            group1="/Group-1.svg"
            group2="/Group-2.svg"
            group3="/Group-3.svg"
            alexanderYuu="Victory Kim"
            cEOFounder="Head of Art"
            image11="/image-13@2x.png"
            group11="/Group-1.svg"
            group21="/Group-2.svg"
            group31="/Group-3.svg"
            muyiwaDagrin="Bilikisu wonder"
            cTO="Chief Marketing oficer"
          />
        </div>
      </div>
    </section>
  );
};

export default Desktop1;
