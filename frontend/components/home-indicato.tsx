"use client";
import type { NextPage } from "next";
import { useMemo, useState, useEffect, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./home-indicato.module.css";

export type HomeIndicatoType = {
  className?: string;
  image10: string;
  group1: string;
  group2: string;
  group3: string;
  alexanderYuu?: string;
  cEOFounder?: string;
  image11: string;
  group11: string;
  group21: string;
  group31: string;
  muyiwaDagrin?: string;
  cTO?: string;

  /** Style props */
  image10IconWidth?: CSSProperties["width"];
  image10IconLeft?: CSSProperties["left"];
  frameDivMarginLeft?: CSSProperties["marginLeft"];
  frameDivMarginBottom?: CSSProperties["marginBottom"];
  frameDivWidth?: CSSProperties["width"];
  frameDivPadding?: CSSProperties["padding"];
};

const HomeIndicato: NextPage<HomeIndicatoType> = ({
  className = "",
  image10,
  group1,
  group2,
  group3,
  alexanderYuu,
  cEOFounder,
  image11,
  group11,
  group21,
  group31,
  muyiwaDagrin,
  cTO,
  image10IconWidth,
  image10IconLeft,
  frameDivMarginLeft,
  frameDivMarginBottom,
  frameDivWidth,
  frameDivPadding,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const image10IconStyle: CSSProperties = useMemo(() => {
    return {
      width: image10IconWidth,
      left: image10IconLeft,
    };
  }, [image10IconWidth, image10IconLeft]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: frameDivMarginLeft,
      marginBottom: frameDivMarginBottom,
      width: frameDivWidth,
      padding: frameDivPadding,
    };
  }, [
    frameDivMarginLeft,
    frameDivMarginBottom,
    frameDivWidth,
    frameDivPadding,
  ]);

  if (!mounted) {
    return <div style={{ display: 'none' }} />;
  }

  return (
    <section className={[styles.homeIndicato, className].join(" ")}>
      <div className={styles.image10Parent}>
        <Image
          className={styles.image10Icon}
          width={374}
          height={374}
          sizes="100vw"
          alt=""
          src={image10}
          style={image10IconStyle}
          suppressHydrationWarning
        />
        <div className={styles.imageParent}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <Image
                className={styles.frameChild}
                width={32}
                height={32}
                sizes="100vw"
                alt=""
                src={group1}
              />
              <Image
                className={styles.frameChild}
                width={32}
                height={32}
                sizes="100vw"
                alt=""
                src={group2}
              />
              <Image
                className={styles.frameChild}
                width={32}
                height={32}
                sizes="100vw"
                alt=""
                src={group3}
              />
            </div>
            <div className={styles.alexanderYuuParent}>
              <h3 className={styles.alexanderYuu}>{alexanderYuu}</h3>
              <div className={styles.ceoFounder}>{cEOFounder}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeIndicatoInner}>
        <div className={styles.image11Parent} style={frameDiv1Style}>
          <Image
            className={styles.image11Icon}
            width={342}
            height={455.2}
            sizes="100vw"
            alt=""
            src={image11}
          />
          <div className={styles.imageParent}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <Image
                  className={styles.frameChild}
                  width={32}
                  height={32}
                  sizes="100vw"
                  alt=""
                  src={group11}
                />
                <Image
                  className={styles.frameChild}
                  width={32}
                  height={32}
                  sizes="100vw"
                  alt=""
                  src={group21}
                />
                <Image
                  className={styles.frameChild}
                  width={32}
                  height={32}
                  sizes="100vw"
                  alt=""
                  src={group31}
                />
              </div>
              <div className={styles.alexanderYuuParent}>
                <h3 className={styles.alexanderYuu}>{muyiwaDagrin}</h3>
                <div className={styles.ceoFounder}>{cTO}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIndicato;
