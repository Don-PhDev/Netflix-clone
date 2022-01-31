const API_KEY = "589a0bba7dc58714016e2ba181e8e1f5";
const discoverTv = "/discover/tv?api_key=";
const usLanguage = "&language=en-US";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}${usLanguage}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}${usLanguage}`,
  fetchActionMovies: `${discoverTv}${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${discoverTv}${API_KEY}&with_genres=35`,
  fetchHorroMovies: `${discoverTv}${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${discoverTv}${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${discoverTv}${API_KEY}&with_genres=99`,
};

export default requests;
