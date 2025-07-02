import Movie from '../models/Movie.js';


// TODO refactor using db filtration
const getAll = (filter = {}) => {

    let movieQuery = Movie.find();

    if (filter.search) {
        movieQuery.find({ title: { $regex: filter.search, $options: 'i' } });
    }
    if (filter.genre) {
        movieQuery.find({ genre: filter.genre.toLowerCase() });
        //movieQuery.where('genre').equals(filter.genre.toLowerCase());
    }
    if (filter.year) {
        movieQuery.find({ year: filter.year });
        //movieQuery.where('year').equals(filter.year);
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