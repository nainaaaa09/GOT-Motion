import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import jon from "./assets/got.png";
import fog from "./assets/bg.png";
import goth from "./assets/blackfog.png";

import gotTheme from "./assets/got-theme.mp3";

import "./App.css";

import Starks from "./components/Starks";
import Houses from "./components/Houses";
import Info from "./components/Info";

function App() {
  const containerRef = useRef(null);

  // AUDIO
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  // START AUDIO ON FIRST USER INTERACTION
  useEffect(() => {
    const startAudio = () => {
      if (!started && audioRef.current) {
        audioRef.current.volume = 0.3;

        audioRef.current
          .play()
          .then(() => {
            setStarted(true);
          })
          .catch((err) => {
            console.log("Autoplay blocked:", err);
          });
      }
    };

    window.addEventListener("click", startAudio);
    window.addEventListener("scroll", startAudio);

    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("scroll", startAudio);
    };
  }, [started]);

  // SCROLL ANIMATION
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // IMAGE SCALES
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  const rockScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.55],
    [1, 2, 3]
  );

  const fogScale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.55],
    [1, 1.5, 1.5]
  );

  // TITLE FADE
  const title1Opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 1],
    [1, 0, 0, 0]
  );

  const title2Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.65],
    [0, 1]
  );

  // BLACK OVERLAY
  const blackFade = useTransform(
    scrollYProgress,
    [0.65, 0.85, 1],
    [0, 1, 1]
  );

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} src={gotTheme} loop />

      <div
        ref={containerRef}
        style={{
          height: "300vh",
        }}
      >
        <section
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* MAIN BG */}
          <motion.img
            src={jon}
            style={{
              scale: bgScale,
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
          />

          {/* FOG */}
          <motion.img
            src={fog}
            style={{
              scale: fogScale,
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 2,
              opacity: 1,
              pointerEvents: "none",
            }}
          />

          {/* DARK FOG */}
          <motion.img
            src={goth}
            style={{
              scale: rockScale,
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 2,
              opacity: 1,
              mixBlendMode: "multiply",
              pointerEvents: "none",
            }}
          />

          {/* TEXT 1 */}
          <motion.h1
            className="maintext"
            style={{
              opacity: title1Opacity,
              position: "absolute",
              top: "25%",
              width: "100%",
              textAlign: "center",
              fontSize: "2rem",
              letterSpacing: "3px",
              zIndex: 3,
            }}
          >
            The story of
          </motion.h1>

          {/* TEXT 2 */}
          <motion.h1
            className="main2text"
            style={{
              opacity: title1Opacity,
              position: "absolute",
              top: "35%",
              width: "100%",
              textAlign: "center",
              fontSize: "5rem",
              zIndex: 3,
            }}
          >
            Winterfell
          </motion.h1>

          {/* TEXT 3 */}
          <motion.h1
            className="main3text"
            style={{
              opacity: title1Opacity,
              position: "absolute",
              top: "28%",
              left: "-25%",
              width: "100%",
              textAlign: "center",
              fontSize: "3rem",
              letterSpacing: "3px",
              zIndex: 3,
            }}
          >
            The
          </motion.h1>

          {/* SECOND TITLE */}
          <motion.h1
            style={{
              opacity: title2Opacity,
              position: "absolute",
              top: "45%",
              width: "100%",
              textAlign: "center",
              color: "white",
              fontSize: "3rem",
              letterSpacing: "6px",
              textTransform: "uppercase",
              zIndex: 3,
            }}
          >
            “Winter is Coming.”
          </motion.h1>

          {/* BLACK FADE */}
          <motion.div
            style={{
              opacity: blackFade,
              position: "absolute",
              inset: 0,
              background: "black",
              zIndex: 10,
            }}
          />
        </section>
      </div>

      {/* OTHER SECTIONS */}
      <Starks />
      <Houses />
      <Info />
    </>
  );
}

export default App;