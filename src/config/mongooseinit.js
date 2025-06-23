import { connect } from 'mongoose';

const dbUrl = 'mongodb://localhost:27017/magic-movies-db';

export default async function mongooseInit() {
    try {
    await connect(dbUrl);
    console.log('Connected to the database successfully!');
} catch (error) {
    console.log(`Error connecting to the database: ${error.message}`);
}
}

