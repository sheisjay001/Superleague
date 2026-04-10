"use client";
import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties } from "react";
import Image from "next/image";
import FrameComponent from "./frame-component";
import styles from "./desktop2.module.css";

export type Desktop2Type = {
  className?: string;
};

const Desktop2: NextPage<Desktop2Type> = ({ className = "" }) => {
  const [frameComponentItems] = useState([
    {
      image8: "/image-8@2x.png",
      frameDivBackgroundImage: "url('/Frame-1@3x.png')",
      name: "Swagoon #1761",
      price: 30.24,
      likes: 100,
      btnAlignItems: "center",
      frameDivPadding: "16px",
      frameDivMarginTop: "16px",
      frameDivMarginBottom: "16px",
    },
    {
      image8: "/image-9@2x.png",
      frameDivBackgroundImage: "url('/Frame-2@3x.png')",
      name: "Swagoon #1762",
      price: 25.5,
      likes: 85,
      btnAlignItems: "center",
      frameDivPadding: "16px",
      frameDivMarginTop: "16px",
      frameDivMarginBottom: "16px",
    },
    {
      image8: "/image-82@2x.png",
      frameDivBackgroundImage: "url('/Frame-3@3x.png')",
      name: "Swagoon #1763",
      price: 42,
      likes: 150,
      btnAlignItems: "center",
      frameDivPadding: "16px",
      frameDivMarginTop: "16px",
      frameDivMarginBottom: "16px",
    },
    {
      image8: "/image-82@2x.png",
      frameDivBackgroundImage: "url('/Frame-4@3x.png')",
      name: "Swagoon #1764",
      price: 38.75,
      likes: 120,
      btnAlignItems: "center",
      frameDivPadding: "16px",
      frameDivMarginTop: "16px",
      frameDivMarginBottom: "16px",
    },
    {
      image8: "/image-84@2x.png",
      frameDivBackgroundImage: "url('/Frame-5@3x.png')",
      name: "Swagoon #1765",
      price: 55.2,
      likes: 200,
      btnAlignItems: "center",
      frameDivPadding: "16px",
      frameDivMarginTop: "16px",
      frameDivMarginBottom: "16px",
    },
    {
      image8: "/image-85@2x.png",
      frameDivBackgroundImage: "url('/Frame-6@3x.png')",
      name: "Swagoon #1766",
      price: 28.9,
      likes: 95,
      btnAlignItems: "center",
      frameDivPadding: "16px",
      frameDivMarginTop: "16px",
      frameDivMarginBottom: "16px",
    },
  ]);

  const handleSeeAll = () => {
    alert("Gallery page coming soon!");
  };

  return (
    <main className={[styles.desktop4, className].join(" ")}>
      <section className={styles.spacer}>
        <h1 className={styles.amazingAndUnique}>
          Amazing and Unique Arts for the week
        </h1>
        <button className={styles.chatWithRichman} onClick={handleSeeAll}>
          <div className={styles.seeAll}>See all</div>
          <Image
            className={styles.arrowrightIcon}
            width={16}
            height={16}
            sizes="100vw"
            alt=""
            src="/ArrowRight.svg"
          />
        </button>
      </section>
      <div className={styles.frameParent}>
        {frameComponentItems.map((item, index) => (
          <FrameComponent
            key={index}
            image8={item.image8}
            name={item.name}
            price={item.price}
            likes={item.likes}
            btnAlignItems={item.btnAlignItems}
            frameDivPadding={item.frameDivPadding}
            frameDivBackgroundImage={item.frameDivBackgroundImage}
            frameDivMarginTop={item.frameDivMarginTop}
            frameDivMarginBottom={item.frameDivMarginBottom}
          />
        ))}
      </div>
    </main>
  );
};

export default Desktop2;
