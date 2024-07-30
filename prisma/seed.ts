import AlcoholicTypeSeed from './Seeds/AlcoholicType';
import CategorySeed from './Seeds/Category';
import DrinksSeed from './Seeds/Drinks';
import GlassesSeed from './Seeds/Glasses';
import IngredientsSeed from './Seeds/Ingredients';

const seeds = [
    AlcoholicTypeSeed,
    CategorySeed,
    GlassesSeed,
    IngredientsSeed,
    DrinksSeed,
];

const run = async () => {
    for (const seed of seeds) {
        try {
            await seed();
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
    }
};

run();
