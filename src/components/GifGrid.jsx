import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category);

    // const [gifs, setGifs] = useState([]);

    // const loadGifs = async () => {
    //     setGifs(await getGifs(category));
    // };

    // useEffect(() => {
    //     //getGifs(category);
    //     loadGifs();
    // }, []);

    //loadGifs();

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading ? <h3>Loading...</h3> : null
            }
            <div className="card-grid">
                {
                    gifs.map((gif) =>
                        <GifItem key={gif.id}
                            url={gif.gif.url}
                            title={gif.title}
                            height={gif.gif.height}
                            width={gif.gif.width} />)
                }
            </div>
        </>
    )
};