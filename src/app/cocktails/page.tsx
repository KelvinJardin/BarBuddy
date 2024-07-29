import * as React from 'react';

import { SwipeableTabs } from "@/components/Layout";

export default function(): React.Element {
    const {users, isLoaded} = useList(refresh);

    const tabs = [
        {
            label: 'Cocktails',
            getContent: 'CocktailsPage',
        },
        {
            label: 'Ingredients',
            getContent: 'IngredientsPage'
        },
        {
            label: 'Favorites',
            getContent: 'FavoritesPage'
        }
    ];

    return (<SwipeableTabs tabs={tabs} />)
}
