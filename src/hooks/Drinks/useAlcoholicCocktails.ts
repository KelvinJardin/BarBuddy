"use client";

import { useEffect, useState } from "react";

import CocktailsApi from '@/services/CocktailDB/CocktailsApi';

const initialState = [];

const useAlcoholicCocktails = (refresh, alcoholic = true) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const {request, abortController} = CocktailsApi.drinks.filterByAlcoholic(alcoholic);

        request.then(({data: {drinks}}) => setState({drinks, isLoaded: true}));

        return () => abortController?.abort();
    }, [refresh, alcoholic]);

    return state;
};

export default useAlcoholicCocktails;
