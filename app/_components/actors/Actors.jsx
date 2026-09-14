import { michroma } from "@/app/layout";
import ActorsClient from "./ActorsClient";
import ActorsServer from "./ActorsServer";
import { Suspense } from "react";
import Spinner from "../Spinner";

async function Actors() {
    return (
        <section className="my-10 p-8">
            <h1
                className={`${michroma.className} capitalize text-night-700 dark:text-cream-50 text-center text-[1.8rem]`}
            >
                Find your favourite actors
            </h1>
            <h2 className="text-night-700/50 dark:text-cream-50/50 text-[1.2rem] mx-auto text-center max-w-xl my-6 leading-5">
                Discover actors loved by your friends and community.
            </h2>
            <Suspense fallback={<Spinner />}>
                <ActorsServer />
            </Suspense>
        </section>
    );
}

export default Actors;
