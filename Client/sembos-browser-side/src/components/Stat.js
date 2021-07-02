import React from "react";
import "./Stat.css";

function Flag({ country }) {
  if (country === "it") {
    return (
      <div className="flag">
        <img
          class="flag-image"
          width="80px"
          height="80px"
          src="italyFlag.png"
          alt="italy flag"
        />
      </div>
    );
  } else if (country === "fr") {
    return (
      <div className="flag">
        <img
          class="flag-image"
          width="80px"
          height="80px"
          src="franceFlag.png"
          alt="french flag"
        />
      </div>
    );
  } else {
    return (
      <div className="flag">
        <img
          class="flag-image"
          width="80px"
          height="80px"
          src="spainFlag.png"
          alt="spanish flag"
        />
      </div>
    );
  }
}

function Stat({ country, average, hotel1, hotel2, hotel3 }) {
  return (
      <div className="stat">
        <div className="stat-info">
          <Flag className="stat-info-country" country={country} />
          <span className="stat-info-average">Average: {average}⭐</span>
        </div>
          <div className="stat-hotels">
            <span>BEST HOTELS</span>
              <div className="stat-hotels-top">
                  <span className="">1.- {hotel1.toUpperCase()}</span>
              </div>
              <div className="stat-hotels-top">
                  <span className="">2.- {hotel2.toUpperCase()}</span>
              </div>
              <div className="stat-hotels-top">
                  <span className="">3.- {hotel3.toUpperCase()}</span>
              </div>
          </div>
      </div>
  );
}

export default Stat;
