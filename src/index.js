import express from 'express';
import routes from './routes.js';
import handlebarsInit from './config/handlebarsinit.js';
import expressInit from './config/expressinit.js';

const app = express();

handlebarsInit(app);
expressInit(app);

app.use(routes);

app.listen(5000, () => console.log('Server is listening at http://localhost:5000...'));