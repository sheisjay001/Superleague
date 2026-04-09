"use client";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./desktop.module.css";

export type DesktopType = {
  className?: string;
};

const Desktop: NextPage<DesktopType> = ({ className = "" }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={[styles.desktop1, className].join(" ")}>
      <Image
        className={styles.vectorIcon}
        width={1452.5}
        height={892.5}
        sizes="100vw"
        alt=""
        src="/Vector.svg"
      />
      <header className={styles.extricatorParent}>
        <h3 className={styles.extricator}>Extricator.</h3>
        <div className={styles.frameWrapper}>
          <nav className={styles.homeParent}>
            <div className={styles.home} onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
              Home
            </div>
            <div className={styles.home} onClick={() => scrollToSection("gallery")} style={{ cursor: "pointer" }}>
              Gallery
            </div>
            <div className={styles.home} onClick={() => scrollToSection("roadmap")} style={{ cursor: "pointer" }}>
              Roadmap
            </div>
          </nav>
        </div>
      </header>
      <div className={styles.desktop1Inner}>
        <div className={styles.frameParent}>
          <section className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.getReadyToOwnAPieceOfHiParent}>
                <h1 className={styles.getReadyTo}>
                  Get Ready to Own a Piece of History
                </h1>
                <h1 className={styles.joinTheRanks}>
                  Join the Ranks of Visionary Collectors and Own a Piece of
                  History
                </h1>
              </div>
              <div className={styles.imageParent}>
                <button className={styles.image} onClick={() => scrollToSection("gallery")}>
                  <div className={styles.explore}>Explore</div>
                </button>
                <div className={styles.earnWldWithYourTimeSkill} onClick={() => scrollToSection("market")} style={{ cursor: "pointer" }}>
                  <div className={styles.goToMarket}>Go to market</div>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.banner}>
            <div className={styles.btnParent}>
              <Image
                className={styles.btnIcon}
                width={410}
                height={345}
                sizes="100vw"
                alt=""
                src="/btn@2x.png"
              />
              <Image
                className={styles.takeABreak}
                width={463.2}
                height={395}
                sizes="100vw"
                alt=""
                src="/Take-a-break@2x.png"
              />
              <Image
                className={styles.supportSubtitleIcon}
                width={460.4}
                height={392.4}
                sizes="100vw"
                alt=""
                src="/Support-Subtitle@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desktop;
