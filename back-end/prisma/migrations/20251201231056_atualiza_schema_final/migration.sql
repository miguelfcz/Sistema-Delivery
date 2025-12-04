/*
  Warnings:

  - You are about to drop the column `mesa` on the `pedidos` table. All the data in the column will be lost.
  - Added the required column `endereco` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."estabelecimentos" ADD COLUMN     "capaUrl" TEXT,
ADD COLUMN     "cnpj" TEXT,
ADD COLUMN     "descricao" TEXT;

-- AlterTable
ALTER TABLE "public"."pedidos" DROP COLUMN "mesa",
ADD COLUMN     "endereco" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."produtos" ADD COLUMN     "imagemUrl" TEXT;
