import fs from 'fs/promises';
import  path from 'path';

async function getDb() {
    const dbPath = path.resolve('./src/db.json');
    const result = await fs.readFile(dbPath, {encoding: 'utf-8'});
    const data = JSON.parse(result);
    return data;
}

async function getMovies() {
    const db = await getDb();
    return db.movies;
}

export default {
    getMovies,
}
