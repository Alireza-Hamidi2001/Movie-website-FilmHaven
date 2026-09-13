function FilterWatchList() {
    return (
        <div className="flex gap-1 h-fit">
            <p className="bg-blue-700 px-3 rounded-full">Movie at theaters</p>
            <p className="bg-black/30 px-3 rounded-full">Movie at home</p>
            <p className="bg-black/30 px-3 rounded-full">TV show</p>
        </div>
    );
}

export default FilterWatchList;
