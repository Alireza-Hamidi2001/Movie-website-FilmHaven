import { Suspense } from "react";
import MoviesGrid from "../MoviesGrid";
import Spinner from "../../_components/Spinner";
import { TbMovie } from "react-icons/tb";

export default async function MoviesPage({ searchParams }) {
    const params = await searchParams;
    const page = Number(params?.page) || 1;

    return (
        <div className="min-h-screen pt-18 p-6">
            <h1 className="flex items-center gap-2 text-2xl font-bold text-night-700 dark:text-cream-50 mb-6">
                <TbMovie className="w-8 h-8" /> Movies
            </h1>

            <Suspense
                fallback={<Spinner />}
                key={page}
            >
                <MoviesGrid page={page} />
            </Suspense>
        </div>
    );
}
