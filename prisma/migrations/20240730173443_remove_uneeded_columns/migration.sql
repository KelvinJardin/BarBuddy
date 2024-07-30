/*
  Warnings:

  - You are about to drop the column `creativeCommonsConfirmed` on the `Drink` table. All the data in the column will be lost.
  - You are about to drop the column `dateModified` on the `Drink` table. All the data in the column will be lost.
  - You are about to drop the column `drinkAlternate` on the `Drink` table. All the data in the column will be lost.
  - You are about to drop the column `drinkThumb` on the `Drink` table. All the data in the column will be lost.
  - You are about to drop the column `iba` on the `Drink` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Drink` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Drink" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER,
    "alcoholicTypeId" INTEGER,
    "glassId" INTEGER,
    "instructions" TEXT,
    CONSTRAINT "Drink_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Drink_glassId_fkey" FOREIGN KEY ("glassId") REFERENCES "Glasses" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Drink_alcoholicTypeId_fkey" FOREIGN KEY ("alcoholicTypeId") REFERENCES "AlcoholicType" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Drink" ("alcoholicTypeId", "categoryId", "glassId", "id", "instructions", "name") SELECT "alcoholicTypeId", "categoryId", "glassId", "id", "instructions", "name" FROM "Drink";
DROP TABLE "Drink";
ALTER TABLE "new_Drink" RENAME TO "Drink";
CREATE UNIQUE INDEX "Drink_name_key" ON "Drink"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
