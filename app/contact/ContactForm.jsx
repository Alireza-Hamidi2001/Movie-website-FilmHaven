"use client";

import { useState } from "react";

const EMAIL = "alireza.hamidi.eng@gmail.com";

const inputClass =
    "w-full border border-night-700/20 dark:border-cream-50/20 px-3 py-2 rounded-lg text-night-700 dark:text-cream-50 bg-transparent placeholder:text-night-700/30 dark:placeholder:text-cream-50/30 focus:outline-night-700/50 dark:focus:outline-cream-50/50 transition-all duration-300";

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    function handleChange(e) {
        setSent(false);
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const subject = encodeURIComponent(`Film Haven message from ${form.name}`);
        const body = encodeURIComponent(
            `${form.message}\n\n— ${form.name} (${form.email})`
        );

        // Opens the visitor's mail app with the message filled in.
        // Replace this with a fetch() to an API route if you add a backend.
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
        setSent(true);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 text-night-700 dark:text-cream-50"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className={`${inputClass} resize-none`}
                />
            </div>

            <button
                type="submit"
                className="bg-red-600 dark:bg-red-500 hover:-translate-y-0.5 cursor-pointer text-cream-50 px-6 py-2.5 rounded-lg transition-all duration-300 sm:justify-self-start"
            >
                Send message
            </button>

            {sent && (
                <p role="status" className="text-sm text-night-700/70 dark:text-cream-50/60">
                    Your email app should open with the message ready to send.
                </p>
            )}
        </form>
    );
}

export default ContactForm;
