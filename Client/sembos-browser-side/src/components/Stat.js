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

function Hotel({ name }) {
  name = name.toUpperCase();
  
  return <div className="hotel-name">{name}</div>;
}

function Stat({ country, hotel1, hotel2, hotel3 }) {
  return (
      <div className="stat">
          <Flag country={country} />
          <div className="stat-hotels">
              <div className="stat-hotels-top">
                  <span className="">1.-</span>
                  <Hotel name={hotel1} />
              </div>
              <div className="stat-hotels-top">
                  <span className="">2.-</span>
                  <Hotel name={hotel2} />
              </div>
              <div className="stat-hotels-top">
                  <span className="">3.-</span>
                  <Hotel name={hotel3} />
              </div>
          </div>
          
      </div>
  );
}

export default Stat;
