-- CreateTable
CREATE TABLE "UserReponses" (
    "id" TEXT NOT NULL,
    "formId" TEXT NOT NULL,
    "jsonResponse" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL DEFAULT 'anonymous',

    CONSTRAINT "UserReponses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserReponses" ADD CONSTRAINT "UserReponses_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
