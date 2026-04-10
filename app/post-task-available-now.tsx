import type { NextPage } from "next";
import Desktop from "../components/desktop";
import Layout from "../components/layout";
import Desktop2 from "../components/desktop2";
import Desktop1 from "../components/desktop1";
import CTA from "../components/c-t-a";
import Footer from "../components/footer";
import styles from "./post-task-available-now.module.css";

const PostTaskAvailableNow: NextPage = () => {
  return (
    <div className={styles.postTaskavailableNow}>
      <section id="home">
        <Desktop />
      </section>
      <section id="roadmap">
        <Layout />
      </section>
      <section id="gallery">
        <Desktop2 />
      </section>
      <Desktop1 />
      <CTA />
      <Footer />
    </div>
  );
};

export default PostTaskAvailableNow;
