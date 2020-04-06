import React from "react";
import RideBoostContext from "../../contexts/RideBoostContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faPlane,
  faCalendarWeek,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export default class LandingPage extends React.Component {
  static contextType = RideBoostContext;

  render() {
    const content = this.context.content;
    return (
      <main role="main" className="landing-page">
        <div className="main-wrapper">
          <section className="section-one main-section">
            <FontAwesomeIcon icon={faTaxi} className="hero-icon" />
            <h1>{content.title}</h1>
            <h3>{content.hero}</h3>
            <div>{content.heroContent}</div>
            <button className="btn">
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <Link className="button-text" to={"/demopage"}>
                Explore
              </Link>
            </button>
          </section>
          <section className="section-two main-section">
            <FontAwesomeIcon icon={faCloudSunRain} />
            <h1>{content.sectionOneTitle}</h1>
            <p>{content.sectionOneContent}</p>
          </section>
          <section className="section-three main-section">
            <FontAwesomeIcon icon={faPlane} />
            <h1>{content.sectionTwoTitle}</h1>
            <p>{content.sectionTwoContent}</p>
          </section>
          <section className="section-four main-section">
            <FontAwesomeIcon icon={faCalendarWeek} />
            <h1>{content.sectionThreeTitle}</h1>
            <p>{content.sectionThreeContent}</p>
          </section>
        </div>
      </main>
    );
  }
}
