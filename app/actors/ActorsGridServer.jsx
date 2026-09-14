import { getPopularPeople } from "@/lib/tmdb";
import ActorsGrid from "./ActorsGrid";

async function ActorsGridServer() {
    const actors = await getPopularPeople(80);

    if (!actors?.length) {
        return (
            <div className="py-24 text-center text-night-700 dark:text-cream-50">
                Couldn&apos;t load actors right now. Try refreshing the page.
            </div>
        );
    }

    return <ActorsGrid actors={actors} />;
}

export default ActorsGridServer;
