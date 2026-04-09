import type { NextPage } from "next";
import styles from "./layout.module.css";

export type LayoutType = {
  className?: string;
};

const Layout: NextPage<LayoutType> = ({ className = "" }) => {
  return (
    <section className={[styles.layout83, className].join(" ")}>
      <div className={styles.myOrders}>
        <div className={styles.trackRecordParent}>
          <div className={styles.trackRecord}>Track record</div>
          <h1 className={styles.positiveTrackRecords}>
            Positive track records and milestones Achieved
          </h1>
        </div>
        <section className={styles.waiting}>
          <div className={styles.trackRecord}>
            Not only do our exclusive NFTs offer a unique opportunity for
            digital ownership, they also provide a platform for artists to
            showcase their creativity and connect with a community of
            like-minded collectors and enthusiasts.
          </div>
          <div className={styles.finished}>
            <div className={styles.closed}>
              <div className={styles.myServices}>
                <h2 className={styles.k}>24k+</h2>
                <h3 className={styles.collections}>Collections</h3>
              </div>
              <div className={styles.myServices}>
                <h2 className={styles.k}>18k+</h2>
                <h3 className={styles.collections}>Auctions</h3>
              </div>
              <div className={styles.myServices}>
                <h2 className={styles.k}>10k+</h2>
                <h3 className={styles.collections}>Artists</h3>
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.seeTrackRecords}>See Track records</div>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Layout;
