const URL = "https://api.potterdb.com//v1/books";

export default function get() {
    return fetch(`${URL}`)
        .then((res) => res.json())
}

