import React, { useState } from "react";
import { motion } from "framer-motion";

import nedImg from "../assets/ned.jpg";
import jonImg from "../assets/jonsnow.jpg";
import aryaImg from "../assets/rob.jpg";
import robbImg from "../assets/cat.jpg";

import nedVideo from "../assets/ned.mp4";
import jonVideo from "../assets/jon.mp4";
import aryaVideo from "../assets/arya.mp4";
import robbVideo from "../assets/robb.mp4";

import "./starks.css";

const characters = [
  {
    name: "Ned Stark",
    image: nedImg,
    video: nedVideo,
    desc: `
      Ned Stark was one of the most honorable men in Westeros.
      Lord of Winterfell and protector of the North, he believed
      duty was greater than power.
    `,
  },

  {
    name: "Jon Snow",
    image: jonImg,
    video: jonVideo,
    desc: `
      Jon Snow rose from being an outcast to becoming one of the
      greatest leaders beyond the Wall. A warrior shaped by loyalty,
      sacrifice, and destiny.
    `,
  },

  {
    name: "Arya Stark",
    image: aryaImg,
    video: aryaVideo,
    desc: `
      Arya Stark walked the path of vengeance and survival.
      From Winterfell to Braavos, she became the deadliest
      assassin in Westeros.
    `,
  },

  {
    name: "Robb Stark",
    image: robbImg,
    video: robbVideo,
    desc: `
      Robb Stark, the Young Wolf, united the North in rebellion.
      A fearless king whose victories became legends across the realm.
    `,
  },
];

const Starks = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="characters">
      {characters.map((char, index) => (
        <motion.div
          key={index}
          className="panel"
          animate={{
            flex:
              active === null
                ? 1
                : active === index
                ? 8
                : 0.5,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          onClick={() =>
            setActive(active === index ? null : index)
          }
        >
          {/* IMAGE */}
          <img src={char.image} alt={char.name} />

          {/* VIDEO SECTION */}
          {active === index && (
            <>
              <video
                className="video"
                src={char.video}
                autoPlay
                muted
                loop
              />

              {/* DARK OVERLAY */}
              <div className="videoOverlay" />

              {/* CONTENT */}
              <div className="videoContent">
                <h1>{char.name}</h1>

                <p>{char.desc}</p>
              </div>
            </>
          )}

          {/* NORMAL OVERLAY */}
          <div className="overlay" />

          {/* PANEL TITLE */}
          <h2>{char.name}</h2>
        </motion.div>
      ))}
    </section>
  );
};

export default Starks;