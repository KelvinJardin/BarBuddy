/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `AlcoholicType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[drink]` on the table `Drink` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Glasses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AlcoholicType_name_key" ON "AlcoholicType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Drink_drink_key" ON "Drink"("drink");

-- CreateIndex
CREATE UNIQUE INDEX "Glasses_name_key" ON "Glasses"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");
