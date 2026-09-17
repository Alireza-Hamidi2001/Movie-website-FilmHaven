import { michroma } from "@/app/layout";
import users from "@/public/users.png";
import Image from "next/image";

function Users() {
    return (
        <section className="relative my-10">
            <div className="relative">
                <div className="absolute top-0 left-0 z-10 w-full h-[70vh] bg-linear-to-b from-cream-50 to-cream-50/5 dark:from-night-950 dark:to-night-950/5"></div>
                <div className="absolute bottom-0 left-0 z-10 w-full h-[30vh] bg-linear-to-t from-cream-50 to-cream-50/5 dark:from-night-950 dark:to-night-950/5"></div>
                <div className="relative w-screen h-[80vh] md:h-[70vh]">
                    <Image
                        fill
                        src={users}
                        alt="users image"
                        className="object-cover w-full h-[70vh] object-left md:object-center"
                    />
                </div>
            </div>
            <div className="absolute max-w-xl p-2 md:p-0 z-50 left-0 top-[20%] md:left-[50%] md:top-[50%] -translate-y-[50%]">
                <h1
                    className={`${michroma.className} text-night-700 dark:text-cream-50 text-center text-[1.4rem] leading-7 md:text-[2rem] md:leading-relaxed`}
                >
                    Top Recommendations for every category
                </h1>
                <h2 className="text-night-700/50 dark:text-cream-50/50 text-[1rem] leading-4 md:text-[1.4rem] md:leading-6 mx-auto text-center max-w-2xl my-10">
                    Discover movies and shows selected based on your ratings and
                    your friends preferences.
                </h2>
                <div className="flex flex-col md:flex-row w-[70%] md:w-full mx-auto md:mx-0 gap-4">
                    <button className="text-cream-50 dark:text-night-700 bg-night-700 hover:bg-night-700     dark:hover:bg-cream-200  dark:bg-cream-300 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1">
                        Create an account
                    </button>
                    <button className="text-night-700 dark:text-cream-50 border border-night-700 dark:border-cream-200 px-4 py-2 rounded-full cursor-pointer hover:bg-night-700  dark:hover:bg-cream-200 hover:text-cream-200 dark:hover:text-night-700 transition-all duration-300 hover:-translate-y-1">
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Users;
