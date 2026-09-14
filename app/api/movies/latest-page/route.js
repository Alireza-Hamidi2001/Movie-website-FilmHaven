import { getLatestMoviesByGenrePage } from "@/lib/tmdb";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const genre = searchParams.get("genre") || "28";
    const page = Number(searchParams.get("page")) || 2;

    const movies = await getLatestMoviesByGenrePage(genre, page);

    return Response.json({ movies });
}
