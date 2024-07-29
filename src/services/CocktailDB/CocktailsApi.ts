import BaseApiClient from "@/services/BaseApi";

const KEY = process.env.THECOCKTAILDB_KEY || 1;
const API_URL = `https://www.thecocktaildb.com/api/json/v1/${KEY}/`;

const CocktailDBApi = new BaseApiClient(API_URL);

export default class CocktailsApi {

    static drinks = {
        lookupById: (id: string) => CocktailDBApi.call({url: `lookup.php?i=${id}`}),

        searchByName: (name: string) => CocktailDBApi.call({url: `search.php?s=${name}`}),
        searchByIngredient: (ingredient: string) => CocktailDBApi.call({url: `filter.php?i=${ingredient}`}),
        listByFirstLetter: (letter: string) => CocktailDBApi.call({url: `search.php?f=${letter}`}),

        lookupRandom: () => CocktailDBApi.call({url: `random.php`}),

        filterByAlcoholic: (alcoholic: boolean) => CocktailDBApi.call({url: `filter.php?a=${alcoholic ? 'Alcoholic' : 'Non_Alcoholic'}`}),
        filterByCategory: (category: string) => CocktailDBApi.call({url: `filter.php?c=${category}`}),
        filterByGlass: (glass: string) => CocktailDBApi.call({url: `filter.php?g=${glass}`}),
    };

    static ingredients = {
        all: () => CocktailDBApi.call({url: `list.php?i=list`}),
        lookupById: (id: string) => CocktailDBApi.call({url: `lookup.php?iid=${id}`}),
        searchByName: (name: string) => CocktailDBApi.call({url: `search.php?i=${name}`}),
    };

    static misc = {
        listCategories: () => CocktailDBApi.call({url: `list.php?c=list`}),
        listGlasses: () => CocktailDBApi.call({url: `list.php?g=list`}),
        listAlcoholicFilters: () => CocktailDBApi.call({url: `list.php?a=list`}),
    }
}
