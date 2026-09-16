import { getMovieDetails } from "@/lib/tmdb";
import CartDemo from "../MovieSelected";
import { notFound } from "next/navigation";

async function page({ params }) {
    const { movieName } = await params;
    const movieSelected = await getMovieDetails(movieName);
    console.log(movieSelected);

    if (!movieSelected) {
        notFound();
    }

    if (!movieSelected) return null;
    return (
        <div className="min-h-screen">
            <CartDemo movieSelected={movieSelected} />
        </div>
    );
}

export default page;
