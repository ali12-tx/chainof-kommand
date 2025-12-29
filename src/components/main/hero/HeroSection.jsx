import "./styles.css";
import "./ResponsiveHero.css";

import splashVideo from "../../../assets/splashVideo.MP4";
import search from "../../../assets/search.svg"

export const Hero = () => {
  return (
    <section className="HeroSec">
      <div className="heroImageWrapper">
        <div className="heroImg">
          <video
            src={splashVideo}
            autoPlay
            loop
            playsInline
            controls
            preload="metadata"
          />
        </div>
      </div>

      <div className="contentWrapper">
        <div className="leftContent">
          <h2 style={{
            fontFamily: "Poppins",
            fontWeight: "800",
            color: '#402864',
            fontSize: "24px",
          }}>Solo<br /> Competitors...<br />
            Ready to take<br />
            your skills to the<br />
            next level?</h2>
          <div className="handle">
            <input
              type="text"
              placeholder="Search "
              style={{
                width: "80%",
                color: "#402864",
              }}
            />
            <button type="text" style={{
              marginLeft: "1rem",
            }}>
              <img src={search} alt="search" sx={{ width: "1rem" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
