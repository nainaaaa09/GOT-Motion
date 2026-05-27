import React from "react";
import "./Info.css";

import s1 from "../assets/george.jpg";
import s2 from "../assets/hbo.jpg";
import s3 from "../assets/ramin.jpg";

const Info = () => {
  return (
    <section className="credits">

      <div className="grid">

        {/* RELEASE */}
        <div className="card year">
          <h1>1985</h1>

          <div>
            <p className="label">Release date</p>
            <p>June 7, 1985</p>
          </div>
        </div>

        {/* STEVEN SPIELBERG */}
        <div className="card image wide">

          <a
            href="https://www.imdb.com/name/nm0000229/"
            target="_blank"
            rel="noreferrer"
            className="cardLink"
          >
            <img src={s1} alt="" />

            <div className="overlay" />

            <div className="content">
              <p>Story by</p>
              <h2>Steven Spielberg</h2>
            </div>
          </a>

        </div>

        {/* HBO */}
        <div className="card image">

          <a
            href="https://www.hbo.com/game-of-thrones"
            target="_blank"
            rel="noreferrer"
            className="cardLink"
          >
            <img src={s2} alt="" />

            <div className="overlay" />

            <div className="content">
              <p>Production</p>
              <h2>HBO</h2>
            </div>
          </a>

        </div>

        {/* WARNER BROS */}
        <div className="card logo">

          <a
            href="https://www.warnerbros.com"
            target="_blank"
            rel="noreferrer"
            className="cardLink centerLink"
          >
            <h1>WB</h1>

            <div>
              <p className="label">Distributed by</p>
              <p>Warner Bros</p>
            </div>
          </a>

        </div>

        {/* BUDGET */}
        <div className="card center">
          <h1>$19M</h1>

          <div>
            <p className="label">Budget</p>
            <p>$19 Million</p>
          </div>
        </div>

        {/* MUSIC */}
        <div className="card image">

          <a
            href="https://www.imdb.com/name/nm1014697/"
            target="_blank"
            rel="noreferrer"
            className="cardLink"
          >
            <img src={s3} alt="" />

            <div className="overlay" />

            <div className="content">
              <p>Music by</p>
              <h2>Ramin Djawadi</h2>
            </div>
          </a>

        </div>

        {/* BOX OFFICE */}
        <div className="card center">
          <h1>$61M</h1>

          <div>
            <p className="label">Box Office</p>
            <p>$61 Million</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Info;