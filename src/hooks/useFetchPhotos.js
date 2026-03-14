import { useEffect, useState } from "react";

const API_URL = "https://picsum.photos/v2/list?limit=30";

export default function useFetchPhotos() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                setLoading(true);

                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Failed to Fetch Photos");
                }

                const data = await response.json();
                setPhotos(data);
            }
            catch (err) {
                console.log(err.message);
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchPhotos();
    }, []);

    return { photos, loading, error };
}