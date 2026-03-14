import React from "react";

function SearchBar({ search, setSearch }) {
    return (
        <div className="mb-6 w-full">

            <input
                type="text"
                placeholder="Search by author..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

        </div>
    );
}

export default SearchBar;