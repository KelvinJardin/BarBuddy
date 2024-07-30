/*
  Warnings:

  - You are about to drop the column `drink` on the `Drink` table. All the data in the column will be lost.
  - Added the required column `name` to the `Drink` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Drink" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
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
INSERT INTO "new_Drink" ("alcoholicTypeId", "categoryId", "creativeCommonsConfirmed", "dateModified", "drinkAlternate", "drinkThumb", "glassId", "iba", "id", "instructions", "tags") SELECT "alcoholicTypeId", "categoryId", "creativeCommonsConfirmed", "dateModified", "drinkAlternate", "drinkThumb", "glassId", "iba", "id", "instructions", "tags" FROM "Drink";
DROP TABLE "Drink";
ALTER TABLE "new_Drink" RENAME TO "Drink";
CREATE UNIQUE INDEX "Drink_name_key" ON "Drink"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
