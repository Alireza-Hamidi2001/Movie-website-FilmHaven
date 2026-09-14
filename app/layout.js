import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Michroma, Sansation } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

// export const metadata = {
//     title: {
//         default: "Film Haven",
//         template: "%s | Film Haven",
//     },
//     description: "Taste of Persia, From Persia with Love",
// };

export const michroma = Michroma({ subsets: ["latin"], weight: "400" });
export const sansation = Sansation({ subsets: ["latin"], weight: "400" });

// export const font = Robboto

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`dark suppressHydrationWarning h-full antialiased`}>
            <body
                className={`${sansation.className} relative antialiased bg-primary-950 text-primary-50 min-h-screen flex flex-col bg-cream-50 dark:bg-night-950`}>
                <div className="flex-1 grid">
                    <Header />
                    <main className="mx-auto max-w-8xl w-full">{children}</main>
                    <Footer />
                </div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    gutter={8}
                    toastOptions={{
                        duration: 5000,
                        style: {
                            background: "#363636",
                            color: "#fff",
                            borderRadius: "8px",
                            padding: "8px 16px",
                        },
                        success: {
                            duration: 3000,
                            style: {
                                background: "#CFFFCC",
                                color: "#056600",
                            },
                            iconTheme: {
                                primary: "#056600",
                                secondary: "#CFFFCC",
                            },
                        },
                        error: {
                            duration: 4000,
                            style: {
                                background: "#FFCCCC",
                                color: "#660000",
                            },
                            iconTheme: {
                                primary: "#f87171",
                                secondary: "#fff",
                            },
                        },
                    }}
                />
            </body>
        </html>
    );
}
