/*
  Warnings:

  - Added the required column `mesa` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."pedidos" ADD COLUMN     "mesa" TEXT NOT NULL;
