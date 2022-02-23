const movies = require('./data/movies.json');
import { fetchWithTimeout } from './services';

export function fetchMovies() {
    const resolveFunction = () => movies; //  returns the movies array
    return fetchWithTimeout(1000).then(resolveFunction);
};

const moviesPromise = fetchMovies();

moviesPromise.then(results => {
    console.log(results);
});

