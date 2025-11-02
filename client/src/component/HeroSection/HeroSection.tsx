import "./HeroSection.css";

export const HeroSection = () => {
  const handleGetStartedClick = () => {
    window.open("https://web.facebook.com/", "_blank");
  };
  const handleLiveDemoClick = () => {
    window.open("https://www.youtube.com", "_blank");
  };
  return (
    <div className="hero">
      <h1 className="title-text">
        Data to enrich your{" "}
        <span className="secondary-title-text">online business</span>
      </h1>

      <p className="subtitle-text">
        When it comes to online business, the more data you have, the smarter
        your <br />
        busuness decisions can be.
      </p>

      <div className="button-section">
        <button className="primary-button" onClick={handleGetStartedClick}>
          get started
        </button>
        <button className="secondary-button" onClick={handleLiveDemoClick}>
          live demo
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
