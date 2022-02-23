import {
    fetchMovies,
    fetchBooks,
    asyncFetchBooks,
    asyncFetchMovies
} from './services';


// const movies = require('./data/movies.json');

function getBooksAndMovies() {
    return Promise.all([fetchBooks(), fetchMovies()])
        .then(([books, movies]) => ({
            books,
            movies
        }))
        .catch(error => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then((results) => {
    console.log("getBooksAndMovies", results);
});

function getBooksOrMovies() {
    return Promise.race([fetchBooks(), fetchMovies()])
        .then(results => results)
        .catch(error => console.log("Error waiting for the promise race", error));
};

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then((results) => {
    console.log('getBooksOrMoviesPromise', results)
});

async function getBooksAndMoviesAsync() {
    try {
        // return the results of the promises to a destructured array
        const [books, movies] = await Promise.all([asyncFetchBooks(), asyncFetchMovies()])
        return { books, movies }; // return books and movies Objects
    }
    catch (error) {
        console.log("Error fetching books and movies", error)
        return error;
    }
};

async function getBooksOrMoviesAsync() {
    const values = await Promise.race([asyncFetchBookss(), asyncFetchMovies()]);
    return values;
}


// async function getBooksOrMoviesAsync() {
//     try {
//         const values = await Promise.race([asyncFetchBooks(), asyncFetchMovies()])
//         return values;
//     }
//     catch (error) {
//         console.error("Error waiting for the promise race", error);
//     }
// };

getBooksAndMoviesAsync().then((results) => {
    console.log("movies and books", {
        movies: results.movies,
        books: results.books
    });
}).catch((error) => {
    console.error("Error in getBooksAndMoviesAsync execution", error);
})

getBooksOrMoviesAsync().then(results => {
    console.log("movies OR books", {
        results,
    });
})








// export function fetchMovies() {
//     const resolveFunction = () => movies; //  returns the movies array
//     return fetchWithTimeout(1000).then(resolveFunction);
// };

// const moviePromise = fetchMovies();
// moviePromise.then(results => {
//     console.log(results);
// });

