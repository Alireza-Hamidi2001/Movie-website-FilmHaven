import { getLatestMoviesByGenre } from "@/lib/tmdb";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const genre = searchParams.get("genre") || "28";
    const limit = Number(searchParams.get("limit")) || 20;

    const movies = await getLatestMoviesByGenre(genre, limit);

    return Response.json({ movies });
}
