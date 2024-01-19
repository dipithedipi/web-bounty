/*
  Warnings:

  - You are about to drop the column `emailToken` on the `Token` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tokenValue]` on the table `Token` will be added. If there are existing duplicate values, this will fail.
  - Made the column `changedAt` on table `Password` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `tokenValue` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Token_emailToken_key";

-- AlterTable
ALTER TABLE "Password" ALTER COLUMN "changedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Token" DROP COLUMN "emailToken",
ADD COLUMN     "tokenValue" TEXT NOT NULL,
ALTER COLUMN "type" SET DEFAULT 'API';

-- CreateIndex
CREATE UNIQUE INDEX "Token_tokenValue_key" ON "Token"("tokenValue");
