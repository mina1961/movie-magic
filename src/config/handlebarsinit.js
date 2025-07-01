import handlebars from 'express-handlebars';

export default function (app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        helpers: {
            rating: function (rating) {
                if (!Number.isInteger(rating)) {
                    return 'N\\A';
                }

                return '&#x2605;'.repeat(rating);
            }
        }
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
}