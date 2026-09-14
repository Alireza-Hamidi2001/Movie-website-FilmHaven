import { Suspense } from "react";
import Actors from "./_components/actors/Actors";
import Hero from "./_components/Hero";
import Recommendation from "./_components/recommendation/Recommendation";
import Users from "./_components/users/Users";
import Spinner from "./_components/Spinner";

function page() {
    return (
        <div className="relative">
            <Hero />
            <Recommendation />
            <Actors />
            <Users />
        </div>
    );
}

export default page;
