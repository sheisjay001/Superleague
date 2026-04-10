"use client";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  const handleLinkClick = (label: string) => {
    alert(`${label} page coming soon!`);
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className={[styles.footer, className].join(" ")}>
      <section className={styles.footerContent}>
        <div className={styles.title}>
          <div className={styles.extricatorParent}>
            <h2 className={styles.extricator}>Extricator.</h2>
            <div className={styles.joinTheRanks}>
              Join the Ranks of Visionary Collectors and Own a Piece of History
            </div>
          </div>
          <div className={styles.socialLinks}>
            <Image
              className={styles.socialLinksChild}
              width={32}
              height={32}
              sizes="100vw"
              alt=""
              src="/Group-1.svg"
              onClick={() => handleSocialClick("https://x.com")}
              style={{ cursor: "pointer" }}
            />
            <Image
              className={styles.socialLinksChild}
              width={32}
              height={32}
              sizes="100vw"
              alt=""
              src="/Group-2.svg"
              onClick={() => handleSocialClick("https://discord.com")}
              style={{ cursor: "pointer" }}
            />
            <Image
              className={styles.socialLinksChild}
              width={32}
              height={32}
              sizes="100vw"
              alt=""
              src="/Group-3.svg"
              onClick={() => handleSocialClick("https://instagram.com")}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className={styles.textLinkList}>
          <div className={styles.title2}>
            <div className={styles.textStrong}>
              <div className={styles.company}>Company</div>
            </div>
          </div>
          <div className={styles.textLinkListItem} onClick={() => handleLinkClick("Services")} style={{ cursor: "pointer" }}>
            <div className={styles.services}>Services</div>
          </div>
          <div className={styles.textLinkListItem} onClick={() => handleLinkClick("About Us")} style={{ cursor: "pointer" }}>
            <div className={styles.aboutUs}>About us</div>
          </div>
          <div className={styles.textLinkListItem} onClick={() => handleLinkClick("Support")} style={{ cursor: "pointer" }}>
            <div className={styles.support}>Support</div>
          </div>
          <div className={styles.textLinkListItem} onClick={() => handleLinkClick("Contact")} style={{ cursor: "pointer" }}>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
        </div>
        <div className={styles.textLinkList}>
          <div className={styles.title2}>
            <div className={styles.textStrong}>
              <div className={styles.company}>Legal</div>
            </div>
          </div>
          <div className={styles.textLinkListItem5} onClick={() => handleLinkClick("Privacy Policy")} style={{ cursor: "pointer" }}>
            <div className={styles.privacyPolicy}>Privacy policy</div>
          </div>
          <div className={styles.textLinkListItem5} onClick={() => handleLinkClick("Terms & Conditions")} style={{ cursor: "pointer" }}>
            <div className={styles.termsCondition}>{`Terms & Condition`}</div>
          </div>
          <div className={styles.textLinkListItem7} />
        </div>
        <div className={styles.textLinkList3}>
          <div className={styles.title4}>
            <div className={styles.textStrong}>
              <div className={styles.company}>Location</div>
            </div>
          </div>
          <div className={styles.textLinkListItem8}>
            <div className={styles.nigeria}>Nigeria</div>
          </div>
          <div className={styles.textLinkListItem9}>
            <div className={styles.unitedStateParent}>
              <div className={styles.unitedState}>United State</div>
              <div className={styles.unitedState2}>United State</div>
            </div>
          </div>
          <div className={styles.textLinkListItem10} />
        </div>
      </section>
      <div className={styles.copyright2025ExtricatorWrapper}>
        <div className={styles.copyright2025Extricator}>
          Copyright © 2025 Extricator
        </div>
      </div>
    </section>
  );
};

export default Footer;
