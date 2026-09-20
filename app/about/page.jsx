import Link from "next/link";
import Image from "next/image";
import aboutImage from "@/public/hero-mobile.png";

const features = [
    {
        title: "Discover",
        text: "Browse trending, top-rated and new releases, or search for any title in seconds.",
    },
    {
        title: "Save favourites",
        text: "Keep a personal list of the movies you love and come back to it any time.",
    },
    {
        title: "Know before you watch",
        text: "Read the story, see the cast and check ratings so you pick the right movie.",
    },
    {
        title: "Your own profile",
        text: "Create an account to manage your profile and keep everything in one place.",
    },
];

function AboutPage() {
    return (
        <main className="w-full my-[4rem] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 max-w-7xl py-10 md:py-16 lg:py-20 text-night-700 dark:text-cream-50">
            {/* Hero */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                        A calm place to find your next movie.
                    </h1>
                    <p className="mt-5 md:mt-6 text-base md:text-lg text-night-700/70 dark:text-cream-50/60 max-w-[52ch]">
                        Film Haven helps you explore movies without the noise.
                        Search, save what interests you, and build a collection
                        that feels like yours.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/movies"
                            className="bg-red-600 dark:bg-red-500 text-cream-50 px-6 py-3 rounded-lg text-center hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                        >
                            Browse movies
                        </Link>
                        <Link
                            href="/login"
                            className="border border-night-700/20 dark:border-cream-50/20 px-6 py-3 rounded-lg text-center hover:bg-night-700/5 dark:hover:bg-cream-50/5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night-700/50 dark:focus-visible:outline-cream-50/50"
                        >
                            Log in
                        </Link>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-lg overflow-hidden border border-night-700/10 dark:border-cream-50/5 shadow-lg shadow-night-700/4 dark:shadow-cream-50/4">
                    <div className="absolute inset-0 z-10 bg-black/40" />
                    <Image
                        src={aboutImage}
                        alt="Film Haven on a mobile screen"
                        fill
                        priority
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Features */}
            <section className="mt-16 md:mt-24">
                <h2 className="text-2xl md:text-3xl font-semibold max-w-[24ch]">
                    What you can do here
                </h2>
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
                    {features.map((item) => (
                        <li
                            key={item.title}
                            className="border-t border-night-700/15 dark:border-cream-50/15 pt-4"
                        >
                            <h3 className="text-lg font-semibold">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm md:text-base text-night-700/70 dark:text-cream-50/60">
                                {item.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Story */}
            <section className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                <h2 className="text-2xl md:text-3xl font-semibold md:col-span-1">
                    Why we built it
                </h2>
                <div className="md:col-span-2 space-y-4 text-base md:text-lg text-night-700/80 dark:text-cream-50/70 max-w-[65ch]">
                    <p>
                        Choosing what to watch shouldn&apos;t take longer than
                        watching it. Most movie sites are crowded with ads and
                        endless lists, which makes it hard to find something
                        you actually want.
                    </p>
                    <p>
                        Film Haven keeps things simple: clear pages, useful
                        details and a place to save the movies you care about.
                        It works the same on your phone, tablet or laptop, so
                        your list is always with you.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="mt-16 md:mt-24 rounded-lg border border-night-700/10 dark:border-cream-50/10 px-6 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Ready to start your list?
                    </h2>
                    <p className="mt-2 text-night-700/70 dark:text-cream-50/60">
                        Create a free account and save your first movie today.
                    </p>
                </div>
                <Link
                    href="/login"
                    className="bg-red-600 dark:bg-red-500 text-cream-50 px-6 py-3 rounded-lg text-center hover:-translate-y-0.5 transition-all duration-300 md:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                >
                    Create account
                </Link>
            </section>
        </main>
    );
}

export default AboutPage;
