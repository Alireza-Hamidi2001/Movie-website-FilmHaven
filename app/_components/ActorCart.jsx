function ActorCart({ actorSelected }) {
    const posterUrl = actorSelected.profile_path
        ? `https://image.tmdb.org/t/p/w500${actorSelected.profile_path}`
        : null;
    return (
        <div className="mt-[4rem] h-[calc(100vh-4rem)] text-night-700 dark:text-cream-50 flex justify-center items-center">
            {posterUrl ? (
                <img
                    src={posterUrl}
                    alt={movieSelected.title}
                    className="object-cover w-full h-full"
                />
            ) : (
                <div className="w-full h-96 bg-gray-800 flex items-center justify-center text-gray-500">
                    No image
                </div>
            )}
            <div>
                <p>{actorSelected.name}</p>
                <p>{actorSelected.known_for_department}</p>
                <p>{actorSelected.birthday}</p>
                <p>{actorSelected.place_of_birth}</p>
                <p>{actorSelected.biography}</p>
                {/* <p>{actorSelected.movie_credits}</p> */}

                {actorSelected.movie_credits?.map((movie) => (
                    <p
                        key={movie.id}
                        className="text-xs bg-cream-300 dark:bg-night-900 rounded-full px-3 py-1"
                    >
                        {movie.name}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default ActorCart;
