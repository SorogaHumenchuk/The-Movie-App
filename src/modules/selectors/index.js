export const getMovies = state => state.movies.results;
export const getTotalMovies = state => state.movies.total_pages;
export const getMovieByID = state => state.movieById;
export const getGenres = state => state.genres;
export const getRecommendations = state => state.recommendations.results;
export const getTrailersById = state => state.movieById.videos;
export const getCastByMovieId = state => state.movieById.credits;
export const getActorInfo = state => state.actor.person;
