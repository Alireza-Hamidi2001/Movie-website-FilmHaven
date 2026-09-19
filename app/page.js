import { Suspense } from "react";
import Actors from "./_components/actors/Actors";
import Hero from "./_components/Hero";
import Recommendation from "./_components/recommendation/Recommendation";
import Users from "./_components/users/Users";
import Spinner from "./_components/Spinner";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

function page() {
    return (
        <div className="relative">
            <Header />
            <Hero />
            <Recommendation />
            <Actors />
            <Users />
            <Footer />
        </div>
    );
}

export default page;
