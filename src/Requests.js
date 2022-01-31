const API_KEY = "589a0bba7dc58714016e2ba181e8e1f5";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchAnimatedMovies: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  fetchSciFiFantasyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  fetchDramaMovies: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchWesternMovies: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
