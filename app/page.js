import Actors from "./_components/actors/Actors";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Recommendation from "./_components/recommendation/Recommendation";
import Users from "./_components/users/Users";

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
