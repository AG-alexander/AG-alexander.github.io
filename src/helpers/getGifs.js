const apiKey = "JAo1EMCFqB25XrPVUufpxcwaaDKYiFRh";
export const getGifs = async (category) => {
    const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`
    );
    const { data } = await res.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        gif: img.images.original
    }));

    return gifs;
};
