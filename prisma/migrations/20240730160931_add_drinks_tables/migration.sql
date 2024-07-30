-- CreateTable
CREATE TABLE "Drink" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "drink" TEXT NOT NULL,
    "drinkAlternate" TEXT,
    "tags" TEXT,
    "categoryId" INTEGER,
    "iba" TEXT,
    "alcoholicTypeId" INTEGER,
    "glassId" INTEGER,
    "instructions" TEXT,
    "drinkThumb" TEXT,
    "creativeCommonsConfirmed" TEXT,
    "dateModified" DATETIME,
    CONSTRAINT "Drink_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Drink_glassId_fkey" FOREIGN KEY ("glassId") REFERENCES "Glasses" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Drink_alcoholicTypeId_fkey" FOREIGN KEY ("alcoholicTypeId") REFERENCES "AlcoholicType" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "alcohol" BOOLEAN NOT NULL,
    "categoryId" INTEGER,
    "abv" INTEGER,
    CONSTRAINT "Ingredient_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DrinkIngredient" (
    "drinkId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "measurement" TEXT,

    PRIMARY KEY ("drinkId", "ingredientId"),
    CONSTRAINT "DrinkIngredient_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "Drink" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DrinkIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AlcoholicType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Glasses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
