import { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./Requests";
import "./styles/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button"><i class="fas fa-play"></i>&nbsp;&nbsp;Play</button>
          <button className="banner_button"><i class="far fa-info-circle"></i>&nbsp;&nbsp;More Info</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `
            ${movie?.overview}
          `,
            210
          )}
        </h1>
      </div>

      <div className="banner-fade-bottom"></div>
    </header>
  );
}

export default Banner;
