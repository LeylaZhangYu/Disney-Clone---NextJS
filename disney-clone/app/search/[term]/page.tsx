import React from 'react';
import { notFound } from 'next/navigation';

type Props = {
    params: {
        term: string;
    };
};

const SearchPage = ({params: {term}}: Props) => {
    if (!term) notFound();

    const termToUse = decodeURI(term);

    // API call to get the Searched movies
    // API call to get the Popular Movies
    
    return (
        <div>Welcome to the search page: {termToUse}</div>
    )
}

export default SearchPage;