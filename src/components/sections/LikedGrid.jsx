import React from "react";
import ImageCard from "../common/ImageCard";

function LikedGrid({ favourites = [], toggleLike }) {
    return (
        <div className="space-y-6">

            <h1 className="text-center text-3xl py-6 font-bold text-gray-900 dark:text-gray-100">
                Liked Photos
            </h1>

            {favourites.length === 0 ? (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                    No liked photos yet.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {favourites.map((photo) => (
                        <ImageCard
                            key={photo.id}
                            photo={photo}
                            isLiked={true}
                            toggleLike={toggleLike}
                        />
                    ))}

                </div>
            )}

        </div>
    );
}

export default LikedGrid;