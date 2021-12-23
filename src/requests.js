const API_KEY = "25ad1daa0e5facf21ab8ce027145882f";

const requests = {
    
        fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks-213`,
    
        fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        
        fetchTopRated: `/movie/top-rated?opi_key=${API_KEY}&language=en-US`,
        
        fetchAction_Movies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        
        fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        
        fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        
        fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        
        fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;