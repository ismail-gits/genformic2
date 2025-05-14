-- DropForeignKey
ALTER TABLE "UserReponses" DROP CONSTRAINT "UserReponses_formId_fkey";

-- AddForeignKey
ALTER TABLE "UserReponses" ADD CONSTRAINT "UserReponses_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Forms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
