import Movie from '../models/Movie.js';


// TODO refactor using db filtration
const getAll = async (filter = {}) => {

    let movieQuery = await Movie.find();

    if (filter.search) {
        movieQuery = movieQuery.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
    }
    if (filter.genre) {
        movieQuery = movieQuery.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
    }
    if (filter.year) {
        movieQuery = movieQuery.filter(movie => movie.year === filter.year);
    }
    return movieQuery;
}

const create = (movie) => Movie.create(movie);

const getOne = (movieId) => Movie.findById(movieId).populate('casts');

const attach = (movieId, castId) => {

    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // return movie.save();

    return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
}


export default {
    getAll,
    create,
    getOne,
    attach
}