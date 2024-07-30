/*
  Warnings:

  - Added the required column `optional` to the `DrinkIngredient` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DrinkIngredient" (
    "drinkId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "optional" BOOLEAN NOT NULL,
    "measurement" TEXT,

    PRIMARY KEY ("drinkId", "ingredientId"),
    CONSTRAINT "DrinkIngredient_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "Drink" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DrinkIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DrinkIngredient" ("drinkId", "ingredientId", "measurement") SELECT "drinkId", "ingredientId", "measurement" FROM "DrinkIngredient";
DROP TABLE "DrinkIngredient";
ALTER TABLE "new_DrinkIngredient" RENAME TO "DrinkIngredient";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
