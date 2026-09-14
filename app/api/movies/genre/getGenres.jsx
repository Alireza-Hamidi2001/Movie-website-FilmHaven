export async function getGenres() {
    const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en-US",
        {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
                accept: "application/json",
            },
            next: { revalidate: 86400 }, // یه روز cache - ژانرها تغییر نمیکنن
        },
    );
    const data = await res.json();
    return data.genres; // [{ id: 28, name: "Action" }, ...]
}
