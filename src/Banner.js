import "./styles/Banner.css";

function Banner() {
  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Title</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">More info</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `
            This is a test description for the movie
            This is a test description for the movie
            This is a test description for the movie
          `,
            125
          )}
        </h1>
      </div>

      <div className="banner-fade-bottom"></div>
    </header>
  );
}

export default Banner;
