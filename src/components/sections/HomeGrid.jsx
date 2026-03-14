import React, { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import ImageCard from "../common/ImageCard";
import { Loader2 } from "lucide-react";

function HomeGrid({ photos = [], loading, error, favourites = [], toggleLike }) {

    const [search, setSearch] = useState("");

    const filteredPhotos = useMemo(() => {
        return photos.filter((photo) =>
            photo.author.toLowerCase().includes(search.toLowerCase())
        );
    }, [photos, search]);

    if (loading) {
        return (
            <div className="space-y-6">

                <h1 className="text-center text-3xl py-6 font-bold text-gray-900 dark:text-gray-100">
                    Photo Gallery
                </h1>

                <div className="text-center py-10 flex justify-center items-center gap-4">
                    <Loader2 className="animate-spin" />
                    <p>Loading photos...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="space-y-6">

                <h1 className="text-center text-3xl py-6 font-bold text-gray-900 dark:text-gray-100">
                    Photo Gallery
                </h1>
                <div className="text-center py-10 text-red-500">
                    <p>Error in loading photos, Refresh the page.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">

            <h1 className="text-center text-3xl py-6 font-bold text-gray-900 dark:text-gray-100">
                Photo Gallery
            </h1>

            <SearchBar search={search} setSearch={setSearch} />

            {filteredPhotos.length === 0 ? (
                <p className="text-center text-gray-500">
                    No images found
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {filteredPhotos.map((photo) => (
                        <ImageCard
                            key={photo.id}
                            photo={photo}
                            isLiked={favourites.some((f) => f.id === photo.id)}
                            toggleLike={toggleLike}
                        />
                    ))}

                </div>
            )}

        </div>
    );
}

export default HomeGrid;