import { Suspense } from "react";
import Actors from "./_components/actors/Actors";
import Hero from "./_components/Hero";
import Recommendation from "./_components/recommendation/Recommendation";
import Users from "./_components/users/Users";
import Spinner from "./_components/Spinner";
import Footer from "./_components/Footer";

function page() {
    return (
        <div className="relative">
            <Hero />
            <Recommendation />
            <Actors />
            <Users />
            <Footer />
        </div>
    );
}

export default page;
