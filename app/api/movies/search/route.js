import { searchMovies } from "@/lib/tmdb";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";

    const movies = await searchMovies(query, 12);

    return Response.json({ movies });
}
