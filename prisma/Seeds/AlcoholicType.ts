import prisma from "../../src/db";

export default async function run() {
    const names = [
        "Alcoholic",
        "Non-Alcoholic",
        "Optional Alcohol",
    ]

    for (const name of names) {
        const alcoholicType = await prisma.alcoholicType.findFirst({where: {name}});

        if (!alcoholicType) {
            await prisma.alcoholicType.create({data: {name}});
        }
    }

    return prisma;
}
