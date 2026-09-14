// lib/tmdb.js

export async function getMovieDetails(title) {
    const headers = {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        accept: "application/json",
    };

    const searchRes = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            title,
        )}`,
        { headers },
    );
    const searchData = await searchRes.json();
    const movie = searchData.results?.[0];

    if (!movie) return null;

    const detailsRes = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?append_to_response=credits`,
        { headers },
    );
    const details = await detailsRes.json();

    return details;
}

// type: "movie" یا "tv"
// TMDB هر صفحه فقط 20 نتیجه می‌ده، پس اگه limit بیشتر از 20 باشه چند صفحه می‌گیریم
export async function getTopRated(type = "movie", limit = 5) {
    const headers = {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        accept: "application/json",
    };

    const pagesNeeded = Math.ceil(limit / 20);

    const requests = Array.from({ length: pagesNeeded }, (_, i) =>
        fetch(
            `https://api.themoviedb.org/3/${type}/top_rated?language=en-US&page=${
                i + 1
            }`,
            { headers },
        ).then((res) => res.json()),
    );

    const pages = await Promise.all(requests);
    const allResults = pages.flatMap((page) => page.results || []);

    return allResults.slice(0, limit);
}

// گرفتن یه صفحه‌ی خاص (برای دکمه Discover More)
export async function getTopRatedPage(type = "movie", page = 1) {
    const headers = {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        accept: "application/json",
    };

    const res = await fetch(
        `https://api.themoviedb.org/3/${type}/top_rated?language=en-US&page=${page}`,
        { headers },
    );
    const data = await res.json();

    return data.results || [];
}
//// ---------------------------------------------------------
//// ---------------------------------------------------------
//// ---------------------------------------------------------
// جدیدترین فیلم‌ها بر اساس ژانر (امتیاز مهم نیست، فقط تاریخ اکران)
export async function getLatestMoviesByGenre(genreId, limit = 20) {
    const headers = {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        accept: "application/json",
    };

    const today = new Date().toISOString().split("T")[0];

    const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&sort_by=primary_release_date.desc&primary_release_date.lte=${today}&include_adult=false&language=en-US&page=1`,
        { headers },
    );
    const data = await res.json();

    return data.results?.slice(0, limit) || [];
}

// یه صفحه کامل (بدون slice) برای دکمه Discover More
export async function getLatestMoviesByGenrePage(genreId, page = 1) {
    const headers = {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        accept: "application/json",
    };

    const today = new Date().toISOString().split("T")[0];

    const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&sort_by=primary_release_date.desc&primary_release_date.lte=${today}&include_adult=false&language=en-US&page=${page}`,
        { headers },
    );
    const data = await res.json();

    return data.results || [];
}

// محبوب‌ترین بازیگران/افراد
// TMDB هر صفحه فقط 20 نتیجه می‌ده، پس اگه limit بیشتر از 20 باشه چند صفحه می‌گیریم
export async function getPopularPeople(limit = 10) {
    const headers = {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        accept: "application/json",
    };

    const pagesNeeded = Math.ceil(limit / 20);

    const requests = Array.from({ length: pagesNeeded }, (_, i) =>
        fetch(
            `https://api.themoviedb.org/3/person/popular?language=en-US&page=${
                i + 1
            }`,
            { headers },
        ).then((res) => res.json()),
    );

    const pages = await Promise.all(requests);

    const allResults = pages.flatMap((page) => page.results || []);

    return allResults.slice(0, limit);
}

export async function getPersonDetails(personId) {
    const headers = {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        accept: "application/json",
    };

    const res = await fetch(
        `https://api.themoviedb.org/3/person/${personId}?append_to_response=movie_credits`,
        { headers },
    );
    return await res.json();
}

export function calculateAge(birthday) {
    if (!birthday) return null;
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }
    return age;
}
