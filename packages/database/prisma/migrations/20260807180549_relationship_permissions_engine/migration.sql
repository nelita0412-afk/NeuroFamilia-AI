/*
  Warnings:

  - Changed the type of `relationship` on the `FamilyMember` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PersonRole" AS ENUM ('CHILD', 'ADOLESCENT', 'YOUNG', 'MOTHER', 'FATHER', 'TUTOR', 'PROFESSIONAL', 'ADMINISTRATOR');

-- CreateEnum
CREATE TYPE "RelationshipType" AS ENUM ('CHILD', 'ADOLESCENT', 'YOUNG', 'MOTHER', 'FATHER', 'TUTOR', 'PROFESSIONAL', 'CAREGIVER', 'SIBLING', 'OTHER');

-- CreateEnum
CREATE TYPE "PermissionAction" AS ENUM ('READ_PROFILE', 'WRITE_PROFILE', 'READ_FAMILY', 'WRITE_FAMILY', 'READ_GROWTH', 'WRITE_GROWTH');

-- AlterTable
ALTER TABLE "FamilyMember" DROP COLUMN "relationship",
ADD COLUMN     "relationship" "RelationshipType" NOT NULL;

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "role" "PersonRole" NOT NULL DEFAULT 'TUTOR';

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "personId" TEXT;

-- CreateTable
CREATE TABLE "GrowthObservation" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "observedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GrowthObservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PermissionGrant" (
    "id" TEXT NOT NULL,
    "action" "PermissionAction" NOT NULL,
    "subjectPersonId" TEXT NOT NULL,
    "granterPersonId" TEXT,
    "familyId" TEXT,
    "profileId" TEXT,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PermissionGrant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PermissionGrant_subjectPersonId_action_idx" ON "PermissionGrant"("subjectPersonId", "action");

-- CreateIndex
CREATE INDEX "PermissionGrant_familyId_idx" ON "PermissionGrant"("familyId");

-- CreateIndex
CREATE INDEX "PermissionGrant_profileId_idx" ON "PermissionGrant"("profileId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrowthObservation" ADD CONSTRAINT "GrowthObservation_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionGrant" ADD CONSTRAINT "PermissionGrant_subjectPersonId_fkey" FOREIGN KEY ("subjectPersonId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionGrant" ADD CONSTRAINT "PermissionGrant_granterPersonId_fkey" FOREIGN KEY ("granterPersonId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionGrant" ADD CONSTRAINT "PermissionGrant_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "FamilyGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionGrant" ADD CONSTRAINT "PermissionGrant_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
