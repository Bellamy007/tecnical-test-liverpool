import { createContext, useState, useEffect } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setQuery(inputValue);
        }, 400);

        return () => clearTimeout(timeout);
    }, [inputValue]);

    return (
        <SearchContext.Provider value={{ query, setInputValue }}>
            {children}
        </SearchContext.Provider>
    );
}

export { SearchContext, SearchProvider }
