import { Router } from 'express';
import movieService from '../services/movieService.js';

const router = Router();


router.get('/', (req, res) => {
    const movies = movieService.getAll();
    res.render('home', {movies});
});

router.get('/about', (req, res) => {
    
    res.render('home/about');
});

export default router;
// This code defines a simple Express router that handles GET requests to the root path ('/'). When a request is made to this path, it responds by rendering a view called 'home'. This is typically used in web applications to serve the homepage or main landing page of the site. The `res.render` method is part of Express's response object, which allows you to render a view template and send it back to the client.
// The `home` view would typically be an HTML file or template that is processed by a templating engine like Handlebars, EJS, or Pug, allowing you to dynamically generate HTML content based on data passed to it.