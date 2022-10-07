import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GitExportApp = () => {

    const [categories, setCategories] = useState(['One Punche']);

    const onAddCategory = (category) => {
        if (categories.includes(category)) return;
        setCategories([...categories, category]);
    };

    return (
        <>
            <AddCategory onNewCategory={onAddCategory} />
            <ol>
                {
                    categories.map((c) => <GifGrid key={c} category={c} />)
                }
            </ol>
        </>
    );
}

export { GitExportApp };