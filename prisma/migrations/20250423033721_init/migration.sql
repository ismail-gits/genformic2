-- CreateTable
CREATE TABLE "Forms" (
    "id" TEXT NOT NULL,
    "owenerId" TEXT NOT NULL,
    "jsonForm" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Forms_pkey" PRIMARY KEY ("id")
);
