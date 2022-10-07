import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('SAO');

    const onSubmit = (event) => {
        event.preventDefault();
        // if (inputValue.trim().length > 0) {
        //     setCategories(c => [...c, inputValue]);
        //     setInputValue('');
        // }

        if (inputValue.trim().length <= 0) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search Gifs"
                value={inputValue}
                onChange={onInputChange} />
        </form>
    )
};