"use client";

import * as React from 'react';

import { SwipeableTabs } from "@/components/Layout";

import useAlcoholicCocktails from "@/hooks/Drinks/useAlcoholicCocktails";

const Drinks = ({refresh}) : React.Element => {
    const alcoholic = true;
    const {drinks = [], isLoaded} = useAlcoholicCocktails(refresh, alcoholic);

    console.log({drinks, isLoaded});

    return (
        <div>
            {isLoaded ? (
                <ul>
                    {drinks.map(({idDrink, strDrink}) => (
                        <li key={idDrink}>{strDrink}</li>
                    ))}
                </ul>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default function({interval = 0}): React.Element {
    const [refresh, setRefresh] = React.useState(false);
    interval && setTimeout(() => setRefresh(!refresh), interval);

    const tabs = [
        {
            label: 'Drinks',
            content: Drinks({refresh}),
        },
        {
            label: 'Ingredients',
            content: 'IngredientsPage'
        },
        {
            label: 'Favorites',
            content: 'FavoritesPage'
        }
    ];

    return (<SwipeableTabs tabs={tabs} />)
};
