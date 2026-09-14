import { getPopularPeople } from "@/lib/tmdb";
import ActorsClient from "./ActorsClient";

async function ActorsServer() {
    const actors = await getPopularPeople(24);

    return (
        <>
            <ActorsClient actors={actors} />
        </>
    );
}

export default ActorsServer;
