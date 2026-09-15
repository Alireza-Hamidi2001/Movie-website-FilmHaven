"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegImage } from "react-icons/fa";

function PosterImage({ posterPath, title }) {
    const [hasError, setHasError] = useState(false);
    const showFallback = !posterPath || hasError;

    return (
        <div className="relative w-full h-32 md:w-32 md:h-48 rounded-md overflow-hidden bg-cream-300 dark:bg-night-800 flex items-center justify-center">
            {showFallback ? (
                <FaRegImage className="w-12 h-12 text-night-700 dark:text-cream-200" />
            ) : (
                <Image
                    fill
                    unoptimized
                    src={`https://image.tmdb.org/t/p/w200${posterPath}`}
                    alt={title}
                    onError={() => setHasError(true)}
                    className="object-cover"
                />
            )}
        </div>
    );
}

export default PosterImage;
