async function getMovies() {
    console.log("TMDB TOKEN:", process.env.TMDB_TOKEN);

    try {
        const response = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=Batman",
            {
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
                    accept: "application/json",
                },
            }
        );

        console.log("STATUS:", response.status);

        const data = await response.json();

        console.log("DATA:", data);

        return data.results;
    } catch (error) {
        console.error("FETCH ERROR:", error);
        console.error("ERROR MESSAGE:", error.message);
        console.error("ERROR CAUSE:", error.cause);

        throw error;
    }
}

export default async function MoviesPage() {
    const movies = await getMovies();

    return (
        <div>
            <h1>Movies</h1>

            {movies.map((movie) => (
                <p key={movie.id}>{movie.title}</p>
            ))}
        </div>
    );
}
