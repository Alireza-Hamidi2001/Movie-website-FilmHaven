import ActorCart from "@/app/_components/ActorCart";
import { getPersonDetails } from "@/lib/tmdb";

async function page({ params }) {
    const { actorId } = await params;
    const actorSelected = await getPersonDetails(actorId);
    console.log(actorSelected);

    if (!actorSelected) return null;
    return (
        <div className="min-h-screen">
            <ActorCart actorSelected={actorSelected} />
        </div>
    );
}

export default page;
