/*
  Warnings:

  - You are about to drop the column `passwordId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Password` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[hashed]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[salt]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `changedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashed` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_passwordId_fkey";

-- DropIndex
DROP INDEX "User_passwordId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "passwordId",
ADD COLUMN     "changedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "hashed" TEXT NOT NULL,
ADD COLUMN     "salt" TEXT NOT NULL;

-- DropTable
DROP TABLE "Password";

-- CreateIndex
CREATE UNIQUE INDEX "User_hashed_key" ON "User"("hashed");

-- CreateIndex
CREATE UNIQUE INDEX "User_salt_key" ON "User"("salt");
