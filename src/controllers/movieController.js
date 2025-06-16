import { Router } from "express";
import movieService from "../services/movieService.js";

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
export default router;