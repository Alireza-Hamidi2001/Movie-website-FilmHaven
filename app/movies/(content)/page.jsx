import { Suspense } from "react";
import MoviesGrid from "../MoviesGrid";
import Spinner from "../../_components/Spinner";

export default async function MoviesPage({ searchParams }) {
    const params = await searchParams;
    const page = Number(params?.page) || 1;

    return (
        <main className="h-[calc(100vh-4rem)] overflow-y-auto p-6">
            <Suspense
                fallback={<Spinner />}
                key={page}
            >
                <MoviesGrid page={page} />
            </Suspense>
        </main>
    );
}
