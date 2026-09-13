import { michroma } from "@/app/layout";
import users from "@/public/users.png";
import Image from "next/image";

function Users() {
    return (
        <section className="relative my-10">
            <div className="relative">
                <div className="absolute top-0 left-0 z-10 w-full h-[70vh] bg-linear-to-b from-cream-50 to-cream-50/5 dark:from-night-950 dark:to-night-950/5"></div>
                <div className="absolute bottom-0 left-0 z-10 w-full h-[30vh] bg-linear-to-t from-cream-50 to-cream-50/5 dark:from-night-950 dark:to-night-950/5"></div>
                <div className="relative w-full h-[70vh]">
                    <Image
                        fill
                        src={users}
                        alt="users image"
                        className="object-cover w-full h-[70vh] object-center"
                    />
                </div>
            </div>
            <div className="absolute max-w-xl z-50 left-[50%] top-[50%] -translate-y-[50%]">
                <h1
                    className={`${michroma.className} text-night-700 dark:text-cream-50 leading-7 text-[1.8rem]`}
                >
                    Top Recommendations for every category
                </h1>
                <h2 className="text-night-700/50 dark:text-cream-50/50 text-[1.2rem] mx-auto max-w-xl my-4 leading-5">
                    Discover movies and shows selected based on your ratings and
                    your friends preferences.
                </h2>
                <div className="flex gap-4">
                    <button className="text-cream-50 dark:text-night-700 bg-night-700 dark:bg-cream-300 px-4 py-2 rounded-full cursor-pointer">
                        Create an account
                    </button>
                    <button className="text-night-700 dark:text-cream-50 border border-night-700 dark:border-cream-200 px-4 py-2 rounded-full cursor-pointer">
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Users;
