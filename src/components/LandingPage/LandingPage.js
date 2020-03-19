import React from "react";

export default class LandingPage extends React.Component {
  render() {
    const content = this.props.content;
    return (
      <main role="main" className="landing-page">
        <div className="main-wrapper">
          <section className="main-section">
            <h1>{content.hero}</h1>
            <p>{content.heroContent}</p>
            <button>Explore</button>
          </section>
          <section className="main-section">
            <h1>{content.sectionOneTitle}</h1>
            <p>{content.sectionOneContent}</p>
            <img src={content.sectionOneScreenshot} alt="app screenshot" />
          </section>
          <section className="main-section">
            <h1>{content.sectionTwoTitle}</h1>
            <p>{content.sectionTwoContent}</p>
            <img src={content.sectionTwoScreenshot} alt="app screenshot" />
          </section>
        </div>
      </main>
    );
  }
}
