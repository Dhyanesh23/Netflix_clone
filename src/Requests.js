const API_KEY = "107f7707f216911054f6ad8d52cea0ba"


const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US `,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres = 35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}& with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}& with_genres=99`,
    fetchAnime: `/discover/movie?api_key=${API_KEY} & tv?query=anima`,
};

export default requests;
