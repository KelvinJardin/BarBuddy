import prisma from "../../src/db";

export default async function run() {
    const names = [
        "Alcohol",
        "Ordinary Drink",
        "Cocktail",
        "Coffee / Tea",
        "Homemade Liqueur",
        "Beer",
        "Soft Drink",
        "Soda",
        "Condiment",
        "Garnish",
        "Other",
    ]

    for (const name of names) {
        await prisma.category.upsert({
            create: {name},
            update: {name},
            where: {name},
        });
    }

    return prisma;
}
