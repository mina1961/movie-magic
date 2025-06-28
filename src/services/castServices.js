import Cast from '../models/cast.js';

const getAll = () => Cast.find();

const create = (cast) => Cast.create(cast);

export default {
    create,
    getAll,
}