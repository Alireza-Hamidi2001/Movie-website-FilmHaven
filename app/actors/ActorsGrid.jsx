"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const GOLD = "#E8B463";

function ActorsGrid({ actors }) {
    const departments = useMemo(() => {
        const set = new Set(
            actors.map((a) => a.known_for_department).filter(Boolean),
        );
        return ["All", ...Array.from(set)];
    }, [actors]);

    const [activeDept, setActiveDept] = useState("All");

    const filtered = useMemo(() => {
        if (activeDept === "All") return actors;
        return actors.filter((a) => a.known_for_department === activeDept);
    }, [actors, activeDept]);

    return (
        <div>
            <style>{`
                @keyframes actor-in {
                    from { opacity: 0; transform: translateY(14px) scale(0.96); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
                .actor-card {
                    animation: actor-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
                }
                @media (prefers-reduced-motion: reduce) {
                    .actor-card { animation: none; }
                }
            `}</style>

            <div className="flex gap-2 flex-wrap justify-center mb-12">
                {departments.map((dept) => (
                    <button
                        key={dept}
                        onClick={() => setActiveDept(dept)}
                        className={`dark:text-cream-50 px-4 py-1.5 rounded-full text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                            activeDept === dept
                                ? "bg-blue-700 text-cream-50"
                                : "bg-black/15 dark:bg-white/20 text-night-700"
                        }`}
                    >
                        {dept}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
                {filtered.map((person, i) => (
                    <ActorCard
                        key={`${person.id}-${i}`}
                        person={person}
                        delay={(i % 12) * 0.04}
                    />
                ))}
            </div>

            {filtered.length === 0 && (
                <p className="text-center text-night-700 dark:text-cream-50 mt-10">
                    No one found in this department yet.
                </p>
            )}
        </div>
    );
}

function ActorCard({ person, delay }) {
    const topKnownFor = person.known_for || "none";

    return (
        <Link
            href={`/actors/${person.id}`}
            className="actor-card p-8 group flex flex-col items-center gap-3 text-center"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="relative w-28 h-28 md:w-54 md:h-64">
                <div
                    className="absolute -inset-1.5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                    style={{
                        background: `conic-gradient(from 180deg, ${GOLD}, transparent 60%)`,
                    }}
                />
                <div className="relative w-full h-full overflow-hidden ring-1 ring-cream-50/10 group-hover:ring-2 transition-all duration-300">
                    <img
                        alt={person.name}
                        src={
                            person.profile_path
                                ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
                                : "/actor.png"
                        }
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />

                    <ul className="absolute inset-0 flex flex-col gap-1 items-center  justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 overflow-hidden">
                        <p className="text-cream-50/50">Known for :</p>
                        {topKnownFor.map((topMovie, i) => (
                            <li
                                key={i}
                                className="w-full"
                            >
                                <p className="text-[1rem] text-cream-50 truncate">
                                    &bull; {topMovie.title || topMovie.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <p className="text-night-700 dark:text-cream-50 text-sm md:text-base leading-tight">
                    {person.name}
                </p>
                <div className="flex gap-2 items-center justify-center mt-1.5">
                    <span className="text-night-700/70 dark:text-cream-50/50 text-xs">
                        {person.known_for_department}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default ActorsGrid;
