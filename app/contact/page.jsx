import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import ContactForm from "./ContactForm";

const contacts = [
    {
        label: "Email",
        value: "",
        note: "Best for questions, bug reports and feedback.",
        href: "https://mail.google.com/mail/u/0/?fs=1&to=alireza.hamidi.eng@gmail.com&tf=cm",
        Icon: HiOutlineMail,
    },
    {
        label: "Telegram",
        value: "",
        note: "Quick messages and fast replies.",
        href: "https://t.me/alireza_arh12",
        Icon: FaTelegramPlane,
    },
    {
        label: "LinkedIn",
        value: "",
        note: "Work, collaboration and networking.",
        href: "https://www.linkedin.com/in/alireza-hamidi-aa8547288/",
        Icon: FaLinkedinIn,
    },
    {
        label: "GitHub",
        value: "",
        note: "Source code and project updates.",
        href: "https://github.com/Alireza-Hamidi2001",
        Icon: FaGithub,
    },
];

function ContactPage() {
    return (
        <main className="w-full mx-auto px-5 sm:px-8 md:px-10 lg:px-12 max-w-6xl my-[4rem] text-night-700 dark:text-cream-50">
            {/* Heading */}
            <header className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                    Get in touch
                </h1>
                <p className="mt-5 text-base md:text-lg text-night-700/70 dark:text-cream-50/60">
                    Have a question, found a bug or want to suggest a movie
                    feature? Send a message or reach out on any of the channels
                    below.
                </p>
            </header>

            <div className="relative mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
                {/* Form */}
                <section
                    aria-labelledby="form-title"
                    className="relative lg:col-span-3 order-2 lg:order-1"
                >
                    <div className=" bg-cream-50/50 dark:bg-night-950/70 cursor-not-allowed absolute z-10 w-full h-full"></div>
                    <h2
                        id="form-title"
                        className="text-xl md:text-2xl font-semibold mb-6"
                    >
                        Send a message
                    </h2>
                    <ContactForm />
                </section>

                {/* Contact methods */}
                <section
                    aria-labelledby="channels-title"
                    className="lg:col-span-2 order-1 lg:order-2"
                >
                    <h2
                        id="channels-title"
                        className="text-xl md:text-2xl font-semibold mb-6"
                    >
                        Other ways to reach us
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6">
                        {contacts.map(({ label, value, note, href, Icon }) => (
                            <li
                                key={label}
                                className="border-t border-night-700/15 dark:border-cream-50/15"
                            >
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-start gap-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night-700/50 dark:focus-visible:outline-cream-50/50 rounded-lg"
                                >
                                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cream-200 dark:bg-night-900 group-hover:bg-red-600 group-hover:text-cream-50 transition-colors duration-300">
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block font-semibold">
                                            {label}
                                        </span>
                                        <span className="block text-sm break-words">
                                            {value}
                                        </span>
                                        <span className="block mt-1 text-sm text-night-700/60 dark:text-cream-50/50">
                                            {note}
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-sm text-night-700/60 dark:text-cream-50/50">
                        We usually reply within one to two days.
                    </p>
                </section>
            </div>
        </main>
    );
}

export default ContactPage;
