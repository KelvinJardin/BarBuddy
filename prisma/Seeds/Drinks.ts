import { Prisma } from "@prisma/client";
import DrinkCreateInput = Prisma.DrinkCreateInput;

import prisma from "../../src/db";
import drinksJson from "./drinks.json";

export default async function run() {
    const drinks: DrinkCreateInput[] = drinksJson;

    for (const drink of drinks) {
        await prisma.drinkIngredient.deleteMany({where: {drink: {name: drink.name}}});
        await prisma.drink.deleteMany({where: {name: drink.name}});
        await prisma.drink.create({data: drink});
    }

    return prisma;
}
