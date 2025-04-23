/*
  Warnings:

  - You are about to drop the column `owenerId` on the `Forms` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Forms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Forms" DROP COLUMN "owenerId",
ADD COLUMN     "ownerId" TEXT NOT NULL;
