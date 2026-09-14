import { michroma } from "../layout";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import ActorsGridServer from "./ActorsGridServer";

function page() {
    return (
        <div className="mt-20 my-10 px-6 md:px-10">
            <div className="relative py-10 text-center overflow-hidden">
                <div
                    className="pointer-events-none absolute inset-0 -z-10"
                    style={{
                        background:
                            "radial-gradient(60% 60% at 50% 30%, rgba(232,180,99,0.14), transparent 70%)",
                    }}
                />
                <h1
                    className={`${michroma.className} text-night-700 dark:text-cream-50 text-[1.8rem] md:text-[2.4rem]`}>
                    Find your favourite actors
                </h1>
                <p className="text-night-700/50 dark:text-cream-50/50 text-[1.1rem] mx-auto max-w-xl mt-4 leading-6">
                    Discover actors loved by your friends and community.
                </p>
            </div>

            <Suspense fallback={<Spinner />}>
                <ActorsGridServer />
            </Suspense>
        </div>
    );
}

export default page;
