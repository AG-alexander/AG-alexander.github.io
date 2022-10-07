import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadGifs = async () => {
        setGifs(await getGifs(category));
        setIsLoading(false)
    };

    useEffect(() => {
        loadGifs();
    }, []);

    return {
        gifs,
        isLoading
    }
}
