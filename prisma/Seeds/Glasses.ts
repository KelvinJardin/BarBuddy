import prisma from "../../src/db";

export default async function run() {
    const names = [
        "Highball",
        "Cocktail",
        "Old-fashioned",
        "Whiskey Glass",
        "Collins",
        "Pousse cafe",
        "Champagne flute",
        "Whiskey sour",
        "Cordial",
        "Brandy snifter",
        "White wine",
        "Nick and Nora Glass",
        "Hurricane",
        "Coffee mug",
        "Shot",
        "Jar",
        "Irish coffee cup",
        "Punch bowl",
        "Pitcher",
        "Pint",
        "Copper Mug",
        "Wine Glass",
        "Beer mug",
        "Margarita/Coupette",
        "Beer pilsner",
        "Beer Glass",
        "Parfait",
        "Mason jar",
        "Margarita",
        "Martini Glass",
        "Balloon Glass",
        "Coupe Glass",
    ];

    for (const name of names) {
        const glass = await prisma.glasses.findFirst({where: {name}});

        if (!glass) {
            await prisma.glasses.create({data: {name}});
        }
    }

    return prisma;
}
