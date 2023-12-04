const URL = "https://api.potterdb.com/";
const BOOKS = "/v1/books";
const MOVIES = "/v1/movies"


export default function getBooks() {
    return fetch(`${URL}${BOOKS}`)
        .then((res) => res.json())
}

export function getMovies() {
    return fetch(`${URL}${MOVIES}`)
        .then((res) => res.json())
}




