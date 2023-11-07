import axios from 'axios'
const apiKey = '03a1dff00b9cb30d7b9205d934d2ce27'

const baseURL = `https://api.themoviedb.org/3`
const trendingMovie = `${baseURL}/trending/movie/day?api_key=${apiKey}`
const upcomingMovie = `${baseURL}/movie/upcoming?api_key=${apiKey}`
const topRateMovie = `${baseURL}/movie/top_rated?api_key=${apiKey}`
const searchMovie = `${baseURL}/search/movie?api_key=${apiKey}`

const allGenre = `${baseURL}/genre/movie/list?api_key=${apiKey}`
const movieGenre = (id,page) => `${baseURL}/genre/${id}/movies?api_key=${apiKey}&page=${page}`

const movieDetail = (id) => `${baseURL}/movie/${id}?api_key=${apiKey}`
const movieCredit = (id) => `${baseURL}/movie/${id}/credits?api_key=${apiKey}`
const movieSimilar = (id) => `${baseURL}/movie/${id}/similar?api_key=${apiKey}`
const movieVideo = (id) => `${baseURL}/movie/${id}/videos?api_key=${apiKey}`

const personDetail = (id) => `${baseURL}/person/${id}?api_key=${apiKey}`
const personMovie = (id) => `${baseURL}/person/${id}/movie_credits?api_key=${apiKey}`

export const image500 = (posterPath) => posterPath ? 'https://image.tmdb.org/t/p/w500' + posterPath : null;
export const image342 = (posterPath) => posterPath ? 'https://image.tmdb.org/t/p/w342' + posterPath : null;
export const image185 = (posterPath) => posterPath ? 'https://image.tmdb.org/t/p/w185' + posterPath : null;


// fallback images 
export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

const apiCall = async(endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        return {};
    }
}

// home screen apis
export const fetchTrendingMovies = () => {
    return apiCall(trendingMovie);
}
export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMovie);
}
export const fetchTopRatedMovies = () => {
    return apiCall(topRateMovie);
}
export const fetchMoviesByGenre = (id,page) => {
    return apiCall(movieGenre(id,page));
}

// genre screen api
export const fetchAllGenres = () => {
    return apiCall(allGenre);
}


// movie screen apis
export const fetchMovieDetails = (id) => {
    return apiCall(movieDetail(id));
}
export const fetchMovieCredits = (id) => {
    return apiCall(movieCredit(id));
}
export const fetchSimilarMovies = (id) => {
    return apiCall(movieSimilar(id));
}
export const fetchMovieVideo = (id) => {
    return apiCall(movieVideo(id))
}

// person screen apis
export const fetchPersonDetails = (personId) => {
    return apiCall(personDetail(personId));
}
export const fetchPersonMovies = (personId) => {
    return apiCall(personMoviesEndpoint(personId));
}

// search screen apis
export const searchMovies = (params) => {
    return apiCall(searchMovie, params);
}