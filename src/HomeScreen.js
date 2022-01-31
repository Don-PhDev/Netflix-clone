import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Requests";
import "./styles/HomeScreen.css";

function HomeScreen() {
  return (
    <div className="home-screen">
      <Navbar />

      <Banner />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimatedMovies} />
      <Row
        title="Sci-Fi & Fantasy"
        fetchUrl={requests.fetchSciFiFantasyMovies}
      />
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Western Movies" fetchUrl={requests.fetchWesternMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
