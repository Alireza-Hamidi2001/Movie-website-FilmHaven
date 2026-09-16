// app/movies/[id]/page.jsx
import { getMovieDetailsById } from "@/lib/tmdb";
import { notFound } from "next/navigation";
import MovieSelected from "../MovieSelected";

async function Page({ params }) {
    const { id } = await params;
    console.log("🔍 Page called with id:", id);

    const movieSelected = await getMovieDetailsById(id);
    console.log("🎬 Movie fetched:", movieSelected?.title);

    if (!movieSelected) notFound();

    return (
        <div className="min-h-screen">
            <MovieSelected movieSelected={movieSelected} />
        </div>
    );
}

export default Page;
