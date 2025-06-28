import Cast from '../models/cast.js';

const create = (cast) => Cast.create(cast);

export default {
    create,
}