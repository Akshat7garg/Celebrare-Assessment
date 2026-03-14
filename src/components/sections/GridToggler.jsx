import React, { useEffect, useReducer, useState } from "react";
import useFetchPhotos from "@/hooks/useFetchPhotos";
import HomeGrid from "./HomeGrid";
import LikedGrid from "./LikedGrid";
import { favouritesReducer } from "@/reducers/favouritesReducer";

function GridToggler() {

    const { photos, loading, error } = useFetchPhotos();
    const [isHome, setIsHome] = useState(true);

    const getStoredFavourites = () => {
        const data = localStorage.getItem("favourites");
        return data ? JSON.parse(data) : [];
    };

    const [favourites, dispatch] = useReducer(
        favouritesReducer,
        [],
        getStoredFavourites
    );

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    const toggleLike = (photo) => {
        const exists = favourites.some((fav) => fav.id === photo.id);

        if (exists) {
            dispatch({
                type: "Remove_Fav",
                payload: photo.id,
            });
        } else {
            dispatch({
                type: "Add_Fav",
                payload: photo,
            });
        }
    };

    return (
        <div className="pt-20 px-4 max-w-5xl mx-auto">

            <div className="flex gap-9 mb-6 justify-center text-lg">

                <button
                    onClick={() => setIsHome(true)}
                    className={`font-medium transition-all duration-300 ease-in-out cursor-pointer px-2 py-1 ${isHome ? "scale-105 border-b-2" : "border-b-2 border-transparent scale-100"}`}
                >
                    Gallery
                </button>

                <button
                    onClick={() => setIsHome(false)}
                    className={`font-medium transition-all duration-300 ease-in-out cursor-pointer px-2 py-1 ${!isHome ? "scale-105 border-b-2" : "border-b-2 border-transparent scale-100"}`}
                >
                    Liked
                </button>

            </div>

            {isHome ? (
                <HomeGrid
                    photos={photos}
                    loading={loading}
                    error={error}
                    favourites={favourites}
                    toggleLike={toggleLike}
                />
            ) : (
                <LikedGrid
                    favourites={favourites}
                    toggleLike={toggleLike}
                />
            )}

        </div>
    );
}

export default GridToggler;