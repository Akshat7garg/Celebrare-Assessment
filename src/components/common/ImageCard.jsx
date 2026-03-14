import { Heart } from "lucide-react";
import React from "react";

function ImageCard({ photo, isLiked, toggleLike }) {
    return (
        <div
            className="rounded-xl overflow-hidden shadow-md  bg-white dark:bg-gray-900 shadow-gray-900 dark:shadow-gray-500 hover:shadow-lg transition-all duration-500 ease-in-out"
        >
            <img
                src={photo.download_url}
                alt={photo.author}
                className="w-full h-48 object-cover"
            />

            <div className="flex justify-between items-center p-3">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {photo.author}
                </p>

                <button
                    onClick={() => toggleLike(photo)}
                    className="cursor-pointer text-xl transition-transform hover:scale-110"
                >
                    {isLiked ? (
                        <span className="text-red-500"><Heart fill="#fb2c36" /></span>
                    ) : (
                        <span className="text-gray-400 dark:text-gray-500"><Heart /></span>
                    )}
                </button>
            </div>
        </div>
    );
}

export default ImageCard;