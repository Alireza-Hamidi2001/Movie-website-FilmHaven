import { getMovieDetails } from "@/lib/tmdb";
import CartDemo from "../MovieSelected";

async function page({ params }) {
    const { movieName } = await params;
    const movieSelected = await getMovieDetails(movieName);
    console.log(movieSelected);

    if (!movieSelected) return null;
    return (
        <div>
            <CartDemo movieSelected={movieSelected} />
        </div>
    );
}

export default page;
