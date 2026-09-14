import { getTopRatedPage } from "@/lib/tmdb";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "movie";
    const page = Number(searchParams.get("page")) || 1;

    const results = await getTopRatedPage(type, page);

    return Response.json({ results });
}