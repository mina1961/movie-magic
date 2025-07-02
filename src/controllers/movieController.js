import { Router } from "express";
import movieService from "../services/movieService.js";
import castServices from "../services/castServices.js";

const router = Router();

// URL - /movies/create
router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create', async (req, res) => {
    const movieData = req.body;
    // TODO: Save movieData to the database
    await movieService.create(movieData);
    res.redirect('/');
});

router.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter).lean();
    res.render('home', { isSearch: true, movies, filter });
});


router.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    const casts = await castServices.getAll()

    res.render('movies/details', { movie });
});

router.get('/:movieId/attach', async (req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean();
    const casts = await castServices.getAll().lean();
    res.render('movies/attach', { movie, casts });
});

router.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/details`);
})


export default router;