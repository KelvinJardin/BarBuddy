import { Prisma } from "@prisma/client";
import IngredientCreateInput = Prisma.IngredientCreateInput;

import prisma from "../../src/db";
import ingredientsJson from "./ingredients.json";

export default async function run() {
    const ingredients: IngredientCreateInput[] = ingredientsJson;

    for (const ingredient of ingredients) {
        await prisma.ingredient.upsert({
            create: ingredient,
            update: ingredient,
            where: {
                name: ingredient.name
            },
        });
    }

    return prisma;
}
