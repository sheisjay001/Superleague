"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  image8: string;
  name?: string;
  price?: number;
  likes?: number;

  /** Style props */
  btnAlignItems?: CSSProperties["alignItems"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivBackgroundImage?: CSSProperties["backgroundImage"];
  frameDivMarginTop?: CSSProperties["marginTop"];
  frameDivMarginBottom?: CSSProperties["marginBottom"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  image8,
  name = "Swagoon #1761",
  price = 30.24,
  likes = 100,
  btnAlignItems,
  frameDivPadding,
  frameDivBackgroundImage,
  frameDivMarginTop,
  frameDivMarginBottom,
}) => {
  const btnStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: btnAlignItems,
    };
  }, [btnAlignItems]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
      backgroundImage: frameDivBackgroundImage,
      marginTop: frameDivMarginTop,
      marginBottom: frameDivMarginBottom,
    };
  }, [
    frameDivPadding,
    frameDivBackgroundImage,
    frameDivMarginTop,
    frameDivMarginBottom,
  ]);

  const handleBuyNow = () => {
    alert(`Purchasing ${name} for ${price} SOL!`);
  };

  return (
    <section className={[styles.btnParent, className].join(" ")}>
      <div className={styles.btn} style={btnStyle}>
        <div className={styles.image8Parent} style={frameDivStyle}>
          <Image
            className={styles.image8Icon}
            width={412}
            height={412}
            sizes="100vw"
            alt=""
            src={image8}
          />
          <div className={styles.contactDoer}>
            <Image
              className={styles.heartIcon}
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/Heart.svg"
            />
            <div className={styles.div}>{likes}</div>
          </div>
        </div>
      </div>
      <div className={styles.icoevaluation}>
        <div className={styles.swagoon1761}>{name}</div>
        <div className={styles.icoevaluation2}>
          <h3 className={styles.sol}>{price} SOL</h3>
          <button className={styles.icoevaluation3} onClick={handleBuyNow}>
            <div className={styles.buyNow}>Buy now</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
