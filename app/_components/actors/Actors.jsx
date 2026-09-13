import { michroma } from "@/app/layout";
import Image from "next/image";
import avatar from "@/public/actor.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Actors() {
    const actor = [1, 2, 3, 4, 5];
    return (
        <section className="my-10 p-8">
            <h1
                className={`${michroma.className} capitalize text-night-700 dark:text-cream-50 text-center text-[1.8rem]`}
            >
                Find your favourite actors
            </h1>
            <h2 className="text-night-700/50 dark:text-cream-50/50 text-[1.2rem] mx-auto text-center max-w-xl  my-6 leading-5">
                Discover actors loved by your friends and community.
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 my-6">
                {actor.map((actor) => (
                    <div
                        key={actor}
                        className="flex flex-col gap-2 justify-center mx-auto"
                    >
                        <div className="relative w-40 h-40 rounded-full">
                            <Image
                                alt="actor image"
                                src={avatar}
                                className=" rounded-full object-cover"
                                fill
                            />
                        </div>
                        <p className="text-night-700 dark:text-cream-50">
                            Scarlet Johnson
                        </p>
                        <div className="flex gap-2 items-center">
                            <span className="bg-green-500 rounded-full p-2">
                                8.4
                            </span>
                            <span className="text-night-700/70 dark:text-cream-50/50">
                                2340
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-2 mx-auto w-fit ">
                <FaAngleLeft className="flex justify-center items-center p-1 w-8 h-8 text-night-700 dark:text-cream-50 bg-cream-200 dark:bg-night-700 rounded-full cursor-pointer hover:bg-night-900 transition-all duration-300" />
                <FaAngleRight className="flex justify-center items-center p-1 w-8 h-8 text-night-700 dark:text-cream-50 bg-cream-200 dark:bg-night-700 rounded-full cursor-pointer hover:bg-night-900 transition-all duration-300" />
            </div>
        </section>
    );
}

export default Actors;
